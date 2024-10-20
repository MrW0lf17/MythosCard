import React, { useState } from 'react';
import './PvPSelection.css';

const PvPSelection = ({ onBack }) => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [error, setError] = useState(null);

  const pvpModes = [
    { name: 'Fight Online', description: 'Battle against random opponents online', image: 'https://via.placeholder.com/100?text=Online' },
    { name: 'Fight with Friend', description: 'Challenge a friend to a duel', image: 'https://via.placeholder.com/100?text=Friend' },
    { name: 'Tournament', description: 'Compete in a bracket-style tournament', image: 'https://via.placeholder.com/100?text=Tournament' }
  ];

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setError(null);
  };

  const handleStartBattle = () => {
    if (selectedMode) {
      console.log(`Selected ${selectedMode.name} mode`);
      // Here you would typically start the selected PvP mode
      // For now, we'll just log it
    } else {
      setError('Please select a battle mode first');
    }
  };

  return (
    <div className="pvpselect-container">
      <button className="pvpselect-back-button" onClick={onBack}>
        Back to Battle Mode Selection
      </button>
      <h2 className="pvpselect-title">Select PvP Mode</h2>
      <div className="pvpselect-modes">
        {pvpModes.map((mode, index) => (
          <div 
            key={index} 
            className={`pvpselect-mode ${selectedMode === mode ? 'selected' : ''}`}
            onClick={() => handleModeSelect(mode)}
          >
            <img src={mode.image} alt={mode.name} className="pvpselect-mode-image" />
            <div className="pvpselect-mode-content">
              <h3 className="pvpselect-mode-name">{mode.name}</h3>
              <p className="pvpselect-mode-description">{mode.description}</p>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="pvpselect-error-message">{error}</div>}
      <button 
        className={`pvpselect-start-battle-button ${selectedMode ? 'visible' : ''}`}
        onClick={handleStartBattle}
      >
        {selectedMode ? `Select ${selectedMode.name}` : 'Select Battle'}
      </button>
    </div>
  );
};

export default PvPSelection;
