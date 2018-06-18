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

// atomic desing版
// import * as React from 'react';
// import styled from 'styled-components/native';
// import styledComponents from 'styled-components';
// import styledComponentsTS from 'styled-components-ts';
// import { Text } from 'react-native';
//
// // TODO:わかりやすいように'sizes'とかに変えたので修正
// enum TagSize {
// 	s,
// 	m,
// 	l
// }
//
// interface Props {
// 	children?: React.ReactNode;
// 	sizes?: TagSize;
// }
//
// const Txt: React.SFC<Props> = ({ children, sizes = TagSize.m, ...props }) => (
// 	<Wrapper size={sizes} {...props}>
// 		{children}
// 	</Wrapper>
// );
// export default Txt;
//
// TODO:onPress追加
// export const Anchor: React.SFC<Props> = ({ children, sizes, ...props }) => (
// 	<StyledTxt size={sizes} {...props}>
// 		{children}
// 	</StyledTxt>
// );
//
// interface StyledProps {
// 	sizes?: TagSize;
// }
//
// const Wrapper = styledComponentsTS<StyledProps>(styledComponents(Text))`
// 	font-size: ${p => tagSize[p.size]};
// `;
//
// const StyledTxt = styled(Txt)`
// 	color: blue;
// `;
//
// const tagSize = {
// 	s: '10px',
// 	m: '20px',
// 	l: '30px'
// };
//
