import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Form from "../FormContent/Form";
import DeckDisplay from "./DeckDisplay";
import Study from "./Study";
import PropTypes from "prop-types";

function DeckContent({ editDeck, removeDeck, addCard, editCard, removeCard, abortController }) {
	const { deckId } = useParams();

	
	return (
		<div id={`deck-${deckId}`}>
			<Switch>
				<Route path="/decks/:deckId/study">
					<Study abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/edit">
					<Form type="deck" edit={true} editDeck={editDeck} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/cards/new">
					<Form type="card" edit={false} addCard={addCard} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId/cards/:cardId/edit">
					<Form type="card" edit={true} editCard={editCard} abortController={abortController} />
				</Route>

				<Route path="/decks/:deckId">
					<DeckDisplay removeDeck={removeDeck} removeCard={removeCard} abortController={abortController} />
				</Route>
			</Switch>
		</div>
	);
}

DeckContent.propTypes = {
	editDeck: PropTypes.func.isRequired,
	removeDeck: PropTypes.func.isRequired, 
	addCard: PropTypes.func.isRequired, 
	editCard: PropTypes.func.isRequired, 
	removeCard: PropTypes.func.isRequired,
	abortController: PropTypes.instanceOf(AbortController).isRequired,
};

export default DeckContent;