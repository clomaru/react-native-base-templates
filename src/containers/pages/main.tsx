import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

interface Props {}

interface State {}

export default class Main extends React.Component<Props, State> {
	state = {
		items: [],
		refreshing: false
	};
	page = 1;
	public render() {
		return (
			<Container>
				<TouchableOpacity onPress={() => this.fetchRepositories()}>
					<Text>Fetch</Text>
				</TouchableOpacity>
				<FlatList
					data={this.state.items}
					renderItem={({ item }) => (
						<Text style={{ padding: 20 }}>{item.name}</Text>
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

const WelcomeText = styled.Text`
	font-size: 20px;
	text-align: center;
	margin: 10px;
`;

const InstructionsText = styled.Text`
	text-align: center;
	color: #333333;
	margin-bottom: 5px;
`;
