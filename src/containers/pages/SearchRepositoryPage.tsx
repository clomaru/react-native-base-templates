import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
// import RNImagePicker from 'react-native-image-picker';
const RNImagePicker = require('react-native-image-picker');

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
          <TouchableOpacity onPress={this.openPicker}>
            <Text>oooo</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

  openPicker = () => {
    RNImagePicker.showImagePicker({}, res => console.log(res));
  };
}

const Container = styled.View`
  background-color: #f5fcff;
  justify-content: center;
  padding: 5px;
  flex: 1;
`;
