import * as React from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../actions/index';
import styled from 'styled-components/native';
import { View, TextInput, FlatList, AppState } from 'react-native';

import Button from '../../components/atoms/Button/index';
import ListItem from '../../components/atoms/ListItem/index';
import SubmittionBox from '../../components/molecules/SubmittionBox/index';
import ListWithIcon from '../../components/molecules/ListWithIcon/index';

// TODO: すべてのstateのredux化
// TODO: ページ遷移
// TODO: udemy
// TODO: android navigaton
// TODO: ios icon
// TODO: android icon
// TODO: storybookのテスト
// TODO: atomic designの本をもっとやんと読む
// TODO: redux dev tools
// TODO: react native debugger

interface Props {
	page: number;
}

interface State {
	items: any;
	refreshing: boolean;
}
// https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly?rq=1&utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

const mapStateToProps = (state: State) => {
	return {};
};

const mapDispatchToProps = (dispatch: Dispath) => {
	return {};
};

class MainPage extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			items: [],
			refreshing: false,
			text: ''
		};
	}
	page = 1;

	componentDidMount() {
		AppState.addEventListener('change', this.onChangeState);
	}

	componentWillUnmount() {
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
					data={this.state.items}
					renderItem={({ item }) => (
						<ListWithIcon
							item={item}
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
					refreshing={this.state.refreshing}
				/>
			</Container>
		);
	}

	onChangeState = appState => {
		if (appState === 'active') {
			this.fetchRepositories(true);
		}
	};

	private navigateToDetail(item) {
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
	padding: 5px;
	flex: 1;
`;

// TODO:けす
const SearchBox = styled.View`
	padding: 20px;
	flex-direction: row;
	background-color: white;
`;

// TODO:けす
const StyledTextInput = styled.TextInput`
	flex: 1;
	padding: 10px;
`;
