import { combineActionsGroups } from '../utils/index';
import ACTION_TYPES from './actionTypes';
import * as main from './main_actions';
import * as main2 from './main2_actions';

export default combineActionsGroups(main, main2);
