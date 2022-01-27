import {combineReducers} from 'redux';

import {todoCardsReducer} from '../components/TodoCardList/reducers/index';

export const rootReducer = combineReducers({
    todoCardsManager: todoCardsReducer
});