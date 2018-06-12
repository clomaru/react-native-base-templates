import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

// let middleware = [thunk];
// middleware = [...middleware];

// TODO: arrowにできない？
export default function configureStore() {
	// return createStore(rootReducer, applyMiddleware(...middleware));

	let store = createStore(rootReducer);
	return store;
}
