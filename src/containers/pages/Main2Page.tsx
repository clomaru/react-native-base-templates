import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';

interface Props {
	page: number;
	showText: string;
}

interface State {
	main2Reducer: any;
}

const mapStateToProps = (state: State) => ({
	showText: state.main2Reducer.showText
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
					<Button onPress={this.props.changeText}>change the text</Button>
				</View>
			</Container>
		);
	}
}

import * as MainPage2Module from '../../modules/MainPage2Module';
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		changeText: () => dispatch(MainPage2Module.changeText())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage2);

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
