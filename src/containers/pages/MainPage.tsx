import * as React from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../actions/index';
import styled from 'styled-components/native';
import {
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	AppState
} from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';

// TODO: すべてのstateのredux化
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

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

class MainPage extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			items: [],
			refreshing: false,
			text: ''
			// showText: 'hello Redux'
		};
	}
	page = 1;
	public render() {
		return (
			<Container>
				<SearchBox>
					<StyledTextInput onChangeText={text => this.setState({ text })} />
					<TouchableOpacity onPress={() => this.fetchRepositories(true)}>
						<Text>Search</Text>
					</TouchableOpacity>
				</SearchBox>

				{/* このボタンを上のボタンと統合する */}
				{/* <Button onPress={() => this.fetchRepositories()}>Fetch</Button> */}
				<FlatList
					data={this.state.items}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => this.navigateToDetail(item)}>
							<ListItem style={{ padding: 20 }}>{item.name}</ListItem>
							<Text>{item.owner.login}</Text>
							<Image
								style={{ width: 20, height: 20 }}
								source={{ url: item.owner.avatar_url }}
							/>
						</TouchableOpacity>
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

	componentDidMount() {
		AppState.addEventListener('change', this.onChangeState);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.onChangeState);
	}

	onChangeState = appState => {
		if (appState === 'active') {
			this.fetchRepositories(true);
		}
	};

	private navigateToDetail(item) {
		console.log(item.name);
		this.props.navigator.push({
			screen: 'searchRepository.DetailPage',
			title: 'yeah!',
			passProps: item
		});
	}

	fetchRepositories(refreshing: boolean = false) {
		const newPage = refreshing ? 1 : this.page + 1;
		this.setState({ refreshing });
		fetch(
			`https://api.github.com/search/repositories?q=${
				this.state.text
			}&page=${newPage}`
		)
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
)(MainPage);

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

const SearchBox = styled.View`
	padding: 20px;
	flex-direction: row;
	background-color: white;
`;

const StyledTextInput = styled.TextInput`
	flex: 1;
	padding: 10px;
`;
