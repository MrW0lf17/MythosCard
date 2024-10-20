import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

function Achievements() {
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'First Victory', description: 'Win your first PvP battle', progress: 0, goal: 1, completed: false },
    { id: 2, name: 'Card Collector', description: 'Collect 10 unique cards', progress: 3, goal: 10, completed: false },
    { id: 3, name: 'Boss Slayer', description: 'Defeat 5 bosses', progress: 2, goal: 5, completed: false },
    { id: 4, name: 'Dedicated Worker', description: 'Complete 20 work shifts', progress: 5, goal: 20, completed: false },
    { id: 5, name: 'Task Master', description: 'Complete 50 daily tasks', progress: 12, goal: 50, completed: false },
  ]);

  const calculateProgress = (achievement) => {
    return (achievement.progress / achievement.goal) * 100;
  };

  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <div key={achievement.id} className={`achievement ${achievement.completed ? 'completed' : ''}`}>
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${calculateProgress(achievement)}%` }}
              ></div>
            </div>
            <p className="progress-text">
              {achievement.progress} / {achievement.goal}
              {achievement.completed && ' (Completed)'}
            </p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Achievements;
