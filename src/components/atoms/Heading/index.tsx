// import * as React from 'react';
// import { css } from 'styled-components';
// import styled from 'styled-components/native';
// import { Text } from 'react-native';
//
// interface Props {
// 	children: string;
// }
//
// export const HeadingPresenter: React.SFC<Props> = ({
// 	tag: Tag,
// 	visualLevel,
// 	className,
// 	...props
// }) => (
// 	<Tag
// 		className={[styles[`h${visualLevel}`], className].join(' ')}
// 		{...props}
// 	/>
// );
//
// export const HeadingUnderlinedPresenter: React.SFC<Props> = ({
// 	tag: Tag,
// 	visualLevel,
// 	...props
// }) => (
// 	<Tag
// 		className={[styles[`h${visualLevel}`], className].join(' ')}
// 		{...props}
// 	/>
// );
//
// export const HeadingOutlinedPresenter: React.SFC<Props> = ({
// 	tag: Tag,
// 	visualLevel,
// 	className,
// 	...props
// }) => (
// 	<Tag
// 		className={[styles[`h${visualLevel}`], className].join(' ')}
// 		{...props}
// 	/>
// );
//
// export const HeadingContainer: React.SFC<Props> = ({
// 	presenter,
// 	level = 2,
// 	visualLevel,
// 	...props
// }) => {
// 	level = Math.max(1, Math.min(6, level));
// 	visualLevel = Math.max(
// 		1,
// 		Math.min(6, typeof visualLevel !== 'undefined' ? visualLevel : level)
// 	);
// 	const tag = `h${level}`;
//
// 	return presenter({ tag, visualLevel, ...props });
// };
//
// const Heading = containPresenter(HeadingContainer, HeadingPresenter);
// export default Heading;
//
// export const HeadingUnderlined = containPresenter(
// 	HeadingContainer,
// 	HeadingUnderlinedPresenter
// );
// export const HeadingOutlined = containPresenter(
// 	HeadingContainer,
// 	HeadingOutlinedPresenter
// );
//
// Object.assign(Heading, { displayName: 'Heading' });
