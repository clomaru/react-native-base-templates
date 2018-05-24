import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Platform, StyleSheet, Text, View } from 'react-native';

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

interface Propx {}

interface State {}

export default class App extends React.Component<Props, State> {
	public render() {
		return (
			<Container>
				<WelcomeText>Add TypeScript</WelcomeText>
				<InstructionsText>To get started, edit App.js</InstructionsText>
			</Container>
		);
	}
}
