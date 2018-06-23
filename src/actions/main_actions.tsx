import ACTION_TYPES from './actionTypes';

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
