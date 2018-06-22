import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Card from '../../organisms/Card/index';

interface Props {}

const DetailTemplate: React.SFC<Props> = ({ ...props }) => (
	<Wrapper>
		<Card {...props} />
	</Wrapper>
);
export default DetailTemplate;

const Wrapper = styled.View``;
