import { handleActions } from "redux-actions";
import { v4 as uuidv4 } from 'uuid';

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
			};
			const updatedTodoCardsList = [...state.todoCards, newCard];

			return {
				...state,
				todoCards: updatedTodoCardsList,
			};
		},
		[actions.DELETE_TODO_CARD]: (state, { payload: id }) => {
			const copy = [...state.todoCards];

			const findIndex = copy.findIndex((card) => card.id === id);

			copy.splice(findIndex, 1);

			return {
				...state,
				todoCards: copy,
			};
		},
		[actions.EDIT_TODO_CARD]: (state, { payload }) => {
			const copy = [...state.todoCards];
			
			const newCardList = copy.map((card) => 
				card.id === payload.id ? { ...card, label: payload.label } : card
			);
			
			return {
				...state,
				todoCards: newCardList,
			};
		},
		
		[actions.COMPLETE_TODO_CARD]: (state, { payload: id }) => {
			const copy = [...state.todoCards];

			const newCardList = copy.map((card) =>
				card.id === id ? { ...card, completed: !card.completed } : card
			);

			return {
				...state,
				todoCards: newCardList,
			};
		},
	},
	defaultState
);
