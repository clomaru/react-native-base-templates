import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
	showText: 'hello Redux'
};

const main2_reducer = (state = initialState, action: any): any => {
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

export default main2_reducer;
