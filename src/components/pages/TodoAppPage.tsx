import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { View, ScrollView, AsyncStorage } from 'react-native';

import TodoList from '../organisms/TodoList/index';

export interface Props {}

export interface State {
	newTodo: string;
	todos: string[];
}

export default class TodoAppPage extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.loadTodos();
		this.state = {
			newTodo: '',
			todos: []
		};
	}

	public render(): JSX.Element {
		return (
			<Container>
				<TodoList
					value={this.state.newTodo}
					todos={this.state.todos}
					onChangeText={this.onChangetext.bind(this)}
					onPressAdd={this.onPressAdd.bind(this)}
					onPressDelete={this.onPressDelete.bind(this)}
				/>
			</Container>
		);
	}

	private onChangetext(text: string): void {
		this.setState({ newTodo: text });
	}

	private onPressAdd(): void {
		const { newTodo } = this.state;
		this.setState(
			{
				newTodo: '',
				todos: [newTodo, ...this.state.todos]
			},
			() => this.storeTodos()
		);
	}

	private onPressDelete(index: any): void {
		this.setState(
			{
				todos: this.state.todos.filter((t, i) => i !== index)
			},
			() => this.storeTodos()
		);
	}

	private storeTodos(): void {
		const str = JSON.stringify(this.state.todos);
		AsyncStorage.setItem('todos', str);
	}

	private loadTodos(): void {
		AsyncStorage.getItem('todos').then(str => {
			const todos = str ? JSON.parse(str) : [];
			this.setState({ todos });
		});
	}
}

const Container = styled.View`
	flex: 1;
	padding: 40px;
`;