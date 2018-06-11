import * as React from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

interface Props {}

interface State {}

export default class Main extends React.Component<Props, State> {
	state = {
		items: []
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
				/>
			</Container>
		);
	}

	fetchRepositories() {
		const newPage = this.page + 1;
		fetch(`https://api.github.com/search/repositories?q=react&page=${newPage}`)
			.then(response => response.json())
			.then(({ items }) => {
				this.page = newPage;
				this.setState({ items: [...this.state.items, ...items] });
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
