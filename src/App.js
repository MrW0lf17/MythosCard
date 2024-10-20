import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainMenu from './components/MainMenu';
import PvP from './components/PvP';
import Work from './components/Work';
import Tasks from './components/Tasks';
import Achievements from './components/Achievements';
import DeckManagement from './components/DeckManagement';
import Shop from './components/Shop';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';

function App() {
  const dispatch = useDispatch();
  const workState = useSelector(state => state.work);
  const [serverTimeOffset, setServerTimeOffset] = useState(0);

  useEffect(() => {
    // Fetch server time when work starts
    if (workState.isWorking && !serverTimeOffset) {
      fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
          const serverTime = new Date(data.utc_datetime).getTime();
          const localTime = Date.now();
          setServerTimeOffset(serverTime - localTime);
        })
        .catch(error => console.error('Error fetching server time:', error));
    }

    // Check if the persisted work state is still valid
    if (workState.isWorking) {
      const currentTime = Date.now() + serverTimeOffset;
      const elapsedTime = Math.floor((currentTime - workState.startTime) / 1000);
      const remainingTime = Math.max(0, workState.totalTime - elapsedTime);

      if (remainingTime <= 0) {
        dispatch({ type: 'END_WORK' });
      } else {
        dispatch({ type: 'UPDATE_WORK_TIME', payload: remainingTime });
      }
    }

    let timer;
    if (workState.isWorking && workState.timeLeft > 0) {
      timer = setInterval(() => {
        const currentTime = Date.now() + serverTimeOffset;
        const elapsedTime = Math.floor((currentTime - workState.startTime) / 1000);
        const remainingTime = Math.max(0, workState.totalTime - elapsedTime);

        if (remainingTime <= 0) {
          dispatch({ type: 'END_WORK' });
          clearInterval(timer);
        } else {
          dispatch({ type: 'UPDATE_WORK_TIME', payload: remainingTime });
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [workState.isWorking, workState.timeLeft, workState.startTime, workState.totalTime, serverTimeOffset, dispatch]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Router>
      <div className="App">
        {workState.isWorking && (
          <div className="work-timer-container">
            <div className="work-timer">
              <div className="timer-hanger"></div>
              <div className="timer-body">
                <h2>Work in Progress</h2>
                <p>Time Remaining:</p>
                <div className="timer-display">{formatTime(workState.timeLeft)}</div>
              </div>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/pvp" element={<PvP />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/deck-management" element={<DeckManagement />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
