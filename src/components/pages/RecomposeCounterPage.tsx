import * as React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { compose, branch, renderComponent } from "recompose";

interface Props {}

const RecomposeCounterPage: React.SFC<Props> = ({ ...props }) => (
  <Wrapper {...props}>
    <Text>住所の取得に失敗しました</Text>
  </Wrapper>
);

export default RecomposeCounterPage;

const Wrapper = styled.View`
  padding: 14px;
  border-radius: 4px;
`;
