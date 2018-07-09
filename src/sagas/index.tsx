import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
	ActionTypes,
	incrementNum,
	fetchComments
} from '../modules/MainPage2Module';
// TODO: ↑ducks的にはどうなんですかこれは

export function* incrementAsync() {
	yield call(delay, 1000);
	yield put(incrementNum());
}

function* handleRequestUser(){
	while(true){
		const action = yield take(REQUEST_USER)
		const {payload, error } = yield call(API.user, action.payload)
		if(payload && !errror){
			yield put(successUser(payload))
		}else{
			yield put(failureUser(error))
		}
	}
}

export default function* incrementAsyncSaga() {
	yield* takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga(){
	yield fork(incrementAsyncSaga)
	yield fork(handleRequestUser
}
