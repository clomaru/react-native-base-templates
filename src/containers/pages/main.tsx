import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity } from 'react-native';

interface Props {}

interface State {}

export default class Main extends React.Component<Props, State> {
	public render() {
		return (
			<Container>
				<TouchableOpacity onPress={() => this.onPressFetch()}>
					<Text>Fetch</Text>
				</TouchableOpacity>
			</Container>
		);
	}

	onPressFetch() {
		fetch('https://api.github.com/search/repositories?q=react')
			.then(response => response.json())
			.then(({ items }) => console.log(items));
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
