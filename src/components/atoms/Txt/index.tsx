import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text } from 'react-native';

interface Props {
	children?: React.ReactNode;
	size?: number;
}

const Txt: React.SFC<Props> = ({ children, size = 15, ...props }) => (
	<Wrapper size={size} {...props}>
		{children}
	</Wrapper>
);
export default Txt;

interface StyledProps {
	size?: number;
}

const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
	font-size: ${p => p.size}px;
`;
