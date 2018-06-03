import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from '../../atoms/Button/index';
import ListItem from '../../atoms/ListItem/index';
import { Text, View } from 'react-native';

interface Props {
	children: string;
}

export const List: React.SFC<Props> = ({ children, onPress, ...props }) => (
	<Wrapper {...props}>
		<Text>{children}</Text>
		<Button onPress={onPress} {...props}>
			Delete
		</Button>
	</Wrapper>
);

export default List;

// TODO: もっと汎用的なstyleにする
const Wrapper = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;
