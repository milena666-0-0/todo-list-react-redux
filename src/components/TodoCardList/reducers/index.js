import { handleActions } from "redux-actions";
import { v4 as uuidv4 } from 'uuid';
import {cloneDeep} from 'lodash';

import * as actions from "../actions/index";

const defaultState = {
	todoCards: [],
};

export const todoCardsReducer = handleActions(
	{
		[actions.CREATE_TODO_CARD]: (state, { payload: label }) => {
			const newCard = {
				id: uuidv4(),
				label,
				completed: false,
				isEditing: false
			};
			const updatedTodoCardsList = [...state.todoCards, newCard];

			return {
				...state,
				todoCards: updatedTodoCardsList,
			};
		},
		[actions.DELETE_TODO_CARD]: (state, { payload: id }) => {
			const copy = cloneDeep(state.todoCards);

			const findIndex = copy.findIndex((card) => card.id === id);

			copy.splice(findIndex, 1);

			return {
				...state,
				todoCards: copy,
			};
		},
		[actions.START_EDITING_TODO_CARD]: (state, { payload: id }) => {
			const copy = cloneDeep(state.todoCards);
			
			const findTodoCardToEdit = copy.find((card) => card.id === id );

			findTodoCardToEdit.isEditing = true;

			console.log(1)
			
			return {
				...state,
				todoCards: copy,
			};
		},
		
		[actions.COMPLETE_TODO_CARD]: (state, { payload: id }) => {
			const copy = cloneDeep(state.todoCards);

			const findTodoCardToComplete = copy.find((card) => card.id === id );

			findTodoCardToComplete.completed = !findTodoCardToComplete.completed;

			return {
				...state,
				todoCards: copy,
			};
		},
		[actions.SAVE_TODO_CARD]: (state, { payload}) => {
			const copy = cloneDeep(state.todoCards);

			const findTodoCardToSave = copy.find((card) => card.id === payload.id );

			findTodoCardToSave.isEditing = false;
			findTodoCardToSave.label = payload.label;

			return {
				...state,
				todoCards: copy,
			}
		}
	},
	defaultState
);
