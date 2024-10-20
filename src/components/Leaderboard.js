import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Leaderboard.css';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch leaderboard data
    setTimeout(() => {
      const simulatedData = [
        { id: 1, name: 'Player1', elo: 1500, wins: 50 },
        { id: 2, name: 'Player2', elo: 1450, wins: 45 },
        { id: 3, name: 'Player3', elo: 1400, wins: 40 },
        { id: 4, name: 'Player4', elo: 1350, wins: 35 },
        { id: 5, name: 'Player5', elo: 1300, wins: 30 },
      ];
      setLeaderboardData(simulatedData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {loading ? (
        <p>Loading leaderboard data...</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>ELO</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.elo}</td>
                <td>{player.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Leaderboard;
