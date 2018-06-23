import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
	items: [],
	refreshing: false
};

const main_reducer = (state = initialState, action: any): any => {
	switch (action.type) {
		case ACTION_TYPES.PUSH_ITEMS:
			return Object.assign({}, state, {
				items: [...state.items, ...action.items]
			});

		case ACTION_TYPES.SWITCH_REFRESHING:
			return Object.assign({}, state, {
				refreshing: false
			});

		default:
			return state;
	}
};

export default main_reducer;
