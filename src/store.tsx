import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './modules/MainPageModule';
import main2Reducer from './modules/MainPage2Module';

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
