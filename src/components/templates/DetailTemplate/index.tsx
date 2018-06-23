import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Card from '../../organisms/Card/index';

interface Props {
	name?: string;
	user?: string;
	source?: string;
	star: number;
	url: string;
	description: string;
}

const DetailTemplate: React.SFC<Props> = ({
	name,
	user,
	source,
	star,
	url,
	description,
	...props
}) => (
	<Wrapper>
		<Card
			name={props.name}
			source={props.owner.avatar_url}
			user={props.owner.login}
			star={props.stargazers_count}
			url={props.html_url}
			description={props.description}
			{...props}
		/>
	</Wrapper>
);
export default DetailTemplate;

const Wrapper = styled.View``;
