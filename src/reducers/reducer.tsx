import ACTION_TYPES from '../actions/actionTypes';
// import Immutable from 'seamless-immutable';

// const initialState = Immutable({
//   root: undefined, // 'login' / 'after-login'
// });

const initialState = {
	showText: 'hello Redux'
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ACTION_TYPES.CHANGE_TEXT:
			return Object.assign({}, state, {
				showText:
					state.showText == 'hello Redux' ? 'chane success!!' : 'hello Redux'
			});
		default:
			return state;
	}
};
