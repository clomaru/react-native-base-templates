import { Navigation } from 'react-native-navigation';

import Main from './containers/pages/main';

export default function registerScreens() {
	Navigation.registerComponent('searchRepository.Main', () => Main);
}

// export default (store: any, Provider: any) => {
// 	Navigation.registerComponent(
// 		'ReactNativeReduxExample.StartPage',
// 		() => StartPage,
// 		store,
// 		Provider
// 	);
