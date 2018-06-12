import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as actions from './actions/index';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();
registerScreens(store, Provider);

// ///////////////
// // dont work
// ///////////////
// export default class App {
// 	private startApp(): any {
// 		Navigation.startTabBasedApp({
// 			tabs: [
// 				{
// 					label: 'One',
// 					screen: 'searchRepository.Main',
// 					title: 'Screen One'
// 				},
// 				{
// 					label: 'Two',
// 					screen: 'searchRepository.Main2',
// 					title: 'Screen Two'
// 				}
// 			]
// 		});
// 	}
// }

///////////////
// work
///////////////
Navigation.startTabBasedApp({
	tabs: [
		{
			label: 'One',
			screen: 'searchRepository.Main',
			title: 'Screen One'
		},
		{
			label: 'Two',
			screen: 'searchRepository.Main2',
			title: 'Screen Two'
		}
	]
});
