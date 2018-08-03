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
	// 	defaultNum: number;
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


// import { compose, withState } from "recompose";
// const mapValues = (obj, func) => {
//   const result = {}
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = func(obj[key], key)
//     }
//   }
//   return result
// }
//
// const withHandlers = handlers => BaseComponent => {
//   const factory = React.createFactory(BaseComponent)
//   class WithHandlers extends React.Component {
//     handlers = mapValues(
//       typeof handlers === 'function' ? handlers(this.props) : handlers,
//       createHandler => (val, key) => { return createHandler(this.props)(val, key) }
//     )
//
//     render() {
// 			console.log('ooo')
//       console.log(this.handlers.increment)
//       return factory({
//         ...this.props,
//         ...this.handlers,
//       })
//     }
//   }
//   return WithHandlers
// }

const CounterBoardContainer = compose<CounterBoardProps, ComponentProps>(
	withState<WithStateProps, number, "counter", "updateCounter">(
		"counter",
		"updateCounter",
		({ defaultNum }) => defaultNum
	),
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

// // あとでファイル名変えよう
// import * as React from 'react';
// import styled from 'styled-components/native';
// import { View, TouchableOpacity } from 'react-native';
// import Txt from '../../atoms/Txt/index';
// import Heading from '../../atoms/Heading/index';
// import ListItem from '../../atoms/ListItem/index';
// import * as R from 'ramda';
//
// interface Props {
// 	text?: string;
// 	color?: string;
// 	WrappedComponent?: any;
// 	color1?: any;
// 	color2?: any;
// 	contents?: string[];
// 	onPress?: () => void;
// }
//
// const hocFactory: React.SFC<Props> = (WrappedComponent, color1, color2) => {
// 	return class extends React.Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = { color: color1 };
// 			this.changeColor = this.changeColor.bind(this);
// 		}
// 		changeColor() {
// 			this.setState({ color: this.state.color === color1 ? color2 : color1 });
// 		}
// 		render() {
// 			return (
// 				<WrappedComponent
// 					{...this.props}
// 					color={this.state.color}
// 					onPress={this.changeColor}
// 				/>
// 			);
// 		}
// 	};
// };
//
// const TextContent: React.SFC<Props> = ({ text, color, onPress }) => (
// 	<TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
// 		<Txt>{text}</Txt>
// 	</TouchableOpacity>
// );
//
// const ListContent: React.SFC<Props> = ({ contents, color, onPress }) => (
// 	<TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
// 		{R.map(x => <Txt>{x}</Txt>, contents)}
// 	</TouchableOpacity>
// );
//
// const EcnhancedTextContent = hocFactory(TextContent, 'black', 'red');
// const EnhancedListContent = hocFactory(ListContent, 'black', 'orange');
//
// const PracRamda: React.SFC<Props> = ({ ...props }) => (
// 	<Wrapper>
// 		<EcnhancedTextContent text="xyz" />
// 		<EnhancedListContent contents={['hello', 'world', '!!!']} />
// 	</Wrapper>
// );
// export default PracRamda;
//
// const Wrapper = styled.View`
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 20px;
// 	text-align: center;
// 	margin: 10px;
// `;
