import * as React from "react";
import styled from "styled-components/native";
import CounterBoard from "../molecules/CounterBoard/index";

const RecomposeCounterPage: React.SFC<{}> = () => (
  <Wrapper>
    <CounterBoard defaultNum={10} />
  </Wrapper>
);

export default RecomposeCounterPage;

const Wrapper = styled.View`
  padding: 14px;
  border-radius: 4px;
`;
