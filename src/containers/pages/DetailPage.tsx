import * as React from 'react';
import { Text, View } from 'react-native';
import DetailTemplate from '../../components/templates/DetailTemplate/index';

const mapStateToProps = (state: State) => {
	return {};
};

const mapDispatchToProps = (dispatch: Dispath) => {
	return {};
};

interface Props {
	name?: string;
	user?: string;
	source?: string;
	star: number;
	url: string;
	description: string;
}

interface State {}

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
