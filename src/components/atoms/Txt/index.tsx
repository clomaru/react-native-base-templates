import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text } from 'react-native';

enum TagSize {
	s,
	m,
	l
}

interface Props {
	children?: string;
	size?: TagSize;
}

interface StyledProps {
	size?: TagSize;
}

const Txt: React.SFC<Props> = ({ children, size = 'm', ...props }) => (
	<Wrapper size={size} {...props}>
		{children}
	</Wrapper>
);
export default Txt;

export const Anchor: React.SFC<Props> = ({ children, ...props }) => (
	<StyledTxt {...props}>{children}</StyledTxt>
);

const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
	font-size: ${p => tagSize[p.size]};
`;

const StyledTxt = styled(Txt)`
	color: blue;
`;

const tagSize = {
	s: '10px',
	m: '20px',
	l: '30px'
};
