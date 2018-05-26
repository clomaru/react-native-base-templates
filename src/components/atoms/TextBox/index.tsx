import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface Props {}

export const TextBox: React.SFC<Props> = ({ ...props }) => (
	<Wrapper {...props} />
);

export default TextBox;

// TODO: もっと汎用的なstyleにする
const Wrapper = styled.TextInput`
	margin-top: 30px;
	background-color: #eee;
	padding: 10px;
`;
