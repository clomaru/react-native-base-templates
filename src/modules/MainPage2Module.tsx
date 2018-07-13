import { Action } from 'redux';
import { Dispatch } from 'react-redux';

// initial state
//=============================

export interface Main2State {
	showText: string;
	apiIsProcessing: boolean;
	zipCode: number | null;
	address: string | null;
	error: string | null;
}

const initialState: Main2State = {
	showText: 'hello Ducks',
	apiIsProcessing: false,
	zipCode: null,
	address: null,
	error: null
};

// action type
// =============================

// TODO: ここできればducks流のやつでちゃんと書きたい
export enum ActionTypes {
	CHANGE_TEXT = 'CHANGE_TEXT',
	GET_ADDRESS_REQUESTED = 'GET_ADDRESS_REQUESTED',
	GET_ADDRESS_SUCCEEDED = 'GET_ADDRESS_SUCCEEDED',
	GET_ADDRESS_FAILED = 'GET_ADDRESS_FAILED'
}

// reducer
// =============================

export type Main2Actoins = ChangeTextAction | GetAddressRequested;

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

		case ActionTypes.GET_ADDRESS_REQUESTED:
			return Object.assign({}, state, {
				apiIsProcessing: true,
				zipCode: action.payload.zipCode,
				address: null,
				error: null
			});

		case ActionTypes.GET_ADDRESS_SUCCEEDED:
			return Object.assign({}, state, {
				apiIsProcessing: false,
				address: action.payload.address
			});

		case ActionTypes.GET_ADDRESS_FAILED:
			return Object.assign({}, state, {
				apiIsProcessing: false,
				error: action.payload.message
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

interface GetAddressRequested extends Action {
	type: ActionTypes.GET_ADDRESS_REQUESTED;
	zipCode: number;
}

export const changeText = (): ChangeTextAction => ({
	type: ActionTypes.CHANGE_TEXT
});

// TODO: payloadってなに
export const getAddressRequested = (zipCode: number): GetAddressRequested => ({
	type: ActionTypes.GET_ADDRESS_REQUESTED,
	payload: { zipcode }
});
