import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text } from 'react-native';

interface Props {
	children?: React.ReactNode;
	sizes?: number;
}

const Txt: React.SFC<Props> = ({ children, sizes, ...props }) => (
	<Wrapper size={sizes} {...props}>
		{children}
	</Wrapper>
);
export default Txt;

export const Anchor: React.SFC<Props> = ({ children, sizes, ...props }) => (
	<StyledTxt size={sizes} {...props}>
		{children}
	</StyledTxt>
);

interface StyledProps {
	sizes?: number;
}

const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
	font-size: ${p => p.size}px;
`;

const StyledTxt = styledComponentsTS<StyledProps>(styledComponents(Text))`
	color: blue;
`;
