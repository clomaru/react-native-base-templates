import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
	children?: string;
}

export const Button: React.SFC<Props> = ({ children, ...props }) => (
	<Wrapper {...props}>
		<ButtonText>{children}</ButtonText>
	</Wrapper>
);

export default Button;

const Wrapper = styled.TouchableOpacity`
	background-color: #333;
	padding: 14px;
	border-radius: 4px;
`;

const ButtonText = styled.Text`
	color: #fff;
	text-align: center;
	font-weight: bold;
`;
