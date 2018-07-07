import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { View, Image } from 'react-native';
import Txt from '../../atoms/Txt/index';
import Heading from '../../atoms/Heading/index';

interface Props {
	name?: string;
	user?: string;
	source?: string;
	star: number;
	url: string;
	description: string;
}

const Card: React.SFC<Props> = ({
	name,
	user,
	source,
	star,
	url,
	description,
	...props
}) => (
	<Wrapper>
		<Heading type='h1'>{name}</Heading>
		<StyledImage source={{ url: source }} />
		<Txt>{user}</Txt>
		<Txt>star: {star}</Txt>
		<Txt>url: {url}</Txt>
		<Txt>Description: {description}</Txt>
	</Wrapper>
);
export default Card;

const Wrapper = styled.View`
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-align: center;
	margin: 10px;
`;

interface StyledProps {
	source?: any;
}

const StyledImage = styledComponentsTS<StyledProps>(styledComponents(Image))`
	width: 100px;
	height: 100px;
`;
