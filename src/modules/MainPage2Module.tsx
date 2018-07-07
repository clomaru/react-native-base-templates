import { Action } from 'redux';

// initial state
//=============================

export interface Main2State {
	showText: string;
}

const initialState: Main2State = {
	showText: 'hello Ducks'
};

// action type
// =============================

enum ActionTypes {
	CHANGE_TEXT = 'CHANGE_TEXT'
}

// reducer
// =============================

export type Main2Actoins = ChangeTextAction;

const main2Reducer = (
	state: Main2State = initialState,
	action: Main2Actoins
): Main2State => {
	switch (action.type) {
		case ActionTypes.CHANGE_TEXT:
			return Object.assign({}, state, {
				showText:
					state.showText == 'hello Ducks' ? 'change success!!' : 'hello Ducks'
			});

		default:
			return state;
	}
};
export default main2Reducer;

// action creator
//=============================

interface ChangeTextAction extends Action {
	type: ActionTypes.CHANGE_TEXT;
}

export const changeText = (): ChangeTextAction => ({
	type: ActionTypes.CHANGE_TEXT
});
