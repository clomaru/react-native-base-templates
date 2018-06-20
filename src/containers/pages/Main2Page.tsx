import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {}

interface State {}

export default class Main2Page extends React.Component<Props, State> {
	public render() {
		return (
			<Container>
				<WelcomeText>main2 page!!</WelcomeText>
				<InstructionsText>To get started, edit Main.js</InstructionsText>
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

const WelcomeText = styled.Text`
	font-size: 20px;
	text-align: center;
	margin: 10px;
`;

const InstructionsText = styled.Text`
	text-align: center;
	color: #333333;
	margin-bottom: 5px;
`;
