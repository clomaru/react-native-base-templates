import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screen';
// import * as appActions from './actions/index';
// import { Provider } from 'react-redux';
// import configureStore from './store';

// const store = configureStore();

registerScreens();

Navigation.startTabBasedApp({
	tabs: [
		{
			label: 'One',
			screen: 'searchRepository.Main',
			title: 'Screen One'
		},
		{
			label: 'Two',
			screen: 'searchRepository.Main',
			title: 'Screen Two'
		}
	]
});

// Navigation.startSingleScreenApp({
// 	screen: {
// 		screen: 'searchRepository.Main',
// 		title: 'Hello World',
// 		navigatorStyle: {},
// 		navigatorButtons: {}
// 	}
// });

// export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.startApp();
// 	}
//
// 	startApp() {
// 		Navigation.startSingleScreenApp({
// 			screen: {
// 				screen: 'searchRepository.Main',
// 				title: 'Hello World',
// 				navigatorStyle: {},
// 				navigatorButtons: {}
// 			}
// 		});
// 	}
// }
