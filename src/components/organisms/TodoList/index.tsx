import * as React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { containPresenter } from '../../utils/HoC';
import Heading from '../../atoms/Heading/index';
import List from '../../molecules/List/index';
import SubmittionBox from '../../molecules/SubmittionBox/index';

interface Props {
	presenter?: any;
	onPressAdd?: () => void;
	onChangeText?: (text: string) => void | undefined;
	onPressDelete?: (index: number) => void;
	value?: string;
	todos?: string[] | undefined;
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
			value,
			todos,
			onChangeText,
			onPressAdd,
			onPressDelete,
			presenter,
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

	private onChangeText(...args: any[]): void {
		const { onChangeText, text } = this.props;
	}

	private onPressAdd(): void {
		const { onPressAdd } = this.props;
	}

	private onPressDelete(): void {
		const { onPressDelete, index } = this.props;
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
	value?: string;
	onChangeText?: (text: string) => void;
	onPress?: () => void;
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
