import { Navigation } from "react-native-navigation";

import SearchRepositoryPage from "./containers/pages/SearchRepositoryPage";
import SagasPostSearchPage from "./containers/pages/SagasPostSearchPage";
import DetailPage from "./containers/pages/DetailPage";

export default function registerScreens(store: any, Provider: any) {
  Navigation.registerComponent(
    "searchRepository.SearchRepositoryPage",
    () => SearchRepositoryPage,
    store,
    Provider
  );
  Navigation.registerComponent(
    "searchRepository.SagasPostSearchPage",
    () => SagasPostSearchPage,
    store,
    Provider
  );
  Navigation.registerComponent(
    "searchRepository.DetailPage",
    () => DetailPage,
    store,
    Provider
  );
}

// export default (store: any, Provider: any) => {
// 	Navigation.registerComponent(
// 		'ReactNativeReduxExample.StartPage',
// 		() => StartPage,
// 		store,
// 		Provider
// 	);

// index.js
// // import { AppRegistry } from 'react-native';
// // import App from './lib/app';
// //
// // AppRegistry.registerComponent('reactNativeBaseTemplate', () => App);
//
// import App from './build/main';
//
// const app = new App();
