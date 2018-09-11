import * as React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  children?: React.ReactChildren;
}

const Button: React.SFC<Props> = ({ children, ...props }: Props) => (
  <Wrapper {...props}>
    <ButtonText>{children}</ButtonText>
  </Wrapper>
);

export default Button;

const Wrapper = styled.TouchableOpacity`
  background-color: #333;
  padding: 10px;
  margin: 3px;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
