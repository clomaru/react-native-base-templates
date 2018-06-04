import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from '../../atoms/Button/index';
import ListItem from '../../atoms/ListItem/index';
import { View } from 'react-native';

interface Props {
	children: string;
	onPress: any;
}

export const List: React.SFC<Props> = ({ children, onPress, ...props }) => (
	<Wrapper {...props}>
		<StyleListItem>{children}</StyleListItem>
		<StyleButton onPress={onPress} {...props}>
			Delete
		</StyleButton>
	</Wrapper>
);

export default List;

const Wrapper = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;

const StyleListItem = styled(ListItem)``;

const StyleButton = styled(Button)`
	background-color: #e65100;
`;
