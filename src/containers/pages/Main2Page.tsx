import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import { getAddressRequested } from '../../modules/MainPage2Module';
import styled from 'styled-components/native';

import { Text, View } from 'react-native';
import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import PostResult from '../../components/organisms/PostResult/index';

interface Props {
	zipCode: number;
	address: string;
}

interface State {
	main2Reducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	apiIsProcessing: state.main2Reducer.apiIsProcessing,
	zipCode: state.main2Reducer.zipCode,
	address: state.main2Reducer.address,
	error: state.main2Reducer.error,
	isSuccess: state.main2Reducer.isSuccess
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
	bindActionCreators({ getAddressRequested }, dispatch);

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

	// TODO:一回画像でいって余裕があればloader使お
	public render() {
		console.log(this.props.address);
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
							<PostResult
								isSuccess={this.props.isSuccess}
								zipCode={this.state.zipCode}
								address={this.props.address}
								error={this.props.error}
							/>
						</View>
					)}
				</View>
			</Container>
		);
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
