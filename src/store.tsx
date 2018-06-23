import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducers/reducer';
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

// let middleware = [thunk];
// middleware = [...middleware];

export const configureStore = () => {
	return createStore(
		combineReducers({
			reducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
};
export default configureStore;
