// あとでファイル名変えよう
import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Txt from '../../atoms/Txt/index';
import Heading from '../../atoms/Heading/index';
import ListItem from '../../atoms/ListItem/index';
import * as R from 'ramda';

interface Props {}

const itemList = ['hello', 'world', '!!!'];

const PracRamda: React.SFC<Props> = ({ ...props }) => (
	<Wrapper>
		<Txt>{R.map(x => <Txt>{x}</Txt>, itemList)}</Txt>
	</Wrapper>
);
export default PracRamda;

const Wrapper = styled.View`
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-align: center;
	margin: 10px;
`;
