import { Action } from 'redux';
import { Dispatch } from 'react-redux';

// initial state
//=============================

export interface Main2State {
	showText: string;
	num: number;
	state: boolean;
	hasError: boolean;
	isLoading: boolean;
	comments: string[];
}

const initialState: Main2State = {
	showText: 'hello Ducks',
	num: 0,
	state: false,
	hasError: false,
	isLoading: false,
	comments: []
};

// action type
// =============================

export enum ActionTypes {
	CHANGE_TEXT = 'CHANGE_TEXT',
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	INCREMENT_ASYNC = 'INCREMENT_ASYNC',
	GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR',
	LOAD_COMMENTS = 'LOAD_COMMENTS',
	FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
}

// reducer
// =============================

export type Main2Actoins =
	| ChangeTextAction
	| IncrementAction
	| DecrementAction
	| IncrementAsyncAction
	| getCommentsErrorAction
	| loadCommentsAction
	| fetchCommentsSuccessAction;

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

		case ActionTypes.INCREMENT:
			return Object.assign({}, state, {
				num: state.num + 1
			});

		case ActionTypes.DECREMENT:
			return Object.assign({}, state, {
				num: state.num - 1
			});

		case ActionTypes.GET_COMMENTS_ERROR:
			return action.hasError;

		case ActionTypes.LOAD_COMMENTS:
			return action.isLoading;

		case ActionTypes.FETCH_COMMENTS_SUCCESS:
			return action.comments;

		default:
			return state;
	}
};
export default main2Reducer;

// action creator
//=============================

// TODO:このinterfaceをかくことによって得られる恩恵はなんだ？
interface ChangeTextAction extends Action {
	type: ActionTypes.CHANGE_TEXT;
}

interface IncrementAction extends Action {
	type: ActionTypes.INCREMENT;
}

interface DecrementAction extends Action {
	type: ActionTypes.DECREMENT;
}

interface IncrementAsyncAction extends Action {
	type: ActionTypes.INCREMENT_ASYNC;
}

interface getCommentsErrorAction extends Action {
	type: ActionTypes.GET_COMMENTS_ERROR;
	hasError: boolean;
}

interface loadCommentsAction extends Action {
	type: ActionTypes.LOAD_COMMENTS;
	isLoading: boolean;
}

interface fetchCommentsSuccessAction extends Action {
	type: ActionTypes.FETCH_COMMENTS_SUCCESS;
	comments: string[];
}

export const changeText = (): ChangeTextAction => ({
	type: ActionTypes.CHANGE_TEXT
});

export const incrementNum = (): IncrementAction => ({
	type: ActionTypes.INCREMENT
});

export const decrementNum = (): DecrementAction => ({
	type: ActionTypes.DECREMENT
});

export const incrementAsync = (): IncrementAsyncAction => ({
	type: ActionTypes.INCREMENT_ASYNC
});

// async
// TODO:status命名
export const getCommentsError = (status: boolean): getCommentsErrorAction => ({
	type: ActionTypes.GET_COMMENTS_ERROR,
	hasError: status
});

export const loadComments = (status: boolean): loadCommentsAction => ({
	type: ActionTypes.LOAD_COMMENTS,
	isLoading: status
});

export const fetchCommentsSuccess = (
	comments: string[]
): fetchCommentsSuccessAction => ({
	type: ActionTypes.FETCH_COMMENTS_SUCCESS,
	comments
});

export const fetchComments = (url: string) => {
	return (dispatch: Dispatch) => {
		dispatch(loadComments(true));

		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				dispatch(loadComments(false));

				return response;
			})
			.then(response => response.json())
			.then(comments => dispatch(fetchCommentsSuccess(comments)))
			.catch(() => dispatch(getCommentsError(true)));
	};
};
