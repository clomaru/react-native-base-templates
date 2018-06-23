import { combineReducers } from 'redux';

import main_reducer from './main_reducer';
import main2_reducer from './main2_reducer';

export const reducers = combineReducers({
	main_reducer,
	main2_reducer
});
export default reducers;

// import ACTION_TYPES from '../actions/actionTypes';
// // import Immutable from 'seamless-immutable';
//
// // const initialState = Immutable({
// //   root: undefined, // 'login' / 'after-login'
// // });
//
// const initialState = {
// 	showText: 'hello Redux',
// 	items: [],
// 	refreshing: false
// };
//
// export const reducer = (state = initialState, action: any): any => {
// 	switch (action.type) {
// 		case ACTION_TYPES.CHANGE_TEXT:
// 			return Object.assign({}, state, {
// 				showText:
// 					state.showText == 'hello Redux' ? 'chane success!!' : 'hello Redux'
// 			});
//
// 		case ACTION_TYPES.PUSH_ITEMS:
// 			return Object.assign({}, state, {
// 				items: [...state.items, ...action.items]
// 			});
//
// 		case ACTION_TYPES.SWITCH_REFRESHING:
// 			return Object.assign({}, state, {
// 				refreshing: false
// 			});
//
// 		default:
// 			return state;
// 	}
// };
