import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api/index";
import { useParams } from "react-router-dom";
import Links from "../Display/Links";
import Buttons from "../Display/Buttons";
import CardDisplay from "../Card/CardDisplay";
import PropTypes from "prop-types";


function DeckDisplay({ removeDeck, removeCard, abortController }) {
	const [deck, setDeck] = useState({});
	const { deckId } = useParams();

	// get deck 
	useEffect(() => {
		getDeck();

		return () => {
			abortController.abort();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	async function getDeck() {
		try {
			const response = await readDeck(deckId, abortController.signal);
			setDeck(response);
		}
		catch(error) {
			if(error.name !== "AbortError") {
				throw error;
			}
		}
	}
	
	if(Object.keys(deck).length === 0) return null;

	const cardsJSX = deck.cards.map((card) => <CardDisplay key={card.id} card={card} removeCard={removeCard} />);

	return (
		<div id={`deck-${deck.id}-view`}>
			<Links deckName={deck.name} deckId={deck.id} page="view" />
			<h5>{deck.name}</h5>
			<p>{deck.description}</p>

			<Buttons names={["edit-deck", "study", "add-card", "delete-deck"]} deckId={deck.id} removeDeck={removeDeck} />

			<h3 className="mt-4">Cards</h3>
			{cardsJSX}
		</div>
	);
}

DeckDisplay.propTypes = {
	removeDeck: PropTypes.func, 
	removeCard: PropTypes.func,
	abortController: PropTypes.instanceOf(AbortController).isRequired,
};

export default DeckDisplay;