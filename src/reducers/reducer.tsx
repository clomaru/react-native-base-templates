import * as types from '../actions/actionTypes';
// import Immutable from 'seamless-immutable';

// const initialState = Immutable({
//   root: undefined, // 'login' / 'after-login'
// });

const initialState = {
	showTex: 'hello Redux'
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case types.CHANGE_TEXT:
			// TODO: ↓この辺の書き方理解しろ
			return Object.assign({}, state, {
				showTex:
					action.showText == 'hello Redux' ? 'chane success!!' : 'hello Redux'
			});
		default:
			return state;
	}
};
