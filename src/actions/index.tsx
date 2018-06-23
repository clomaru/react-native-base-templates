import ACTION_TYPES from './actionTypes';

export const changeTextAction = (): any => {
	return {
		type: ACTION_TYPES.CHANGE_TEXT
	};
};

// TODO:フォルダ分ける
// https://github.com/jasonhealy/react-native-typescript-starter/blob/master/src/actions/index.ts
export const pushItemAction = (items: string[]): any => {
	return {
		type: ACTION_TYPES.PUSH_ITEMS,
		items
	};
};

export const switchRefreshingAction = (refreshing: boolean): any => {
	return {
		type: ACTION_TYPES.SWITCH_REFRESHING,
		refreshing
	};
};
