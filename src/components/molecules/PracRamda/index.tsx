// あとでファイル名変えよう
import * as React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import Txt from '../../atoms/Txt/index';
import Heading from '../../atoms/Heading/index';
import ListItem from '../../atoms/ListItem/index';
import * as R from 'ramda';
import { compose, withState, withHandlers } from 'recompose';

interface Props {}

const counterEnhancer = compose(
	withState('counter', 'updateCounter', 5),
	withHandlers({
		increment: ({ updateCounter }) => () => updateCounter(counter => counter + 1),
		decrement: ({ updateCounter }) => () => updateCounter(counter => counter - 1),
		reset: ({ updateCounter }) => () => updateCounter(5)
	})
);

// const addCounterState = BaseComponent =>
// 	class extends React.Component<{}, { counter: number }> {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				counter: 5
// 			};
// 		}
//
// 		increment = () => {
// 			this.setState({ counter: this.state.counter + 1 });
// 		};
//
// 		decrement = () => {
// 			this.setState({ counter: this.state.counter - 1 });
// 		};
//
// 		reset = () => {
// 			this.setState({ counter: 5 });
// 		};
//
// 		render() {
// 			return (
// 				<BaseComponent
// 					{...this.props}
// 					decrement={this.decrement}
// 					increment={this.increment}
// 					reset={this.reset}
// 					counter={this.state.counter}
// 				/>
// 			);
// 		}
// 	};

const SampleCounterBaseComponent = props => (
	<View>
		<Txt>{props.counter}</Txt>
		<Heading type='h1'>ooooo</Heading>
		<TouchableOpacity
			onPress={() => {
				props.increment();
			}}>
			<Txt>increment</Txt>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => {
				props.decrement();
			}}>
			<Txt>dcrement</Txt>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() => {
				props.reset();
			}}>
			<Txt>reset</Txt>
		</TouchableOpacity>
	</View>
);

const Enhanced = counterEnhancer(SampleCounterBaseComponent);

const PracRamda: React.SFC<Props> = ({ ...props }) => (
	<Wrapper>
		<Enhanced />
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
