import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {
	children?: React.ReactNode;
}

const ListItem: React.SFC<Props> = ({ children, ...props }) => (
	<Wrapper {...props}>{children}</Wrapper>
);

export default ListItem;

const Wrapper = styled.View`
	flex-direction: row;
	background-color: #fff;
	padding: 10px;
	justify-content: space-between;
`;
