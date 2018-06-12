import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { containPresenter } from '../../utils/HoC.js';
import Heading from '../../atoms/Heading';
import List from '../../molecules/List';
import SubmittionBox from '../../molecules/SubmittionBox';

interface Props {
	presenter: any;
	children: string;
	value: any;
	onPressAdd: any;
	onChangeText: any;
	onPressDelete: any;
	storeTodos: any;
	loadTodos: any;
	todos: string[];
	text: string;
	index: number;
}

interface State {}

export class TodoListContianer extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
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

	private onPressDelete(): void {
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

		<StyleSubmittionBox
			value={value}
			onChangeText={onChangeText}
			onPress={onPressAdd}
		/>

		<TodoScrollView>
			{todos.map((todo, index) => (
				<List key={todo + index} onPress={() => onPressDelete(index)}>
					{todo}
				</List>
			))}
		</TodoScrollView>
	</Wrapper>
);

const TodoList = containPresenter(TodoListContianer, TodoListPresenter);

export default TodoList;

const Wrapper = styled.View`
	padding: 10px;
`;

const StyleSubmittionBox = styled(SubmittionBox)`
	margin-top: 10px;
`;

const TodoScrollView = styled.ScrollView`
	margin-top: 20px;
	background-color: #ddd;
`;
