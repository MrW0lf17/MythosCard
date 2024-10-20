import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlayerDeck, updatePlayerGold, updatePlayerStats } from '../redux/reducers/playerReducer';
import { setAllCards } from '../redux/reducers/cardReducer'; // Corrected import path
import { DECK_SIZE, ELEMENT_CHANGE_COST } from '../constants';
import { allCards, assignElementToCard } from '../data/cards';
import './DeckManagement.css';

function DeckManagement() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const allCardsInStore = useSelector(state => state.cards?.allCards || []); // Added fallback

  const [playerDeck, setPlayerDeck] = useState([]);
  const [selectedElement, setSelectedElement] = useState(player.element || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const elements = ['Fire', 'Water', 'Earth', 'Air', 'Spirit', 'Darkness', 'Life'];

  useEffect(() => {
    console.log('Component mounted. Player deck from Redux:', player.deck);
    const savedDeck = JSON.parse(localStorage.getItem('playerDeck'));
    console.log('Saved deck from localStorage:', savedDeck);
    
    if (savedDeck && savedDeck.length > 0) {
      setPlayerDeck(savedDeck);
      dispatch(updatePlayerDeck(savedDeck));
      console.log('Setting player deck from localStorage');
    } else if (player.deck && player.deck.length > 0) {
      setPlayerDeck(player.deck);
      console.log('Setting player deck from Redux state');
    }
  }, [dispatch, player.deck]);

  useEffect(() => {
    if (allCardsInStore.length === 0) {
      const cardsWithElement = allCards.map(card => 
        card.element === 'Neutral' ? assignElementToCard({ ...card }, selectedElement) : card
      );
      dispatch(setAllCards(cardsWithElement));
    }
  }, [dispatch, selectedElement, allCardsInStore.length]);

  useEffect(() => {
    setFilteredCards(allCardsInStore.filter(card => 
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.rarity.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, allCardsInStore]);

  const handleBackToMain = () => {
    navigate('/');
  };

  const handleElementSelect = (element) => {
    if (player.element && player.gold < ELEMENT_CHANGE_COST) {
      setError(`Not enough gold to change element. Cost: ${ELEMENT_CHANGE_COST} gold`);
      return;
    }
    setSelectedElement(element);
    setError('');
    if (player.element) {
      dispatch(updatePlayerGold(player.gold - ELEMENT_CHANGE_COST));
    }
    dispatch(updatePlayerStats({ element }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addCardToDeck = (card) => {
    if (playerDeck.length < DECK_SIZE) {
      const newCard = { ...card, id: `${card.id}-${Date.now()}` };
      setPlayerDeck([...playerDeck, newCard]);
      setMessage({ text: 'Card added to deck', type: 'success' });
    } else {
      setMessage({ text: `Deck is full. Maximum ${DECK_SIZE} cards allowed.`, type: 'error' });
    }
  };

  const removeCardFromDeck = (cardId) => {
    setPlayerDeck(playerDeck.filter(card => card.id !== cardId));
    setMessage({ text: 'Card removed from deck', type: 'success' });
  };

  const saveDeck = () => {
    if (playerDeck.length !== DECK_SIZE) {
      setMessage({ text: `Your deck must have exactly ${DECK_SIZE} cards.`, type: 'error' });
      return;
    }
    console.log("Saving deck to Redux:", playerDeck);
    dispatch(updatePlayerDeck(playerDeck));
    localStorage.setItem('playerDeck', JSON.stringify(playerDeck));
    console.log('Saving deck to localStorage:', playerDeck);
    setMessage({ text: 'Deck saved successfully!', type: 'success' });
  };

  const showCardInfo = (card) => {
    setSelectedCard(card);
  };

  const closeCardInfo = () => {
    setSelectedCard(null);
  };

  const renderCardPower = (card) => {
    if (card.type === "Epic") {
      return (
        <>
          <p>Attack: {card.attackPower}</p>
          <p>Defense: {card.defensePower}</p>
        </>
      );
    } else if (card.type === "Attack") {
      return <p>Attack: {card.attackPower}</p>;
    } else if (card.type === "Defense") {
      return <p>Defense: {card.defensePower}</p>;
    } else {
      return <p>Power: {card.attackPower || card.defensePower}</p>;
    }
  };

  return (
    <div className="deck-management">
      <button onClick={handleBackToMain} className="back-button">Back to Main Menu</button>
      <h2>Deck Management</h2>

      <div className="element-selection">
        <h3>Select Your Element</h3>
        <p>{player.element ? `Current Element: ${player.element}` : 'Select your first element for free!'}</p>
        <div className="element-buttons">
          {elements.map(element => (
            <button
              key={element}
              onClick={() => handleElementSelect(element)}
              className={selectedElement === element ? 'selected' : ''}
              data-element={element}
            >
              {element}
            </button>
          ))}
        </div>
        {player.element && <p>Cost to change element: {ELEMENT_CHANGE_COST} gold</p>}
      </div>

      <div className="card-search">
        <input 
          type="text" 
          placeholder="Search cards..." 
          value={searchTerm} 
          onChange={handleSearch}
        />
      </div>

      <div className="deck-builder">
        <div className="available-cards">
          <h3>Available Cards</h3>
          <div className="card-list">
            {filteredCards.map(card => (
              <div key={card.id} className="card">
                <h4>{card.name}</h4>
                <p>Mana: {card.manaCost}</p>
                {renderCardPower(card)}
                <p>Type: {card.type}</p>
                <p>Element: {card.element}</p>
                <button onClick={() => addCardToDeck(card)}>Add to Deck</button>
                <button onClick={() => showCardInfo(card)}>Info</button>
              </div>
            ))}
          </div>
        </div>

        <div className="player-deck">
          <div className="player-deck-header">
            <h3>Your Deck ({playerDeck.length}/{DECK_SIZE})</h3>
            <button onClick={saveDeck} className="save-deck-button">Save Deck</button>
          </div>
          <div className="card-list">
            {playerDeck.map((card, index) => (
              <div key={`${card.id}-${index}`} className="card">
                <h4>{card.name}</h4>
                <p>Mana: {card.manaCost}</p>
                {renderCardPower(card)}
                <button onClick={() => removeCardFromDeck(card.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {message.text && (
        <div className={`popup-message ${message.type}`}>
          {message.text}
        </div>
      )}

      {selectedCard && (
        <div className="card-info-modal">
          <div className="card-info-content">
            <h3>{selectedCard.name}</h3>
            <p>Element: {selectedCard.element}</p>
            <p>Type: {selectedCard.type}</p>
            <p>Rarity: {selectedCard.rarity}</p>
            <p>Mana Cost: {selectedCard.manaCost}</p>
            {renderCardPower(selectedCard)}
            <p>Description: {selectedCard.description || 'No description available.'}</p>
            <button onClick={closeCardInfo}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeckManagement;
