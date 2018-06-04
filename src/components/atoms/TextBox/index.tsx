import * as React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

interface Props {
	placeholder: string;
}

export const TextBox: React.SFC<Props> = ({ placeholder, ...props }) => (
	<Wrapper placeholder={placeholder} {...props} />
);

export default TextBox;

const Wrapper = styled.TextInput`
	background-color: #eee;
	padding: 10px;
`;
