import { FormControl, OutlinedInput, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';
import {memo} from 'react';

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const EditingTodoCardView = memo(({
	value,
	handleChange,
	handleCancelTodoCardEditing,
	handleEditTodoCard,
}) => {
	const classes = useStyles();

	return (
		<FormControl component="form" fullWidth={true}>
			<OutlinedInput
				value={value}
				onChange={handleChange}
				multiline={true}
				variant="outlined"
			/>
			<Box className={classes.boxContainer}>
				<Button type="submit" onClick={handleCancelTodoCardEditing} variant="contained">Cancel</Button>
				<Button 
				type="submit" 
				onClick={handleEditTodoCard} 
				className={classes.button} variant="contained">
					Enter
				</Button>
			</Box>
		</FormControl>
	);
});

EditingTodoCardView.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleCancelTodoCardEditing: PropTypes.func.isRequired,
	handleEditTodoCard: PropTypes.func.isRequired,
};
