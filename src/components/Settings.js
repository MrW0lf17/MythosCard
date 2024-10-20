import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();

  const handleBackToMain = () => {
    navigate('/cardgame');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <button onClick={handleBackToMain}>Back to Main Menu</button>
      
      {/* Other settings options */}
      <div className="setting-option">
        <label htmlFor="soundVolume">Sound Volume</label>
        <input type="range" id="soundVolume" min="0" max="100" />
      </div>
      
      <div className="setting-option">
        <label htmlFor="musicVolume">Music Volume</label>
        <input type="range" id="musicVolume" min="0" max="100" />
      </div>
      
      {/* Add more settings options as needed */}
    </div>
  );
}

export default Settings;
