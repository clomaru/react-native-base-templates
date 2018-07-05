import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components/native';
import { View, FlatList, AppState } from 'react-native';

import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import ListWithIcon from '../../components/molecules/ListWithIcon/index';
import { pushItem, switchRefreshing } from '../../modules/MainPageModule';

// TODO: android navigaton
// TODO: ios icon
// TODO: 型を定義
// TODO: android icon
// TODO: storybookのテスト
// TODO: atomic designの本をもっとやんと読む

interface ItemProps {
	name?: string;
	owner?: string;
	id?: number;
}

interface Props {
	page: number;
	item: ItemProps;
}

interface State {
	items: string[];
	text: string;
	refreshing: boolean;
	mainReducer: any;
}

const mapStateToProps = (state: State): any => ({
	items: state.mainReducer.items,
	refreshing: state.mainReducer.refreshing
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ pushItem, switchRefreshing }, dispatch);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	page = 1;

	private componentDidMount(): void {
		AppState.addEventListener('change', this.onChangeState);
	}

	private componentWillUnmount(): void {
		AppState.removeEventListener('change', this.onChangeState);
	}

	public render() {
		console.log(`this.state.text: ${this.state.text}`);
		return (
			<Container>
				<SubmittionBox
					buttonText={'search'}
					onChangeText={text => this.setState({ text })}
					onPress={() => this.fetchRepositories(true)}
				/>

				<FlatList
					data={this.props.items}
					renderItem={({ item }) => (
						<ListWithIcon
							name={item.name}
							source={item.owner.avatar_url}
							user={item.owner.login}
							onPress={() => this.navigateToDetail(item)}
						/>
					)}
					keyExtractor={item => item.id}
					onEndReached={() => this.fetchRepositories()}
					onEndReachedThreshold={0.1}
					onRefresh={() => this.fetchRepositories(true)}
					refreshing={this.props.refreshing}
				/>
			</Container>
		);
	}

	onChangeState = (appState: string) => {
		if (appState === 'active') {
			this.fetchRepositories(true);
		}
	};

	private navigateToDetail(item: any) {
		this.props.navigator.push({
			screen: 'searchRepository.DetailPage',
			passProps: item
		});
	}

	private fetchRepositories(refreshing: boolean = false) {
		const newPage = refreshing ? 1 : this.page + 1;
		console.log(`this.state.text: ${this.state.text}`);
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
					this.props.switchRefreshing(this.props.refreshing);
				}
				this.props.pushItem(items);
			});
	}
}

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	padding: 5px;
	flex: 1;
`;
