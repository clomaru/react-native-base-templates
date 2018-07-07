import { Action } from 'redux';

// initial state
//=============================

export interface Main2State {
	showText: string;
	num: number;
}

const initialState: Main2State = {
	showText: 'hello Ducks',
	num: 0
};

// action type
// =============================

export enum ActionTypes {
	CHANGE_TEXT = 'CHANGE_TEXT',
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	INCREMENT_ASYNC = 'INCREMENT_ASYNC',
	INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'
}

// reducer
// =============================

export type Main2Actoins =
	| ChangeTextAction
	| IncrementAction
	| DecrementAction
	| IncrementAsyncAction
	| IncrementIfOddAction;

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

		case ActionTypes.INCREMENT_IF_ODD:
			return Object.assign({}, state, {
				num: state.num % 2 !== 0 ? state.num + 1 : state.num
			});

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

interface IncrementIfOddAction extends Action {
	type: ActionTypes.INCREMENT_IF_ODD;
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

export const incrementIfOdd = (): IncrementIfOddAction => ({
	type: ActionTypes.INCREMENT_IF_ODD
});
