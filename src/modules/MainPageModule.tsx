import { Action } from 'redux';

// initial state
//=============================

export interface MainState {
	items: string[];
	refreshing: boolean;
}

const initialState: MainState = {
	items: [],
	refreshing: false
};

// action type
//=============================

enum ActionTypes {
	PUSH_ITEMS = 'PUSH_ITEMS',
	SWITCH_REFRESHING = 'SWITCH_REFRESHING'
}

// reducer
//=============================

export type MainActions = PushItemAction | SwitchRefreshingAction;

const mainReducer = (
	state: MainState = initialState,
	action: MainActions
): MainState => {
	switch (action.type) {
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

interface PushItemAction extends Action {
	type: ActionTypes.PUSH_ITEMS;
	items: string[];
}

export const pushItem = (items: string[]): PushItemAction => ({
	type: ActionTypes.PUSH_ITEMS,
	items
});

interface SwitchRefreshingAction extends Action {
	type: ActionTypes.SWITCH_REFRESHING;
	refreshing: boolean;
}

export const switchRefreshing = (
	refreshing: boolean
): SwitchRefreshingAction => ({
	type: ActionTypes.SWITCH_REFRESHING,
	refreshing
});
