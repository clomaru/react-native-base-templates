import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducers/reducer';
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

// let middleware = [thunk];
// middleware = [...middleware];

// // TODO: arrowにできない？
// export default function configureStore() {
// 	// return createStore(rootReducer, applyMiddleware(...middleware));
// 	let store = createStore(rootReducer);
// 	return store;
// }

export const configureStore = () => {
	return createStore(
		combineReducers({
			reducer
		})
	);
};
export default configureStore;

// export default createStore(
// 	combineReducers({
// 		reducer
// 	})
// );
