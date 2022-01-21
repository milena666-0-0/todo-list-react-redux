import { List, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import PropTypes from "prop-types";

import { TodoCardView } from "../../TodoCard/TodoCardView";

export const TodoCardListLayout = ({
	todoCards,
	handleTodoCardDelete,
	handleTodoCardComplete,
	handleStartEditingTodoCard
}) => {
	return (
		<List>
			{todoCards.length ? (
				<TransitionGroup>
					{todoCards.map((todoCard) => (
						<Collapse key={todoCard.id}>
							<TodoCardView
								todoCard={todoCard}
								handleTodoCardComplete={handleTodoCardComplete}
								handleTodoCardDelete={handleTodoCardDelete}
								handleStartEditingTodoCard={handleStartEditingTodoCard}
							/>
						</Collapse>
					))}
				</TransitionGroup>
			) : (
				<Typography component="div" align="center">
					Nothing to do...
				</Typography>
			)}
		</List>
	);
};

TodoCardListLayout.propTypes = {
	todoCards: PropTypes.arrayOf(PropTypes.object),
};
