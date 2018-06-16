import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {
	children?: string;
}

const ListItem: React.SFC<Props> = ({ children, ...props }) => (
	<Wrapper {...props}>
		<Text>{children}</Text>
	</Wrapper>
);

export default ListItem;

const Wrapper = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;
