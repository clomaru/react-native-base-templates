import { combineReducers } from 'redux';

import main_reducer from './main_reducer';
import main2_reducer from './main2_reducer';

export const reducers = combineReducers({
	main_reducer,
	main2_reducer
});
export default reducers;
