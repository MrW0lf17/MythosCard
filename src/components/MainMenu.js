import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MainMenu.css';
import Referral from './Referral';

const MainMenu = () => {
  const dispatch = useDispatch();
  const workState = useSelector(state => state.work);

  const handleSkipTime = () => {
    if (workState.isWorking) {
      dispatch({ type: 'END_WORK' });
      alert('Work completed! Rewards have been added.');
    }
  };

  return (
    <div className="main-menu">
      <h1>Card Game</h1>
      {workState.isWorking && (
        <button onClick={handleSkipTime} className="skip-time-button">
          Skip Time (Testing)
        </button>
      )}
      <nav>
        <Link to="/pvp" className={`menu-button ${workState.isWorking ? 'disabled' : ''}`}>PvP Battle</Link>
        <Link to="/work" className={`menu-button ${workState.isWorking ? 'disabled' : ''}`}>Work</Link>
        <Link to="/tasks" className="menu-button">Tasks</Link>
        <Link to="/achievements" className="menu-button">Achievements</Link>
        <Link to="/deck-management" className="menu-button">Deck Management</Link>
        <Link to="/shop" className="menu-button">Shop</Link>
        <Link to="/profile" className="menu-button">Profile</Link>
        <Link to="/wallet" className="menu-button">Wallet</Link>
        <Link to="/leaderboard" className="menu-button">Leaderboard</Link>
        <Link to="/settings" className="menu-button">Settings</Link>
      </nav>
      <Referral />
    </div>
  );
};

export default MainMenu;
