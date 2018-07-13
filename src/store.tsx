import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose,
	Action,
	Store
} from 'redux';

import mainReducer, { MainActions, MainState } from './modules/MainPageModule';
import main2Reducer, {
	Main2Actoins,
	Main2State
} from './modules/MainPage2Module';

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/index';

// TODO:↓みづらくね？
export const configureStore = (): Store => {
	// const sagaMiddleware = createSagaMiddleware();
	// const middleware = applyMiddleware(sagaMiddleware);
	/* tslint-disable no-underscore-dangle */
	const store = createStore(
		combineReducers({
			mainReducer,
			main2Reducer
		}),
		// TODO:↓リファクタしたい
		compose(
			// middleware,
			window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
	/* tslint-enable */

	// sagaMiddleware.run(rootSaga);
	return store;
};
export default configureStore;

export type ReduxState = {
	mainReducer: MainState;
	main2Reducer: Main2State;
};

export type ReduxAction = MainActions | Main2Actoins | Action;
