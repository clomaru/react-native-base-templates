// // あとでファイル名変えよう
import * as React from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import Txt from "../../atoms/Txt/index";
import Button from "../../atoms/Button/index";
import Heading from "../../atoms/Heading/index";
import ListItem from "../../atoms/ListItem/index";
import { compose, withState, withHandlers } from "recompose";

// これ
interface ComponentProps {
  defaultNum: number;
}

interface WithStateProps {
  counter: number;
  updateCounter: ((f: (counter: number) => number) => void);
  defaultNum?: number;
}

interface WithHandlerProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

type ComposedProps = WithStateProps & WithHandlerProps;
type CounterBoardProps = ComposedProps & ComponentProps;

// TODO: 型https://qiita.com/IgnorantCoder/items/2ec853c85e74cf8d71cd
const CounterBoardContainer = compose<CounterBoardProps, ComponentProps>(
  withState<
    WithStateProps,
    (x: ComponentProps) => number,
    "counter",
    "updateCounter"
  >("counter", "updateCounter", ({ defaultNum }: ComponentProps) => defaultNum),
  withHandlers<CounterBoardProps, WithHandlerProps>({
    increment: ({ updateCounter }) => () =>
      updateCounter(counter => counter + 1),
    decrement: ({ updateCounter }) => () =>
      updateCounter(counter => counter - 1),
    reset: ({ updateCounter, defaultNum }) => () =>
      updateCounter(() => defaultNum)
  })
);

const CounterBoardPresenter: React.SFC<CounterBoardProps> = ({
  counter,
  increment,
  decrement,
  reset,
  ...props
}) => (
  <View>
    <Heading type="h1">{counter}</Heading>
    <IncrementButton onPress={increment}>+</IncrementButton>
    <DecrementButton onPress={decrement}>-</DecrementButton>
    <Button onPress={reset}>reset</Button>
  </View>
);

const CounterBoard = CounterBoardContainer(CounterBoardPresenter);
export default CounterBoard;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

const IncrementButton = styled(Button)`
  background-color: #f69;
`;

const DecrementButton = styled(Button)`
  background-color: #6495ed;
`;
