import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import Button from '../../atoms/Button/index';
import TextBox from '../../atoms/TextBox/index';

interface Props {
	children?: string;
	onPress?: any;
}

export const SubmittionBox: React.SFC<Props> = ({
	children,
	onPress,
	...props
}) => (
	<Wrapper>
		<TextBox {...props}>{children}</TextBox>
		<StyleButton onPress={onPress}>Add</StyleButton>
	</Wrapper>
);

export default SubmittionBox;

interface StyledProps {
	onPress?: any;
}

const Wrapper = styled.View``;

const StyleButton = styledComponentsTS<StyledProps>(styledComponents(Button))`
	margin-top: 10px;
`;
