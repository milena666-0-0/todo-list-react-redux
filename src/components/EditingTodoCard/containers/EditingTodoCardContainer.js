import { useDispatch } from "react-redux";

import {SAVE_TODO_CARD } from "../../TodoCardList/actions/index";
import { EditingTodoCardView } from "../components/EditingTodoCardView";
import { useControlledInput } from "../../../hooks/index";

export const EditingTodoCardContainer = ({ todoCard }) => {
	const { label, id } = todoCard;

	const dispatch = useDispatch();

	const { inputValue, handleReset, handleChange } = useControlledInput(label);

	const handleEditTodoCard = (e) => {
		e.preventDefault();
		dispatch(SAVE_TODO_CARD( {id, label: inputValue} ));
	};

	const handleCancelTodoCardEditing = (e) => {
		e.preventDefault();
		dispatch(SAVE_TODO_CARD({id, label}));
		handleReset();
	};

	return (
		<EditingTodoCardView
			handleCancelTodoCardEditing={handleCancelTodoCardEditing}
			handleEditTodoCard={handleEditTodoCard}
			value={inputValue}
			handleChange={handleChange}
		/>
	);
};
