import React from "react";
import PropTypes from "prop-types";


function Buttons({ names, deckId, cardId, removeDeck, removeCard }) {
	const buttonsJSX = [];
	for(let name of names) {
		switch(name) {
			case "view":
				buttonsJSX.push(
					<a key="view" href={`/decks/${deckId}`}>
						<button type="button" className="btn btn-secondary mr-2">
							
							&nbsp;View
						</button>
					</a>
				);
				break;

			case "study":
				buttonsJSX.push(
					<a key="study" href={`/decks/${deckId}/study`}>
						<button type="button" className="btn btn-primary mr-2">
							
							&nbsp;Study
						</button>
					</a>
				);
				break;

			case "delete-deck":
				buttonsJSX.push(
					<button key="delete" type="button" className="btn btn-danger float-right" onClick={() => removeDeck(deckId)}>
						&nbsp;Delete
						
					</button>
				);
				break;

			case "delete-card":
				buttonsJSX.push(
					<button key="delete" type="button" className="btn btn-danger float-right" onClick={() => removeCard(cardId)}>
						&nbsp;
					
					</button>
				);
				break; 

			case "edit-deck":
				buttonsJSX.push(
					<a key="edit-deck" href={`/decks/${deckId}/edit`}>
						<button type="button" className="btn btn-secondary mr-2">
							
							&nbsp;Edit
						</button>
					</a>
				);
				break;

			case "edit-card":
				buttonsJSX.push(
					<a key="edit-card" href={`/decks/${deckId}/cards/${cardId}/edit`}>
						<button type="button" className="btn btn-secondary mr-2 float-right">
						
							&nbsp;Edit
						</button>
					</a>
				);
				break;

			case "add-card":
				buttonsJSX.push(
					<a key="add-card" href={`/decks/${deckId}/cards/new`}>
						<button type="button" className="btn btn-primary mr-2">
							
							Add Cards
						</button>
					</a>
				);
				break;

			case "add-deck":
				buttonsJSX.push(
					<a key="add-deck" href="/decks/new">
						<button type="button" className="btn btn-secondary mr-2">
							
							Create Deck
						</button>
					</a>
				);
				break;

			default: return null;
		}
	}

	return buttonsJSX;
}

Buttons.propTypes = {
	names: PropTypes.arrayOf(PropTypes.oneOf(
		["view", "study", "delete-deck", "delete-card", "edit-deck", "edit-card", "add-deck", "add-card"]
	)).isRequired, 
	deckId: PropTypes.number, 
	cardId: PropTypes.number, 
	removeDeck: PropTypes.func, 
	removeCard: PropTypes.func,
};

export default Buttons;