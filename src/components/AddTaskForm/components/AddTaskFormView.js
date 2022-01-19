import { FormControl, OutlinedInput, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const AddTaskFormView = ({ handleSubmit, handleChange, value }) => {
	
	const classes = useStyles();

	return (
		<FormControl
			onSubmit={handleSubmit}
			className={classes.form}
			component="form"
		>
			<Typography className={classes.text} variant="h6" component="span">
				Task
			</Typography>
			<Box className={classes.boxContainer}>
				<OutlinedInput
					value={value}
					onChange={handleChange}
					className={classes.input}
					variant="outlined"
					multiline={true}
					placeholder="Add new task"
				/>
				<Button
					type="submit"
					className={classes.button}
					variant="contained"
				>
					Add
				</Button>
			</Box>
		</FormControl>
	);
};


AddTaskFormView.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};