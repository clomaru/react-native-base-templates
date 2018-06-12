import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
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
		<StyleButton onPress={onPress}>Add</StyleButton>
	</Wrapper>
);

export default SubmittionBox;

const Wrapper = styled.View``;

const StyleButton = styled(Button)`
	margin-top: 10px;
`;
