import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { checkBossSpecialAbility } from '../data/bosses';
import BattleLog from './BattleLog';
import './BossBattles.css';

const Card = React.memo(({ card, onClick, disabled, onDragStart }) => (
  <div 
    className={`card ${disabled ? 'disabled' : ''}`} 
    onClick={() => !disabled && onClick(card)}
    draggable={!disabled}
    onDragStart={(e) => onDragStart(e, card)}
    data-element={card.element}
  >
    <span className="card-type">{card.type}</span>
    <span className="card-element">{card.element}</span>
    <h5>{card.name}</h5>
    <div className="card-content">
      {card.attackPower > 0 && <p>Attack: {card.attackPower}</p>}
      {card.defensePower > 0 && <p>Defense: {card.defensePower}</p>}
    </div>
    {(card.attackPower > 0 || card.defensePower > 0) && (
      <span className="card-power">{card.attackPower || card.defensePower}</span>
    )}
    <span className="card-mana">{card.manaCost}</span>
  </div>
));

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    manaCost: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    attackPower: PropTypes.number,
    defensePower: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onDragStart: PropTypes.func.isRequired,
};

const INITIAL_HP = 100;
const INITIAL_MANA = 10;
const MAX_MANA = 10;
const HAND_SIZE = 4;

const ELEMENTAL_ADVANTAGES = {
  Fire: 'Air',
  Air: 'Earth',
  Earth: 'Water',
  Water: 'Fire',
  Spirit: 'Darkness',
  Darkness: 'Life',
  Life: 'Spirit'
};

const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5).map((card, index) => ({ ...card, order: index }));
};

