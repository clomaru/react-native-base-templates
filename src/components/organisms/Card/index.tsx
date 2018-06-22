import * as React from 'react';
import styled from 'styled-components/native';
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import { Text, View,, Image } from 'react-native';
import Txt from '../../atoms/Txt/index';

interface Props {
}

const Card: React.SFC<Props> = ({ ...props }) => (
	<Wrapper>
		<Text>ooooooo</Text>
		<Text>{props.name}</Text>
		<Image
			style={{ width: 100, height: 100 }}
			source={{ url:props.owner.avatar_url }}
		/>
		<Text >{props.owner.login}</Text>
		<Text>star: {props.stargazers_count}</Text>
		<Text>url: {props.html_url}</Text>
		<Text>Description: {props.description}</Text>
	</Wrapper>
);
export default Card;

const Wrapper = styled(View)`
`


// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#F5FCFF'
// fontSize: 20,
// textAlign: 'center',
// margin: 10
