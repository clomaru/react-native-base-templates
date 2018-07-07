import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { ActionTypes, incrementNum } from '../modules/MainPage2Module';
// TODO: ↑ducks的にはどうなんですかこれは

export function* incrementAsync() {
	yield call(delay, 1000);
	yield put(incrementNum());
}

export default function* rootSaga() {
	yield* takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}
