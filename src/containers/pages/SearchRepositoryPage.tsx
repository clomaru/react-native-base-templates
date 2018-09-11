import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
const RNImagePicker = require('react-native-image-picker');
import Button from '../../components/atoms/Button/index';

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
    this.state = {
      uri: ''
    };
  }

  public componentDidMount(): void {}

  public componentWillUnmount(): void {}

  public render() {
    return (
      <Container>
        <View>
          <StyledImage source={{ uri: this.state.uri }} />
          <Button onPress={this.openPicker}>open</Button>
        </View>
      </Container>
    );
  }

  openPicker = () => {
    RNImagePicker.showImagePicker({}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        let source = { uri: res.uri };
        this.setState(source);
      }
    });
  };
}

const Container = styled.View`
  background-color: #f5fcff;
  justify-content: center;
  padding: 5px;
  flex: 1;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200;
  background-color: #eee;
`;
