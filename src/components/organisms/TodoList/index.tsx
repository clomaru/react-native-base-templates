import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { AsyncStorage, ScrollView } from 'react-native';
import List from '../../molecules/List/index';
import SubmittionBox from '../../molecules/SubmittionBox/index';
import { Text } from 'react-native';
import { containPresenter } from '../../utils/HoC.js';
import Heading from '../../atoms/Heading/index';

interface Props {
	presenter: any;
	children: string;
	value: any;
	onPressAdd: any;
	onChangeText: any;
	onPressDelete: any;
	storeTodos: any;
	loadTodos: any;
}

interface State {
	todos: string[];
}

export class TodoListContianer extends React.Component<Props, State> {
	constructor() {
		super();
		this.onChangeText = this.onChangeText.bind(this);
		this.onPressAdd = this.onPressAdd.bind(this);
		this.onPressDelete = this.onPressDelete.bind(this);
	}

	public render() {
		const {
			presenter,
			value,
			todos,
			onChangeText,
			onPressAdd,
			onPressDelete,
			...props
		} = this.props;
		const presenterProps = {
			value,
			todos,
			onChangeText,
			onPressAdd,
			onPressDelete,
			...props
		};
		return presenter(presenterProps);
	}

	private onChangeText(...args): void {
		const { onChangeText, text } = this.props;
		onChangeText(...args, text);
	}

	private onPressAdd(): void {
		const { onPressAdd } = this.props;
		onPressAdd();
	}

	private onPressDelete(index): void {
		const { onPressDelete, index } = this.props;
		onPressDelete(index);
	}
}

export const TodoListPresenter: React.SFC<Props> = ({
	value,
	todos,
	onChangeText,
	onPressAdd,
	onPressDelete,
	...props
}) => (
	<Wrapper>
		<Heading type="h3">Todo App</Heading>

		<SubmittionBox
			value={value}
			onChangeText={onChangeText}
			onPress={onPressAdd}
		/>

		<TodoScrollView>
			{todos.map((todo, index) => (
				<List key={todo + index} onPress={index => onPressDelete(index)}>
					{todo}
				</List>
			))}
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