function BossBattles({ boss, onBattleEnd }) {
  const player = useSelector((state) => state.player);
  const [playerState, setPlayerState] = useState({
    hp: INITIAL_HP,
    maxHp: INITIAL_HP,
    mana: INITIAL_MANA,
    maxMana: MAX_MANA,
    deck: shuffleDeck([...player.deck]),
    hand: [],
    field: [],
  });
  const [bossState, setBossState] = useState({
    hp: boss.maxHp,
    maxHp: boss.maxHp,
    mana: INITIAL_MANA,
    maxMana: MAX_MANA,
    deck: shuffleDeck([...boss.deck]),
    hand: [],
    field: [],
  });
  const [currentTurn, setCurrentTurn] = useState('player');
  const [messages, setMessages] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showBattleLog, setShowBattleLog] = useState(false);

  useEffect(() => {
    drawInitialHands();
  }, []);

  const drawInitialHands = useCallback(() => {
    setPlayerState(prev => ({ ...prev, hand: prev.deck.slice(0, HAND_SIZE) }));
    setBossState(prev => ({ ...prev, hand: prev.deck.slice(0, HAND_SIZE) }));
  }, []);

  const addMessage = useCallback((message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  const calculateDamage = useCallback((attacker, defender) => {
    const multiplier = ELEMENTAL_ADVANTAGES[attacker.element] === defender.element ? 1.2 :
                       ELEMENTAL_ADVANTAGES[defender.element] === attacker.element ? 0.8 : 1;
    return Math.round(attacker.attackPower * multiplier);
  }, []);

  const playCard = useCallback((card, isPlayer) => {
    const stateUpdater = isPlayer ? setPlayerState : setBossState;
    const opponentUpdater = isPlayer ? setBossState : setPlayerState;
    
    stateUpdater(prevState => {
      const newHand = prevState.hand.filter(c => c.id !== card.id);
      const newField = [...prevState.field, card];
      const newMana = prevState.mana - card.manaCost;
      
      if (card.type === 'Attack') {
        opponentUpdater(oppState => {
          const damage = calculateDamage(card, oppState);
          let remainingDamage = damage;
          const updatedField = oppState.field.map(fieldCard => {
            if (fieldCard.type === 'Defense' && fieldCard.defensePower > 0 && remainingDamage > 0) {
              const damageToCard = Math.min(remainingDamage, fieldCard.defensePower);
              fieldCard.defensePower -= damageToCard;
              remainingDamage -= damageToCard;
              addMessage(`${isPlayer ? 'Player' : 'Boss'} attacks. ${fieldCard.name} absorbs ${damageToCard} damage.`);
            }
            return fieldCard;
          }).filter(fieldCard => fieldCard.type !== 'Defense' || fieldCard.defensePower > 0);

          if (remainingDamage > 0) {
            oppState.hp = Math.max(0, oppState.hp - remainingDamage);
            addMessage(`${isPlayer ? 'Player' : 'Boss'} attacks for ${remainingDamage} damage to HP!`);
          }

          return { ...oppState, field: updatedField };
        });
      } else if (card.type === 'Defense') {
        addMessage(`${isPlayer ? 'Player' : 'Boss'} plays a defense card.`);
      }
      
      return {
        ...prevState,
        hand: newHand,
        field: newField,
        mana: newMana,
      };
    });
  }, [calculateDamage, addMessage]);

  const endTurn = useCallback(() => {
    setCurrentTurn(prevTurn => {
      const nextTurn = prevTurn === 'player' ? 'boss' : 'player';
      const stateUpdater = nextTurn === 'player' ? setPlayerState : setBossState;
      
      stateUpdater(prev => {
        const newField = prev.field.filter(card => 
          card.type === 'Defense' && card.defensePower > 0
        );
        const cardsToDraw = HAND_SIZE - prev.hand.length;
        const newHand = [
          ...prev.hand,
          ...prev.deck.slice(0, cardsToDraw)
        ].slice(0, HAND_SIZE);
        const newDeck = prev.deck.slice(cardsToDraw);
        
        return {
          ...prev,
          mana: Math.min(prev.mana + 1, MAX_MANA),
          field: newField,
          hand: newHand,
          deck: newDeck,
        };
      });
      
      return nextTurn;
    });
  }, []);

  const bossTurn = useCallback(() => {
    const playableCards = bossState.hand.filter(card => card.manaCost <= bossState.mana);
    if (playableCards.length > 0) {
      const cardToPlay = playableCards[Math.floor(Math.random() * playableCards.length)];
      playCard(cardToPlay, false);
    }
    endTurn();
  }, [bossState, playCard, endTurn]);

  useEffect(() => {
    if (currentTurn === 'boss' && !gameOver) {
      bossTurn();
    }
  }, [currentTurn, gameOver, bossTurn]);

  useEffect(() => {
    if (playerState.hp <= 0 || bossState.hp <= 0) {
      setGameOver(true);
      onBattleEnd(playerState.hp > 0 ? 'victory' : 'defeat');
    }
  }, [playerState.hp, bossState.hp, onBattleEnd]);

  useEffect(() => {
    if (bossState.hp <= boss.maxHp * 0.3) {
      const abilityResult = checkBossSpecialAbility(boss, { hp: playerState.hp, attackPower: player.attackPower });
      if (abilityResult) {
        setBossState(prev => ({ ...prev, hp: abilityResult.newBossHP }));
        setPlayerState(prev => ({ ...prev, hp: abilityResult.newPlayerHP }));
        addMessage(abilityResult.message);
      }
    }
  }, [bossState.hp, boss, playerState.hp, player.attackPower]);

  const onDragStart = useCallback((e, card) => {
    e.dataTransfer.setData('cardId', card.id);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const card = playerState.hand.find(c => c.id === cardId);
    if (card && card.manaCost <= playerState.mana) {
      playCard(card, true);
    }
  }, [playerState.hand, playerState.mana, playCard]);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const memoizedBossField = useMemo(() => (
    <div className="boss-field">
      <h4>Boss Field</h4>
      <div className="field-cards">
        {bossState.field.map((card) => (
          <Card key={card.id} card={card} onClick={() => {}} disabled={true} onDragStart={() => {}} />
        ))}
      </div>
    </div>
  ), [bossState.field]);

  const memoizedPlayerField = useMemo(() => (
    <div className="player-field" onDrop={onDrop} onDragOver={onDragOver}>
      <h4>Player Field</h4>
      <div className="field-cards">
        {playerState.field.map((card) => (
          <Card key={card.id} card={card} onClick={() => {}} disabled={true} onDragStart={() => {}} />
        ))}
      </div>
    </div>
  ), [playerState.field, onDrop, onDragOver]);

  const memoizedPlayerHand = useMemo(() => (
    <div className="player-hand">
      {playerState.hand.sort((a, b) => a.order - b.order).map((card) => (
        <Card 
          key={card.id} 
          card={card} 
          onClick={() => playCard(card, true)} 
          disabled={currentTurn !== 'player' || card.manaCost > playerState.mana}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  ), [playerState.hand, currentTurn, playerState.mana, playCard, onDragStart]);

  const toggleBattleLog = () => {
    setShowBattleLog(!showBattleLog);
  };

  return (
    <div className="boss-battles">
      <h2>Boss Battle: {boss.name}</h2>
      <div className="status-panel">
        <div className="boss-status">
          <h3>{boss.name}</h3>
          <div className="hp-bar">
            <div className="hp-fill" style={{width: `${(bossState.hp / bossState.maxHp) * 100}%`}}></div>
            <span className="hp-text">{bossState.hp}/{bossState.maxHp} HP</span>
          </div>
          <div className="mana-bar">
            <div className="mana-fill" style={{width: `${(bossState.mana / MAX_MANA) * 100}%`}}></div>
            <span className="mana-text">{bossState.mana}/{MAX_MANA} Mana</span>
          </div>
        </div>
        <button 
          className="end-turn-button"
          onClick={endTurn} 
          disabled={currentTurn !== 'player' || gameOver}
        >
          End Turn
        </button>
        <div className="player-status">
          <h3>Player</h3>
          <div className="hp-bar">
            <div className="hp-fill" style={{width: `${(playerState.hp / playerState.maxHp) * 100}%`}}></div>
            <span className="hp-text">{playerState.hp}/{playerState.maxHp} HP</span>
          </div>
          <div className="mana-bar">
            <div className="mana-fill" style={{width: `${(playerState.mana / MAX_MANA) * 100}%`}}></div>
            <span className="mana-text">{playerState.mana}/{MAX_MANA} Mana</span>
          </div>
        </div>
      </div>
      <div className="game-area">
        <div className="fields-container">
          {memoizedBossField}
          {memoizedPlayerField}
        </div>
      </div>
      {memoizedPlayerHand}
      <BattleLog logs={messages} isOpen={showBattleLog} toggleSidebar={toggleBattleLog} />
    </div>
  );
}

BossBattles.propTypes = {
  boss: PropTypes.object.isRequired,
  onBattleEnd: PropTypes.func.isRequired,
};

export default BossBattles;
