import * as React from 'react';
import { Text, View } from 'react-native';
import DetailTemplate from '../../components/templates/DetailTemplate/index';

const mapStateToProps = (state: State) => {
	return {};
};

const mapDispatchToProps = (dispatch: Dispath) => {
	return {};
};

export default class DetailPage extends React.Component {
	constructor(props: any) {
		super(props);
		// TODO:この方法遅延があるからあんま良くなくね知らんけど
		this.props.navigator.setTitle({
			title: props.full_name
		});
	}
	render() {
		return (
			<View>
				<DetailTemplate {...this.props} />
			</View>
		);
	}
}
