import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

const Container = styled.View`
	flex: 1;
	padding: 40px;
`;

const MyTextInput = styled.TextInput`
	margin-top: 30px;
	background-color: #eee;
	padding: 10px;
`;

const AddButton = styled.TouchableOpacity`
	background-color: #333;
	padding: 14px;
	border-radius: 4px;
	margin-top: 10px;
`;

const AddButtonText = styled.Text`
	color: #fff;
	text-align: center;
	font-weight: bold;
`;

export interface Props {}

export default class App extends React.Component<Props, { value: string }> {
	constructor(props: Props) {
		super(props);
		this.state = {
			newTodo: '',
			todos: []
		};
	}

	public render(): JSX.Element {
		console.log(this.state);
		return (
			<Container>
				<Text>text form</Text>
				<MyTextInput
					value={this.state.newTodo}
					onChangeText={text => this.onChangetext(text)}
				/>
				<AddButton onPress={() => this.onPressAdd()}>
					<AddButtonText>Add</AddButtonText>
				</AddButton>
			</Container>
		);
	}

	private onChangetext(text: string): void {
		console.log(text);
		this.setState({ newTodo: text });
	}

	private onPressAdd(): void {
		const { newTodo } = this.state;
		this.setState({
			newTodo: '',
			todos: [newTodo, ...this.state.todos]
		});
	}
}
