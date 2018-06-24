import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Text, View } from 'react-native';
import DetailTemplate from '../../components/templates/DetailTemplate/index';

const mapStateToProps = (state: State) => ({});

interface Props {
	name?: string;
	user?: string;
	source?: string;
	star: number;
	url: string;
	description: string;
}

interface State {}

class DetailPage extends React.Component {
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
				<DetailTemplate
					name={this.props.name}
					source={this.props.owner.avatar_url}
					user={this.props.owner.login}
					star={this.props.stargazers_count}
					url={this.props.html_url}
					description={this.props.description}
					{...this.props}
				/>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	(dispatch: Dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(DetailPage);
