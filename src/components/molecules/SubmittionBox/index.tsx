import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from '../../atoms/Button/index';
import TextBox from '../../atoms/TextBox/index';
import { View } from 'react-native';

interface Props {
	children: string;
}

export const SubmittionBox: React.SFC<Props> = ({ children, ...props }) => (
	<Wrapper {...props}>
		<TextBox {...props}>{children}</TextBox>
		<Button {...props}>Add</Button>
	</Wrapper>
);

export default SubmittionBox;

// TODO: もっと汎用的なstyleにする
const Wrapper = styled.View``;
