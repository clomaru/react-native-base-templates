import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import { changeText, getAddressRequested } from '../../modules/MainPage2Module';
import styled from 'styled-components/native';

import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../components/atoms/Button/index';
import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import PracRamda from '../../components/molecules/PracRamda/index';

interface Props {
	showText: string;
	zipCode: number;
}

interface State {
	main2Reducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	showText: state.main2Reducer.showText,
	zipCode: state.main2Reducer.zipCode
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
		this.state = { zipCode: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ zipCode: e });
	}

	handleSubmit(e) {
		e.preventDefault();
		const meta = {
			pageOnSuccess: 'success',
			pageOnFailure: 'failure'
		};
		this.props.getAddressRequested(this.state.zipCode, meta);

		// console.log(`郵便番号 ${this.state.zipCode}の住所取得を要求`);
	}

	public render() {
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
