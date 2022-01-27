import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
	DELETE_TODO_CARD,
	COMPLETE_TODO_CARD,
	START_EDITING_TODO_CARD,
} from "../actions/index";
import { TodoCardListLayout } from "../components/TodoCardListLayout";

export const TodoCardListContainer = () => {
	const dispatch = useDispatch();

	const { todoCards } = useSelector((state) => state.todoCardsManager);

	const handleTodoCardDelete = useCallback((id) => {
		dispatch(DELETE_TODO_CARD(id));
	}, []);

	const handleStartEditingTodoCard = useCallback((id) => {
		dispatch(START_EDITING_TODO_CARD(id));
	}, []);

	const handleTodoCardComplete = useCallback((id) => {
		dispatch(COMPLETE_TODO_CARD(id));
	}, []);

	return (
		<TodoCardListLayout
			handleTodoCardDelete={handleTodoCardDelete}
			handleTodoCardComplete={handleTodoCardComplete}
			handleStartEditingTodoCard={handleStartEditingTodoCard}
			todoCards={todoCards}
		/>
	);
};
