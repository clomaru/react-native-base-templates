import ACTION_TYPES from './actionTypes';

export const pushItem = (items: string[]): any => {
	return {
		type: ACTION_TYPES.PUSH_ITEMS,
		items
	};
};

export const switchRefreshing = (refreshing: boolean): any => {
	return {
		type: ACTION_TYPES.SWITCH_REFRESHING,
		refreshing
	};
};
