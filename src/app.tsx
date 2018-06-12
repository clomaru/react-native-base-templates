import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as actions from './actions/index';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();
registerScreens(store, Provider);

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

// simple

// Navigation.startSingleScreenApp({
// 	screen: {
// 		screen: 'searchRepository.Main',
// 		title: 'Welcome' // title of the screen as appears in the nav bar (optional)
// 	}
// });

// export default class App extends React.Component {
// 	constructor() {
// 		super();
// 	}
// 	private startApp(): any {
// 		Navigation.startSingleScreenApp({
// 			screen: {
// 				screen: 'searchRepository.Main',
// 				title: 'Welcome' // title of the screen as appears in the nav bar (optional)
// 			}
// 		});
// 	}
// }
