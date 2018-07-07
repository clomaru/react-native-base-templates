import { createStore, combineReducers, Action } from 'redux';
import mainReducer, { MainActions, MainState } from './modules/MainPageModule';
import main2Reducer, {
	Main2Actoins,
	Main2State
} from './modules/MainPage2Module';

export const configureStore = () => {
	/* tslint-disable no-underscore-dangle */
	return createStore(
		combineReducers({
			mainReducer,
			main2Reducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	/* tslint-enable */
};
export default configureStore;

export type ReduxState = {
	mainReducer: MainState;
	main2Reducer: Main2State;
};

export type ReduxAction = MainActions | Main2Actoins | Action;
