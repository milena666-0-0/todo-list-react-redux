import { Card, CardContent, Typography, Box, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Fade from "@mui/material/Fade";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { makeStyles } from "@mui/styles";
import { memo } from "react";
import PropTypes from "prop-types";

import { EditingTodoCardContainer } from "../EditingTodoCard/containers/EditingTodoCardContainer";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const TodoCardView = memo(
	({
		todoCard,
		handleTodoCardDelete,
		handleTodoCardComplete,
		handleStartEditingTodoCard,
	}) => {
		const classes = useStyles();

		const { id, label, completed, isEditing } = todoCard;

		return (
			<ListItem disableGutters={true}>
				{isEditing ? (
					<EditingTodoCardContainer todoCard={todoCard} />
				) : (
					<Card className={classes.cardContainer}>
						<CardContent className={classes.cardContent}>
							<Box
								onClick={() => handleTodoCardComplete(id)}
								className={classes.boxContainer}
							>
								<Fade in={completed} mountOnEnter unmountOnExit>
									<DoneIcon className={classes.doneIcon} />
								</Fade>
								<Typography className={classes.label} component="span">
									{label}
								</Typography>
								{}
							</Box>
							<Box className={classes.boxContainer}>
								<BorderColorIcon onClick={() => handleStartEditingTodoCard(id)} className={classes.editIcon} />
								<DeleteIcon
									onClick={() => handleTodoCardDelete(id)}
									className={classes.deleteIcon}
								/>
							</Box>
						</CardContent>
					</Card>
				)}
			</ListItem>
		);
	}
);

TodoCardView.propTypes = {
	todoCard: PropTypes.object.isRequired,
	handleTodoCardDelete: PropTypes.func.isRequired,
	handleTodoCardComplete: PropTypes.func.isRequired,
};
