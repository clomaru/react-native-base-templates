import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	AsyncStorage
} from 'react-native';

import Button from './components/atoms/Button/index'
import TextBox from './components/atoms/TextBox/index'
import ListItem from './components/atoms/ListItem/index'
import List from './components/molecules/List/index'
import SubmittionBox from './components/molecules/SubmittionBox/index'

const Container = styled.View`
	flex: 1;
	padding: 40px;
`;

const MyTextInput = styled.TextInput`
	margin-top: 30px;
	background-color: #eee;
	padding: 10px;
`;

const TodoScrollView = styled.ScrollView`
	background-color: #ddd;
`;

const TodoContainer = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;

export interface Props {}

export interface State {
	newTodo: string;
	todos: string[];
}

export default class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.loadTodos()
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

				{/* <SubmittionBox></SubmittionBox> */}

				<TextBox
					value={this.state.newTodo}
					onChangeText={text => this.onChangetext(text)}
				/>
				<Button onPress={() => this.onPressAdd()}>Add</Button>

				<TodoScrollView>
					{this.state.todos.map((todo, index) => (


						<ListItem key={todo + index}>
							<Text>{todo}</Text>
							<TouchableOpacity onPress={() => this.onPressDelete(index)}>
								<Text>Dlete</Text>
							</TouchableOpacity>
						</ListItem>

					))}

				</TodoScrollView>
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
		}, () => this.storeTodos());
	}

	private onPressDelete(index: any): void {
		this.setState({
			todos: this.state.todos.filter((t, i) => i !== index)
		}, () => this.storeTodos());
		console.log(index);
	}

	private storeTodos(): void{
		const str = JSON.stringify(this.state.todos)
		AsyncStorage.setItem('todos', str)
	}

	private loadTodos(): void{
		AsyncStorage.getItem('todos').then((str) => {
			const todos = str ? JSON.parse(str) : [];
			this.setState({todos})
		}
	}
}
