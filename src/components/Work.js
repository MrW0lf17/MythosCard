import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Work.css';
import goldWorkImage from '../images/gold-work.jpg';
import xpWorkImage from '../images/xp-work.jpg';

function Work() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const workState = useSelector(state => state.work);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkSelection = (type) => {
    setSelectedWork(type);
    setShowConfirmation(true);
  };

  const startWork = () => {
    const time = selectedWork === 'gold' ? 28800 : 14400; // 8 hours or 4 hours in seconds
    dispatch({ type: 'START_WORK', payload: { time, workType: selectedWork } });
    setShowConfirmation(false);
    navigate('/'); // Navigate back to main menu
  };

  const cancelWork = () => {
    setSelectedWork(null);
    setShowConfirmation(false);
  };

  if (workState.isWorking) {
    return (
      <div className="work-container">
        <div className="work-content">
          <h2>Currently Working</h2>
          <p>Please check back later or return to the main menu.</p>
        </div>
        <Link to="/" className="back-button">Back to Main Menu</Link>
      </div>
    );
  }

  return (
    <div className="work-container">
      <div className="work-content">
        <h2>Work</h2>
        {!showConfirmation && (
          <div className="work-options">
            <div className="work-card" onClick={() => handleWorkSelection('gold')}>
              <img src={goldWorkImage} alt="Work for Gold" />
              <h3>Work for Gold</h3>
              <p>8 hours - 100 Gold</p>
            </div>
            <div className="work-card" onClick={() => handleWorkSelection('xp')}>
              <img src={xpWorkImage} alt="Work for XP" />
              <h3>Work for XP</h3>
              <p>4 hours - 50 XP</p>
            </div>
          </div>
        )}
        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Are you sure you want to work for {selectedWork === 'gold' ? 'Gold' : 'XP'} for {selectedWork === 'gold' ? '8' : '4'} hours?</p>
            <p>You won't be able to play during this time.</p>
            <button onClick={startWork}>Yes, start working</button>
            <button onClick={cancelWork}>No, cancel</button>
          </div>
        )}
      </div>
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Work;
