import ACTION_TYPES from '../actions/actionTypes';
import { PushItem, SwitchRefreshing } from '../actions/main_actions';
import { Action } from 'redux';

interface InitialStateInterface {
	items: string[];
	refreshing: boolean;
}

// TODO:export type MainActions = PushItem | SwitchRefreshing;

const initialState: InitialStateInterface = {
	items: [],
	refreshing: false
};

// TODO:↓mainReducerみたいな名前にしないといけないっぽいよ
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
