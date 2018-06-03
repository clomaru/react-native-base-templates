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

import TodoList from './components/organisms/TodoList/index'

const Container = styled.View`
	flex: 1;
	padding: 40px;
`;


const TodoScrollView = styled.ScrollView`
	background-color: #ddd;
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


				{/* <Text>text form</Text>

				<SubmittionBox
					value={this.state.newTodo}
					onChangeText={text => this.onChangetext(text)}
					onPress={() => this.onPressAdd()}
				/>

				<TodoScrollView>
					{this.state.todos.map((todo, index) => (
						<List key={todo + index} onPress={() => this.onPressDelete(index)}>{todo}</List>
					))}
				</TodoScrollView> */}

				<TodoList
					value={this.state.newTodo}
					todos={this.state.todos}
					onChangeText={text => this.onChangetext(text)}
					onPressAdd={() => this.onPressAdd()}
					onPressDelete={index => this.onPressDelete(index)}
				/>

			</Container>
		);
	}

	private onChangetext(text: string): void {
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
