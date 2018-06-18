import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { containPresenter } from '../../utils/HoC.js';
import Heading from '../../atoms/Heading/index';
import List from '../../molecules/List/index';
import SubmittionBox from '../../molecules/SubmittionBox/index';

import Txt from '../../atoms/Txt/index';

interface Props {
	presenter?: any;
	onPressAdd?: any;
	onChangeText?: any;
	onPressDelete?: any;
	value?: any;
	todos?: string[];
	text?: string;
	index?: number;
}

interface State {}

class TodoListContianer extends React.Component<Props, State> {
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

const TodoListPresenter: React.SFC<Props> = ({
	value,
	todos,
	onChangeText,
	onPressAdd,
	onPressDelete,
	...props
}) => (
	<Wrapper>
		<Heading types="h3">Todo App</Heading>

		<StyledSubmittionBox
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

interface StyledProps {
	value?: any;
	onChangeText?: any;
	onPress?: any;
}

const Wrapper = styled.View`
	padding: 10px;
`;

const StyledSubmittionBox = styledComponentsTS<StyledProps>(
	styledComponents(SubmittionBox)
)`
	margin-top: 10px;
`;

const TodoScrollView = styled.ScrollView`
	margin-top: 20px;
	background-color: #ddd;
`;
