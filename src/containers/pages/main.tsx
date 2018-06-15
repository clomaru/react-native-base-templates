import * as React from 'react';
import { connect } from 'react-redux';

// TODO:      ↓この命名
import * as appActions from '../../actions/index';
import styled from 'styled-components/native';
import { Text, View, FlatList } from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';

// TODO: ページ遷移
// TODO: udemy
// TODO: android navigaton
// TODO: ios icon
// TODO: android icon

interface Props {
	page: number;
}

interface State {
	items: any;
	refreshing: boolean;
	showText: string;
}
// https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly?rq=1&utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

const mapStateToProps = (state: any) => {
	return {
		showText: state.reducer.showText
	};
};

// reduxの型定義ファイル入れたあとで
// function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeText() {
			dispatch(appActions.changeTextAction());
		}
	};
};

class Main extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			items: [],
			refreshing: false
			// showText: 'hello Redux'
		};
	}
	page = 1;
	public render() {
		return (
			<Container>
				<View>
					<Text style={{ fontSize: 20 }}>{this.props.showText}</Text>
					<Button onPress={this.props.changeText}>change the text</Button>
				</View>
				<Button onPress={() => this.fetchRepositories()}>Fetch</Button>
				<FlatList
					data={this.state.items}
					renderItem={({ item }) => (
						<ListItem style={{ padding: 20 }}>{item.name}</ListItem>
					)}
					keyExtractor={item => item.id}
					onEndReached={() => this.fetchRepositories()}
					onEndReachedThreshold={0.1}
					onRefresh={() => this.fetchRepositories(true)}
					refreshing={this.state.refreshing}
				/>
			</Container>
		);
	}

	// private changeText(): void {
	// 	this.setState({
	// 		showText:
	// 			this.state.showText == 'hello Redux' ? 'chane success!!' : 'hello Redux'
	// 	});
	// }

	fetchRepositories(refreshing: boolean = false) {
		const newPage = refreshing ? 1 : this.page + 1;
		this.setState({ refreshing });
		fetch(`https://api.github.com/search/repositories?q=react&page=${newPage}`)
			.then(response => response.json())
			.then(({ items }) => {
				this.page = newPage;
				if (refreshing) {
					this.setState({ items, refreshing: false });
				} else {
					this.setState({ items: [...this.state.items, ...items] });
				}
			});
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
