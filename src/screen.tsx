import { Navigation } from 'react-native-navigation';

import Main from './containers/pages/main';
import Main2 from './containers/pages/main2';

export default function registerScreens() {
	Navigation.registerComponent('searchRepository.Main', () => Main);
	Navigation.registerComponent('searchRepository.Main2', () => Main2);
}

// export default (store: any, Provider: any) => {
// 	Navigation.registerComponent(
// 		'ReactNativeReduxExample.StartPage',
// 		() => StartPage,
// 		store,
// 		Provider
// 	);
