import * as React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import CounterBoard from "../molecules/CounterBoard/index";

interface Props {}

const RecomposeCounterPage: React.SFC<Props> = ({ ...props }) => (
  <Wrapper {...props}>
    <CounterBoard defaultNum={10} />
  </Wrapper>
);

export default RecomposeCounterPage;

const Wrapper = styled.View`
  padding: 14px;
  border-radius: 4px;
`;
