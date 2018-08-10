import * as React from "react";
import { Navigation } from "react-native-navigation";
import registerScreens from "./screen";
import * as actions from "./actions/index";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();
registerScreens(store, Provider);

export default class App {
  constructor(props) {
    this.startApp();
  }
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Git Search",
          screen: "searchRepository.SearchRepositoryPage",
          title: "Git Search"
        },
        {
          label: "Post Search",
          screen: "searchRepository.SagasPostSearchPage",
          title: "Post Search"
        },
        {
          label: "Counter",
          screen: "searchRepository.RecomposeCounterPage",
          title: "Recompose Counter"
        }
      ]
    });
  }
}
