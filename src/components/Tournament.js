import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tournament.css';

function Tournament() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch tournament data
    setTimeout(() => {
      const simulatedTournaments = [
        { id: 1, name: 'Monthly Championship', startDate: '2023-05-01', endDate: '2023-05-31', status: 'Upcoming' },
        { id: 2, name: 'Weekly Showdown', startDate: '2023-04-24', endDate: '2023-04-30', status: 'In Progress' },
        { id: 3, name: 'Beginner\'s Cup', startDate: '2023-05-15', endDate: '2023-05-21', status: 'Upcoming' },
      ];
      setTournaments(simulatedTournaments);
      setLoading(false);
    }, 1000);
  }, []);

  const registerForTournament = (tournament) => {
    setSelectedTournament(tournament);
    setIsRegistered(true);
    // Simulated API call to register for the tournament
    setTimeout(() => {
      const simulatedMatches = [
        { id: 1, opponent: 'Player2', date: '2023-05-02 14:00', result: null },
        { id: 2, opponent: 'Player3', date: '2023-05-05 16:00', result: null },
        { id: 3, opponent: 'Player4', date: '2023-05-08 15:00', result: null },
      ];
      setMatches(simulatedMatches);
    }, 1000);
  };

  const playMatch = (match) => {
    // Implement the logic to play a tournament match
    // This could navigate to a new page or open a modal for the match
    alert(`Playing match against ${match.opponent}`);
  };

  return (
    <div className="tournament-container">
      <h2>Tournament Mode</h2>
      {loading ? (
        <p>Loading tournament data...</p>
      ) : (
        <>
          {!selectedTournament && (
            <div className="tournament-list">
              <h3>Available Tournaments</h3>
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-item">
                  <h4>{tournament.name}</h4>
                  <p>Date: {tournament.startDate} - {tournament.endDate}</p>
                  <p>Status: {tournament.status}</p>
                  <button onClick={() => registerForTournament(tournament)}>Register</button>
                </div>
              ))}
            </div>
          )}
          {selectedTournament && isRegistered && (
            <div className="tournament-details">
              <h3>{selectedTournament.name}</h3>
              <p>Date: {selectedTournament.startDate} - {selectedTournament.endDate}</p>
              <h4>Your Matches</h4>
              {matches.map((match) => (
                <div key={match.id} className="match-item">
                  <p>Opponent: {match.opponent}</p>
                  <p>Date: {match.date}</p>
                  <p>Result: {match.result || 'Not played'}</p>
                  {!match.result && <button onClick={() => playMatch(match)}>Play Match</button>}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Tournament;
