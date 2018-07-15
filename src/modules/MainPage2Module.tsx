import { Action } from 'redux';
import { Dispatch } from 'react-redux';
import { takeLatest, put, call } from 'redux-saga/effects';
import apis from '../api/postcode-js';

// initial state
//=============================

export interface Main2State {
	apiIsProcessing: boolean;
	zipCode: number | null;
	address: string | null;
	error: string | null;
	isSuccess: boolean;
}

const initialState: Main2State = {
	apiIsProcessing: false,
	zipCode: null,
	address: null,
	error: null,
	isSuccess: false
};

// action type
// =============================

export enum ActionTypes {
	GET_ADDRESS_REQUESTED = 'MainPage2Module/GET_ADDRESS_REQUESTED',
	GET_ADDRESS_SUCCEEDED = 'MainPage2Module/GET_ADDRESS_SUCCEEDED',
	GET_ADDRESS_FAILED = 'MainPage2Module/GET_ADDRESS_FAILED'
}

// reducer
// =============================

export type Main2Actoins = GetAddressRequested;

const main2Reducer = (
	state: Main2State = initialState,
	action: Main2Actoins
): Main2State => {
	switch (action.type) {
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
				address: action.payload.address,
				isSuccess: action.payload.isSuccess
			});

		case ActionTypes.GET_ADDRESS_FAILED:
			return Object.assign({}, state, {
				apiIsProcessing: false,
				error: action.payload.message,
				isSuccess: action.payload.isSuccess
			});

		default:
			return state;
	}
};
export default main2Reducer;

// action creator
//=============================

interface GetAddressRequested extends Action {
	type: ActionTypes.GET_ADDRESS_REQUESTED;
	payload: {
		zipCode: number;
	};
}

export const getAddressRequested = (zipCode: number): GetAddressRequested => ({
	type: ActionTypes.GET_ADDRESS_REQUESTED,
	payload: { zipCode }
});

// Sagas
//=============================

function* getAddress(action: { payload: { zipCode: number; isSuccess: any } }) {
	const res = yield apis.getAddress(action.payload.zipCode);
	if (res.data && res.data.length > 0) {
		yield put({
			type: ActionTypes.GET_ADDRESS_SUCCEEDED,
			payload: {
				zipCode: action.payload.zipCode,
				isSuccess: true,
				address: res.data[0].allAddress,
				error: false
			}
		});
	} else {
		const message = res.validationErrors
			? res.validationErrors[0].message
			: null;
		yield put({
			type: ActionTypes.GET_ADDRESS_FAILED,
			isSuccess: false,
			payload: new Error(message),
			error: true
		});
	}
}

function* watchLastGetZipData() {
	yield takeLatest(ActionTypes.GET_ADDRESS_REQUESTED, getAddress);
}

export const sagas = [watchLastGetZipData];
