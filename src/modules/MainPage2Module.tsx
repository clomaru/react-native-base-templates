import { Action } from 'redux';
import { Dispatch } from 'react-redux';
import { takeLatest, put, call } from 'redux-saga/effects';
import apis from '../api/postcode-js';

// initial state
//=============================

export interface Main2State {
	showText: string;
	apiIsProcessing: boolean;
	zipCode: number | null;
	address: string | null;
	error: string | null;
	isSuccess: boolean;
}

const initialState: Main2State = {
	showText: 'hello Ducks',
	apiIsProcessing: false,
	zipCode: null,
	address: null,
	error: null,
	isSuccess: false
};

// action type
// =============================

// TODO: ここできればducks流のやつでちゃんと書きたい
export enum ActionTypes {
	CHANGE_TEXT = 'CHANGE_TEXT',
	GET_ADDRESS_REQUESTED = 'GET_ADDRESS_REQUESTED',
	GET_ADDRESS_SUCCEEDED = 'GET_ADDRESS_SUCCEEDED',
	GET_ADDRESS_FAILED = 'GET_ADDRESS_FAILED',
	DETEMINATE_FETCH = 'DETEMINATE_FETCH'
}

// reducer
// =============================

export type Main2Actoins =
	| ChangeTextAction
	| GetAddressRequested
	| DeteminateOfFetchAction;

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

		case ActionTypes.DETEMINATE_FETCH:
			return !state.isSuccess;

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

interface DeteminateOfFetchAction extends Action {
	type: ActionTypes.DETEMINATE_FETCH;
	isSuccess: boolean;
}

export const changeText = (): ChangeTextAction => ({
	type: ActionTypes.CHANGE_TEXT
});

// TODO: payloadってなに
export const getAddressRequested = (
	zipCode: number,
	meta
): GetAddressRequested => ({
	type: ActionTypes.GET_ADDRESS_REQUESTED,
	payload: { zipCode },
	meta
});

// TODO:名前変える
export const deteminateOfFetch = (
	isSuccess: boolean
): DeteminateOfFetchAction => ({
	type: ActionTypes.DETEMINATE_FETCH,
	isSuccess
});

// Sagas
//=============================

function* getAddress(action) {
	const meta = action.meta || {};
	const res = yield apis.getAddress(action.payload.zipCode);
	if (res.data && res.data.length > 0) {
		yield put({
			type: ActionTypes.GET_ADDRESS_SUCCEEDED,
			payload: {
				zipCode: action.payload.zipCode,
				address: res.data[0].allAdress,
				error: false
			}
		});
		if (meta.pageOnSuccess) yield call(deteminateOfFetch, meta.pageOnSuccess);
	} else {
		const message = res.validationErrors
			? res.validationErrors[0].message
			: null;
		yield put({
			type: ActionTypes.GET_ADDRESS_FAILED,
			payload: new Error(message),
			error: true
		});
		if (meta.pageOnFailure) yield call(deteminateOfFetch, meta.pageOnFailure);
	}
}

function* watchLastGetZipData() {
	yield takeLatest(ActionTypes.GET_ADDRESS_REQUESTED, getAddress);
}

export const sagas = [watchLastGetZipData];
