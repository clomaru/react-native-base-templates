import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

import Button from '../../components/atoms/Button/index';
import { changeText } from '../../modules/MainPage2Module';

interface Props {
	showText: string;
	changeText: () => void;
}

interface State {
	main2Reducer: any;
}

const mapStateToProps = (state: State): any => ({
	showText: state.main2Reducer.showText
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ changeText }, dispatch);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage2 extends React.Component<Props, State> {
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

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
