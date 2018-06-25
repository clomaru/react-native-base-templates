import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import actions from '../../actions';
import styled from 'styled-components/native';
import { View, TextInput, FlatList, AppState } from 'react-native';

import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import ListWithIcon from '../../components/molecules/ListWithIcon/index';

// TODO: udemy
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
	actions: any;
	item: ItemProps;
}

interface State {
	items: string[];
	text: string;
	refreshing: boolean;
	main_reducer: any;
}
// https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly?rq=1&utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

const mapStateToProps = (state: State): any => ({
	items: state.main_reducer.items,
	refreshing: state.main_reducer.refreshing
});

class MainPage extends React.Component<Props, State> {
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
		return (
			<Container>
				<SubmittionBox
					buttonText={'search'}
					onChange={text => this.setState({ text })}
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
					this.props.actions.switchRefreshing(this.props.refreshing);
				}
				this.props.actions.pushItem(items);
			});
	}
}

export default connect(
	mapStateToProps,
	(dispatch: Dispatch): any => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(MainPage);

const Container = styled.View`
	background-color: #f5fcff;
	justify-content: center;
	padding: 5px;
	flex: 1;
`;
