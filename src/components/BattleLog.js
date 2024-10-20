import React from 'react';
import './BattleLog.css';

const BattleLog = ({ logs, isOpen, toggleSidebar }) => {
  return (
    <div className={`battle-log-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '<' : '>'}
      </button>
      <div className="battle-log-content">
        <h3>Battle Log</h3>
        <div className="log-entries">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BattleLog;
