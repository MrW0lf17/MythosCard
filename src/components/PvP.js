import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BossSelection from './BossSelection';
import PvPSelection from './PvPSelection';
import './PvP.css';
import pvpBattleImage from '../images/pvp-battle.jpg';
import bossBattleImage from '../images/boss-battle.jpg';

const PvP = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState(null);
  const workState = useSelector(state => state.work);

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
  };

  if (workState.isWorking) {
    return (
      <div className="pvp-container">
        <div className="pvp-content">
          <h2>PvP Battles Unavailable</h2>
          <p>You are currently working. PvP battles are unavailable during work hours.</p>
        </div>
        <Link to="/" className="back-button">Back to Main Menu</Link>
      </div>
    );
  }

  if (mode === 'boss') {
    return <BossSelection onBack={() => setMode(null)} />;
  }

  if (mode === 'pvp') {
    return <PvPSelection onBack={() => setMode(null)} />;
  }

  return (
    <div className="pvp-container">
      <div className="pvp-content">
        <h2>Select Battle Mode</h2>
        <div className="pvp-options">
          <div className="pvp-card" onClick={() => handleModeSelect('pvp')}>
            <img src={pvpBattleImage} alt="PvP Battle" />
            <h3>PvP Battle</h3>
            <p>Battle against other players</p>
          </div>
          <div className="pvp-card" onClick={() => handleModeSelect('boss')}>
            <img src={bossBattleImage} alt="Boss Battle" />
            <h3>Boss Battle</h3>
            <p>Face powerful boss enemies</p>
          </div>
        </div>
      </div>
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
};

export default PvP;
