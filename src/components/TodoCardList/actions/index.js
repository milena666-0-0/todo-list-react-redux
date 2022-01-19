import {createAction} from 'redux-actions';

export const CREATE_TODO_CARD = createAction('CREATE_TODO_CARD');
export const DELETE_TODO_CARD = createAction('DELETE_TODO_CARD');
export const COMPLETE_TODO_CARD = createAction('COMPLETE_TODO_CARD');
export const EDIT_TODO_CARD = createAction('EDIT_TODO_CARD');