import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import styled from 'styled-components/native';
import { View, Text, FlatList, AppState } from 'react-native';

// import SubmittionBox from "../../components/molecules/SubmittionBox/index";
// import ListWithIcon from "../../components/molecules/ListWithIcon/index";
// import {
//   changeTextbox,
//   pushItem,
//   switchRefreshing
// } from "../../modules/SearchRepositoryModule";

// const mapStateToProps = (state: ReduxState) => ({
//   text: state.mainReducer.text,
//   items: state.mainReducer.items,
//   refreshing: state.mainReducer.refreshing
// });

// const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
//   bindActionCreators({ changeTextbox, pushItem, switchRefreshing }, dispatch);

// @(connect(
//   mapStateToProps,
//   mapDispatchToProps
// ) as any)
export default class SearchRepositoryPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {}

  public componentWillUnmount(): void {}

  public render() {
    return (
      <Container>
        <View>
          <Text>oooo</Text>
        </View>
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: #f5fcff;
  justify-content: center;
  padding: 5px;
  flex: 1;
`;
