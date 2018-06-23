import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers/reducer';

export const configureStore = () => {
	/* tslint-disable no-underscore-dangle */
	return createStore(
		reducers,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	/* tslint-enable */
};
export default configureStore;
