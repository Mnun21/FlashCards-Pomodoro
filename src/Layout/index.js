import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { listDecks, deleteDeck, createDeck, deleteCard, updateDeck, createCard, updateCard } from "../utils/api/index";
import Header from "./Display/Header";
import NotFound from "./Errors/NotFound";
import DeckList from "./Deck/DeckList";
import DeckRoutes from "./Deck/DeckRoutes";
import Form from "./FormContent/Form";


function Layout() {
	const [decks, setDecks] = useState([]);
	const abortController = new AbortController();
	const signal = abortController.signal;
	const history = useHistory();


	useEffect(() => {
		getDecks();

		return () => {
			abortController.abort();
		};
    
// eslint-disable-next-line
	}, []);


  

	async function getDecks() {
		try {
			const response = await listDecks(signal);
			setDecks(response);
		}
		catch(error) {
			if(error.name !== "AbortError") {
				throw error;
			}
		}
	}


	async function addDeck(deck) {
		const created = await createDeck(deck, signal);
		getDecks();
		return created.id;
	}

	
	async function addCard(card, id) {
		const created = await createCard(id, card, signal);
		getDecks();
		return created.id;
	}


	async function editDeck(deck) {
		const edited = await updateDeck(deck, signal);
		getDecks();
		return edited.id;
	}

	
	async function editCard(card) {
		const edited = await updateCard(card, signal);
		getDecks();
		return edited.id;
	}

	
	async function removeDeck(id) {
		if(window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)) {
			await deleteDeck(id, signal);
			getDecks();
			history.push("/");
		}
	}


	async function removeCard(id) {
		if(window.confirm(`Delete this card?\n\nYou will not be able to recover it.`)) {
			await deleteCard(id, signal);
			getDecks();
		}
	}

  return (
    <Fragment>
      <Header />
      <div className="container">
				<Switch>
					<Route exact path="/">
						<DeckList decks={decks} removeDeck={removeDeck} />
					</Route>

					<Route path="/decks/new">
						<Form type="deck" edit={false} addDeck={addDeck} abortController={abortController} />
					</Route>

					<Route path="/decks/:deckId/">
						<DeckRoutes
							editDeck={editDeck} 
							removeDeck={removeDeck} 
							addCard={addCard} 
							editCard={editCard}
							removeCard={removeCard} 
							abortController={abortController}
						/>
					</Route>

					<Route>
						<NotFound />
					</Route>
				</Switch>
      </div>
    </Fragment>
  );
}

export default Layout;