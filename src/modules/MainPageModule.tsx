import { Action } from 'redux';

// initial state
//=============================

interface InitialStateInterface {
	items: string[];
	refreshing: boolean;
}

const initialState: InitialStateInterface = {
	items: [],
	refreshing: false
};

// action type
//=============================

const ACTION_TYPES = {
	PUSH_ITEMS: 'PUSH_ITEMS',
	SWITCH_REFRESHING: 'SWITCH_REFRESHING'
};

// reducer
//=============================
// TODO:export type MainActions = PushItem | SwitchRefreshing;

const mainReducer = (state = initialState, action: any): any => {
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

// action creator
//=============================

interface PushItem extends Action {
	items: string[];
}

export const pushItem = (items: string[]): PushItem => ({
	type: ACTION_TYPES.PUSH_ITEMS,
	items
});

interface SwitchRefreshing extends Action {
	refreshing: boolean;
}

export const switchRefreshing = (refreshing: boolean): SwitchRefreshing => ({
	type: ACTION_TYPES.SWITCH_REFRESHING,
	refreshing
});

export default mainReducer;
