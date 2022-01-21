import { useDispatch } from "react-redux";

import { CREATE_TODO_CARD } from "../../TodoCardList/actions/index";
import { AddTaskFormView } from "../components/AddTaskFormView";
import {useControlledInput} from '../../../hooks/index';

export const AddTaskFormContainer = () => {
	const dispatch = useDispatch();


	const { inputValue, handleReset, handleChange } = useControlledInput('');

	const handleSubmit = (e) => {

		e.preventDefault();

		if(inputValue === '') {
			return;
		};
		
		dispatch(CREATE_TODO_CARD(inputValue));
		handleReset();
	};

	return (
		<AddTaskFormView
			value={inputValue}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
	);
};
