import React, { useState, useRef, useCallback, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { bosses, getBoss } from '../data/bosses';
import { getDeck, getBossRewardCard } from '../data/decks';
import './BossSelection.css';

const BossBattles = lazy(() => import('./BossBattles'));

const BossSelection = ({ onBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const player = useSelector(state => state.player);

  const [selectedBoss, setSelectedBoss] = useState(null);
  const [error, setError] = useState(null);
  const [battleStarted, setBattleStarted] = useState(false);
  const [currentBossIndex, setCurrentBossIndex] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const sliderRef = useRef(null);

  const handleBossSelect = useCallback((boss, index) => {
    const fullBossData = getBoss(boss.name);
    fullBossData.deck = getDeck(boss.name);
    fullBossData.rewardCard = getBossRewardCard(boss.name);
    setSelectedBoss(fullBossData);
    setError(null);
    setCurrentBossIndex(index);
    setIsButtonVisible(boss.unlocked || (boss.minions && boss.minions.some(m => !m.defeated)));
  }, []);

  const getCurrentMission = (boss) => {
    if (boss.unlocked) return { name: boss.name, isBoss: true };
    if (boss.minions) {
      const currentMinion = boss.minions.find(m => !m.defeated);
      return currentMinion ? { name: currentMinion.name, isBoss: false } : null;
    }
    return null;
  };

  const slideBosses = useCallback((direction) => {
    const newIndex = direction === 'right'
      ? (currentBossIndex + 1) % bosses.length
      : (currentBossIndex - 1 + bosses.length) % bosses.length;
    setCurrentBossIndex(newIndex);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  }, [currentBossIndex]);

  const handleBackClick = () => {
    onBack();
  };

  const handleStartBattle = () => {
    if (selectedBoss) {
      setBattleStarted(true);
    } else {
      setError('Please select a boss first');
    }
  };

  const handleBattleEnd = (result) => {
    setBattleStarted(false);
    // Handle battle result (e.g., update player progress, show rewards, etc.)
    console.log(`Battle ended with ${result}`);
    if (result === 'victory') {
      // Update boss/minion defeated status
      // Add reward card to player's collection
      console.log('Reward card:', selectedBoss.rewardCard);
    }
  };

  if (battleStarted) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BossBattles 
          boss={selectedBoss}
          onBattleEnd={handleBattleEnd}
        />
      </Suspense>
    );
  }

  return (
    <div className="bossselect-container">
      <button className="bossselect-back-button" onClick={handleBackClick}>
        Back to Battle Mode Selection
      </button>
      <h2 className="bossselect-title" key={currentBossIndex}>Select a Boss</h2>
      <div className="bossselect-slider" ref={sliderRef}>
        {bosses.map((boss, index) => (
          <div 
            key={index} 
            className={`bossselect-boss ${boss.name.toLowerCase()}-theme`}
            onClick={() => handleBossSelect(boss, index)}
          >
            <h3 className="bossselect-boss-name">{boss.name}</h3>
            <p className="bossselect-boss-status">{boss.unlocked ? 'Unlocked' : 'Locked'}</p>

            {!boss.unlocked && (
              <div className="bossselect-mission">
                {getCurrentMission(boss) ? (
                  <div className="bossselect-mission-item">
                    <p>Current Mission: Defeat {getCurrentMission(boss).name}</p>
                  </div>
                ) : (
                  <p>All missions completed</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bossselect-navigation">
        <button className="bossselect-nav-button" onClick={() => slideBosses('left')}>&#8592;</button>
        <button className="bossselect-nav-button" onClick={() => slideBosses('right')}>&#8594;</button>
      </div>
      {error && <div className="bossselect-error-message">{error}</div>}
      <button 
        className={`bossselect-start-battle-button ${isButtonVisible ? 'visible' : ''}`}
        onClick={handleStartBattle}
      >
        {selectedBoss && getCurrentMission(selectedBoss) 
          ? `Fight ${getCurrentMission(selectedBoss).name}` 
          : 'Start Battle'}
      </button>
    </div>
  );
};

export default BossSelection;
