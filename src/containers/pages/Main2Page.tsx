import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import {
	changeText,
	incrementNum,
	decrementNum,
	incrementAsync,
	fetchComments
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
	comments: string[];
}

interface State {
	main2Reducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	showText: state.main2Reducer.showText,
	num: state.main2Reducer.num,
	hasError: state.main2Reducer.hasError,
	isLoading: state.main2Reducer.isLoading,
	comments: state.main2Reducer.comments
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
	bindActionCreators(
		{ changeText, incrementNum, decrementNum, incrementAsync, fetchComments },
		dispatch
	);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage2 extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		// this.state = {
		// 	comments: [];
		// }
	}

	componentDidMount() {
		this.props.fetchComments(
			'https://594ecc215fbb1a00117871a4.mockapi.io/comments'
		);
		// this.fetchData('https://594ecc215fbb1a00117871a4.mockapi.io/comments')
	}

	public render() {
		if (this.props.hasError) {
			return <Text>error</Text>;
		}
		if (this.props.isLoading) {
			return <Text>loading...</Text>;
		}
		return (
			<Container>
				<View>
					{this.props.comments.map(item => (
						<Text key={item.id}>{item.comment}</Text>
					))}
				</View>
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

	// fetchData(url) {
	//    this.setState({ isLoading: true });
	//    fetch(url)
	//      .then((response) => {
	//        if (!response.ok) {
	//          throw Error(response.statusText);
	//        }
	//        this.setState({ isLoading: false });
	//        return response;
	//      })
	//      .then((response) => response.json())
	//      .then((comments) => this.setState({ comments }))
	//      .catch(() => this.setState({ hasErrored: true }));
	//  }
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
