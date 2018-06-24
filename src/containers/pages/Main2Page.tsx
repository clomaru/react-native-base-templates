import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import actions from '../../actions/index';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';

interface Props {
	page: number;
	actions: any;
}

interface State {
	showText: string;
}

const mapStateToProps = (state: State) => ({
	showText: state.main2_reducer.showText
});

class MainPage2 extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	public render() {
		return (
			<Container>
				<View>
					<Text style={{ fontSize: 20 }}>{this.props.showText}</Text>
					<Button onPress={this.props.actions.changeText}>
						change the text
					</Button>
				</View>
			</Container>
		);
	}
}

export default connect(
	mapStateToProps,
	(dispatch: Dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(MainPage2);

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
