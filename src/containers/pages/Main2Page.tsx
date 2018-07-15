import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import { changeText, getAddressRequested } from '../../modules/MainPage2Module';
import styled from 'styled-components/native';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/atoms/Button/index';
import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import PracRamda from '../../components/molecules/PracRamda/index';
import PostResult from '../../components/organisms/PostResult/index';

interface Props {
	showText: string;
	zipCode: number;
}

interface State {
	main2Reducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	showText: state.main2Reducer.showText,
	apiIsProcessing: state.main2Reducer.apiIsProcessing,
	zipCode: state.main2Reducer.zipCode,
	address: state.main2Reducer.address,
	error: state.main2Reducer.error,
	isSuccess: state.main2Reducer.isSuccess
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
	bindActionCreators({ changeText, getAddressRequested }, dispatch);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage2 extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = { zipCode: this.props.zipCode || '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ zipCode: e });
	}

	handleSubmit(e) {
		e.preventDefault();
		const meta = {
			pageOnSuccess: true,
			pageOnFailure: false
		};
		this.props.getAddressRequested(this.state.zipCode, meta);

		// console.log(`郵便番号 ${this.state.zipCode}の住所取得を要求`);
	}

	// TODO:一回画像でいって余裕があればloader使お
	public render() {
		console.log(this.props.isSuccess);
		return (
			<Container>
				<View>
					<SubmittionBox
						onPress={this.handleSubmit}
						onChangeText={this.handleChange}
						placeholder="半角数字で入力"
						buttonText="送信"
						value={this.state.zipCode}
					/>
					{this.props.apiIsProcessing ? (
						<View>
							<Text>loading...</Text>
						</View>
					) : (
						<View>
							oooo
							<PostResult
								isSuccess={this.props.isSuccess}
								zipCode={this.state.zipCode}
								address={this.props.address}
								error={this.props.error}
							/>
							oooo
						</View>
					)}
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
