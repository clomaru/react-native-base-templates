import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as appActions from './actions/index';
// import { Provider } from 'react-redux';
// import configureStore from './store';

// const store = configureStore();

// TODO: app.tsxにproviderを書く
// TODO: まず最初にapp.tsxのclass化？無理ならredux導入してみてもいいかも
// TODO: その後mainのtodoやる

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
			screen: 'searchRepository.Main2',
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
