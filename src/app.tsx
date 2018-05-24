import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const Container = styled.View`
	flex: 1;
	padding: 40px;
`;

const MyTextInput = styled.TextInput`
	margin-top: 30px;
	background-color: grey;
	padding: 10px;
`;

export interface Props {}

export default class App extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
		this.state = {
			newTodo: ''
		};
	}

	render(): JSX.Element {
		return (
			<Container>
				<Text>text form</Text>
				<MyTextInput onChangeText={text => this.onChangetext(text)} />
			</Container>
		);
	}

	private onChangetext(text: string) {
		console.log(text);
		this.setState({ newTodo: text });
	}
}
