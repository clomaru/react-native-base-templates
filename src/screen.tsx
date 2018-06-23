import { Navigation } from 'react-native-navigation';

import MainPage from './containers/pages/MainPage';
import Main2Page from './containers/pages/Main2Page';
import DetailPage from './containers/pages/DetailPage';

export default function registerScreens(store: any, Provider: any) {
	Navigation.registerComponent(
		'searchRepository.MainPage',
		() => MainPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'searchRepository.Main2Page',
		() => Main2Page,
		store,
		Provider
	);
	Navigation.registerComponent(
		'searchRepository.DetailPage',
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
