import { useDispatch } from "react-redux";

import { EDIT_TODO_CARD } from "../../TodoCardList/actions/index";
import { EditingTodoCardView } from "../components/EditingTodoCardView";
import { useControlledInput } from "../../../hooks/index";

export const EditingTodoCardContainer = ({ todoCard, setIsEditing }) => {
	const { label, id } = todoCard;

	const { inputValue, handleReset, handleChange } = useControlledInput(label);

	const dispatch = useDispatch();

	const handleEditTodoCard = (e) => {
		e.preventDefault();
		dispatch(EDIT_TODO_CARD({ id, label: inputValue }));
		setIsEditing(false);
	};

	const handleCancelTodoCardEditing = (e) => {
		e.preventDefault();
		handleReset();
		setIsEditing(false);
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
