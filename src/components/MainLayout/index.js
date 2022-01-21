import { Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TodoCardListContainer } from "../TodoCardList/containers/TodoCardListContainer";
import { AddTaskFormContainer } from "../../components/AddTaskForm/containers/AddTaskFormContainer";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const MainLayout = () => {
	const classes = useStyles();

	return (
		<Card className={classes.cardContainer}>
			<Typography variant="h4" component="h1" className={classes.title}>
				ToDo list
			</Typography>
			<TodoCardListContainer />
			<AddTaskFormContainer />
		</Card>
	);
};
