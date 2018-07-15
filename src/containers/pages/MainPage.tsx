import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import styled from 'styled-components/native';
import { View, FlatList, AppState } from 'react-native';

import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import ListWithIcon from '../../components/molecules/ListWithIcon/index';
import {
	changeTextbox,
	pushItem,
	switchRefreshing
} from '../../modules/MainPageModule';

// TODO: android navigaton
// TODO: ios icon
// TODO: android icon
// TODO: storybookのテスト

interface ItemProps {
	name?: string;
	owner?: string;
	id?: number;
}

interface Props {
	page: number;
	text: string;
	items: string[];
	refreshing: boolean;
	item: ItemProps;
}

interface State {
	mainReducer: ReduxState;
}

const mapStateToProps = (state: ReduxState) => ({
	text: state.mainReducer.text,
	items: state.mainReducer.items,
	refreshing: state.mainReducer.refreshing
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
	bindActionCreators({ changeTextbox, pushItem, switchRefreshing }, dispatch);

@(connect(
	mapStateToProps,
	mapDispatchToProps
) as any)
export default class MainPage extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	page = 1;

	private componentDidMount(): void {
		AppState.addEventListener('change', this.onChangeState);
	}

	private componentWillUnmount(): void {
		AppState.removeEventListener('change', this.onChangeState);
	}

	public render() {
		return (
			<Container>
				<SubmittionBox
					buttonText={'search'}
					onChangeText={text => this.props.changeTextbox(text)}
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
		this.props.switchRefreshing(refreshing);
		fetch(
			`https://api.github.com/search/repositories?q=${
				this.props.text
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
