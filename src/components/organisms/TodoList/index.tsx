import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { AsyncStorage, ScrollView } from 'react-native';
import List from '../../molecules/List/index';
import SubmittionBox from '../../molecules/SubmittionBox/index';
import { Text } from 'react-native';
import { containPresenter } from '../../utils/HoC.js';

interface Props {
	children: string;
	presenter: any;
	onChangeText: any;
}

interface State {}

export class TodoListContianer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: '',
			todos: []
		};

		this.onChangeText = this.onChangeText.bind(this);
	}

	public render() {
		const { presenter, onChangeText, ...props } = this.props;
		const presenterProps = { onChangeText, ...props };
		return presenter(presenterProps);
	}

	private onChangeText(text: string): void {
		console.log(this.state);
		this.setState({ newTodo: text });
	}

	// private onPressAdd(): void {
	// 	const { newTodo } = this.state;
	// 	this.setState(
	// 		{
	// 			newTodo: '',
	// 			todos: [newTodo, ...this.state.todos]
	// 		}
	// 		// () => this.storeTodos()
	// 	);
	// }

	// private storeTodos(): void{
	//   const str = JSON.stringify(this.state.todos)
	//   AsyncStorage.setItem('todos', str)
	// }

	// private loadTodos(): void{
	//   AsyncStorage.getItem('todos').then((str) => {
	//     const todos = str ? JSON.parse(str) : [];
	//     this.setState({todos})
	//   }
	// }
}

export const TodoListPresenter: React.SFC<Props> = ({
	onChangeText,
	...props
}) => (
	<Wrapper>
		<Text>text form</Text>

		<SubmittionBox onChangeText={onChangeText} />

		<TodoScrollView>
			<List />
			{/* {todos.map((todo, index) => <List key={todo + index}>{todo}</List>)} */}
		</TodoScrollView>

		{/* <SubmittionBox
			value={value}
			onChangeText={onChangeText}
			onPress={onPressAdd}
		/>

		<TodoScrollView>
			{this.state.todos.map((todo, index) => (
				<List key={todo + index} onPress={() => this.onPressDelete(index)}>
					{todo}
				</List>
			))}
		</TodoScrollView> */}
	</Wrapper>
);

const TodoList = containPresenter(TodoListContianer, TodoListPresenter);

export default TodoList;

// TODO: もっと汎用的なstyleにする
const Wrapper = styled.View``;

const TodoScrollView = styled.ScrollView`
	background-color: #ddd;
`;
