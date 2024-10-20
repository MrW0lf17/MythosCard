import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const player = useSelector(state => state.player);

  return (
    <header className="game-header">
      <div className="user-info">
        <span>{player.name}</span>
        <span>Coins: {player.coins}</span>
        <span>Stars: {player.stars}</span>
      </div>
      <nav>
        <Link to="/cardgame">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;
