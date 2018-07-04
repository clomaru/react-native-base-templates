import { Action } from 'redux';

// initial state
//=============================

const initialState = {
	showText: 'hello Redux'
};

// action type
//=============================

const ACTION_TYPES = {
	CHANGE_TEXT: 'CHANGE_TEXT'
};

// reducer
//=============================

const main2Reducer = (state = initialState, action: Action): any => {
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

// action creator
//=============================

interface ChangeText extends Action {}

export const changeText = (): ChangeText => ({
	type: ACTION_TYPES.CHANGE_TEXT
});

export default main2Reducer;
