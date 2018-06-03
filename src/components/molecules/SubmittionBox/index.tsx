import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from '../../atoms/Button/index';
import TextBox from '../../atoms/TextBox/index';
import { View } from 'react-native';

interface Props {
	children: string;
	onPressAdd: any;
}

export const SubmittionBox: React.SFC<Props> = ({
	children,
	onPress,
	...props
}) => (
	<Wrapper {...props}>
		<TextBox {...props}>{children}</TextBox>
		<Button onPress={onPress}>Add</Button>
	</Wrapper>
);

export default SubmittionBox;

// TODO: もっと汎用的なstyleにする
const Wrapper = styled.View``;
