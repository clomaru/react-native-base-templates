import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View, FlatList } from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';

// TODO: molecules↑
// TODO: redux & navigatoin
// TODO: ページ遷移
// TODO: udemy
// TODO: android navigaton
// TODO: ios icon
// TODO: android icon

interface Props {
	page: number;
}

interface State {
	items: string[];
	refreshing: boolean;
	showText: string;
}

export default class Main extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			items: [],
			refreshing: false,
			showText: 'hello Redux'
		};
	}
	page = 1;
	public render() {
		return (
			<Container>
				<View>
					<Text style={{ fontSize: 20 }}>{this.state.showText}</Text>
					<Button onPress={this.changeText.bind(this)}>change the text</Button>
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

	private changeText(): void {
		this.setState({
			showText:
				this.state.showText == 'hello Redux' ? 'chane success!!' : 'hello Redux'
		});
	}

	fetchRepositories(refreshing = false) {
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

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;
