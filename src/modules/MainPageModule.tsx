import { Action } from 'redux';

// initial state
//=============================

export interface MainState {
	text: string;
	items: string[];
	refreshing: boolean;
}

const initialState: MainState = {
	text: '',
	items: [],
	refreshing: false
};

// action type
//=============================

enum ActionTypes {
	CHANGE_TEXTBOX = 'CHANGE_TEXTBOX',
	PUSH_ITEMS = 'PUSH_ITEMS',
	SWITCH_REFRESHING = 'SWITCH_REFRESHING'
}

// reducer
//=============================

export type MainActions =
	| ChangeTextboxAction
	| PushItemAction
	| SwitchRefreshingAction;

const mainReducer = (
	state: MainState = initialState,
	action: MainActions
): MainState => {
	switch (action.type) {
		case ActionTypes.CHANGE_TEXTBOX:
			return Object.assign({}, state, {
				text: action.text
			});

		case ActionTypes.PUSH_ITEMS:
			return Object.assign({}, state, {
				items: [...state.items, ...action.items]
			});

		case ActionTypes.SWITCH_REFRESHING:
			return Object.assign({}, state, {
				refreshing: false
			});

		default:
			return state;
	}
};
export default mainReducer;

// action creator
//=============================

interface ChangeTextboxAction extends Action {
	type: ActionTypes.CHANGE_TEXTBOX;
	text: string;
}

interface PushItemAction extends Action {
	type: ActionTypes.PUSH_ITEMS;
	items: string[];
}

interface SwitchRefreshingAction extends Action {
	type: ActionTypes.SWITCH_REFRESHING;
	refreshing: boolean;
}

export const changeTextbox = (text: string): ChangeTextboxAction => ({
	type: ActionTypes.CHANGE_TEXTBOX,
	text
});

export const pushItem = (items: string[]): PushItemAction => ({
	type: ActionTypes.PUSH_ITEMS,
	items
});

export const switchRefreshing = (
	refreshing: boolean
): SwitchRefreshingAction => ({
	type: ActionTypes.SWITCH_REFRESHING,
	refreshing
});
