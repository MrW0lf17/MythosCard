import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  // Simulated player data (replace with actual data from your game state)
  const [player, setPlayer] = useState({
    name: 'Player1',
    level: 10,
    xp: 2500,
    nextLevelXp: 3000,
    wins: 25,
    losses: 15,
    elo: 1250,
    coins: 1000,
    stars: 50,
    cards: [
      { id: 1, name: 'Card 1', value: 5 },
      { id: 2, name: 'Card 2', value: 7 },
      { id: 3, name: 'Card 3', value: 3 },
      { id: 4, name: 'Card 4', value: 6 },
    ],
    achievements: [
      { id: 1, name: 'First Victory', completed: true },
      { id: 2, name: 'Card Collector', completed: false },
      { id: 3, name: 'Boss Slayer', completed: true },
    ],
  });

  const calculateWinRate = () => {
    const totalGames = player.wins + player.losses;
    return totalGames > 0 ? ((player.wins / totalGames) * 100).toFixed(2) : 0;
  };

  return (
    <div className="profile-container">
      <h2>Player Profile</h2>
      <div className="profile-info">
        <h3>{player.name}</h3>
        <p>Level: {player.level}</p>
        <p>XP: {player.xp} / {player.nextLevelXp}</p>
        <div className="xp-bar">
          <div className="xp-progress" style={{ width: `${(player.xp / player.nextLevelXp) * 100}%` }}></div>
        </div>
        <p>Wins: {player.wins}</p>
        <p>Losses: {player.losses}</p>
        <p>Win Rate: {calculateWinRate()}%</p>
        <p>ELO: {player.elo}</p>
        <p>Coins: {player.coins}</p>
        <p>Stars: {player.stars}</p>
      </div>
      <div className="card-collection">
        <h3>Card Collection</h3>
        <div className="cards">
          {player.cards.map((card) => (
            <div key={card.id} className="card">
              {card.name} (Value: {card.value})
            </div>
          ))}
        </div>
      </div>
      <div className="achievements">
        <h3>Achievements</h3>
        {player.achievements.map((achievement) => (
          <div key={achievement.id} className={`achievement ${achievement.completed ? 'completed' : ''}`}>
            {achievement.name} {achievement.completed ? '✅' : '❌'}
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Profile;
