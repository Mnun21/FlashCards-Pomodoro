import React from "react";
import PropTypes from "prop-types";

function Links({ page, deckName, deckId, cardId }) {
	
	const currentPage = () => {
		switch(page) {
			case "study":
				return <li className="breadcrumb-item active">Study</li>;
			case "create-deck":
				return <li className="breadcrumb-item active">Create Deck</li>;
			case "edit-deck":
				return <li className="breadcrumb-item active">Edit Deck</li>;
			case "create-card":
				return <li className="breadcrumb-item active">Add Card</li>;
			case "edit-card":
				return <li className="breadcrumb-item active">Edit Card {cardId}</li>;
			default:
				return null;
		}
	};


	const deckTitle = () => {
		if(!deckName || !deckId) return null;

		return (
			<li className={`breadcrumb-item ${page === "view" ? "active" : ""}`}>
				{page === "view" ? deckName :
					<a href={`/decks/${deckId}`}>
						{deckName}
					</a>
				}
			</li>
		);
	};

	return (
		<div id="deck-study">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="/">
							
							Home
						</a>
					</li>
					{deckTitle()}
					{currentPage()}
				</ol>
			</nav>
		</div>
	);
}

Links.propTypes = {
	page: PropTypes.string.isRequired,
	deckName: PropTypes.string,
	deckId: PropTypes.number,
	cardId: PropTypes.number,
};

export default Links;