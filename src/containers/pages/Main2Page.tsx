import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import {
	changeText,
	incrementNum,
	decrementNum,
	incrementAsync
} from '../../modules/MainPage2Module';
import styled from 'styled-components/native';

import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../components/atoms/Button/index';
import PracRamda from '../../components/molecules/PracRamda/index';

interface Props {
	showText: string;
	num: number;
	changeText: () => void;
	incrementNum: () => void;
	decrementNum: () => void;
	incrementAsync: () => void;
}

interface State {
	main2Reducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	showText: state.main2Reducer.showText,
	num: state.main2Reducer.num
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
	bindActionCreators(
		{ changeText, incrementNum, decrementNum, incrementAsync },
		dispatch
	);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage2 extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<Container>
				<View>
					<Text>{this.props.num}</Text>
					<TouchableOpacity onPress={this.props.incrementNum}>
						<Text>+</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.decrementNum}>
						<Text>-</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.incrementAsync}>
						<Text>acyns</Text>
					</TouchableOpacity>
				</View>
				<View>
					<PracRamda />
				</View>
				<View>
					<StyledText>{this.props.showText}</StyledText>
					<Button onPress={this.props.changeText}>change the text</Button>
				</View>
			</Container>
		);
	}
}

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

const StyledText = styled.Text`
	font-size: 20px;
`;
