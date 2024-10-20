import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Referral.css';
import { setReferralCode, incrementFriendsInvited, addReferralReward } from '../redux/reducers/playerReducer';

const Referral = () => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const [friendCode, setFriendCode] = useState('');

  useEffect(() => {
    if (!player.referralCode) {
      // In a real app, you'd fetch this from your backend
      const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      dispatch(setReferralCode(generatedCode));
    }
  }, [player.referralCode, dispatch]);

  const copyReferralLink = () => {
    const referralLink = `https://t.me/mythoscardbot?start=${player.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  const submitFriendCode = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/submit-friend-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerCode: player.referralCode, friendCode }),
      });

      const data = await response.json();
      if (data.success) {
        dispatch(incrementFriendsInvited());
        dispatch(addReferralReward(data.reward));
        alert(`Friend code accepted! You've earned ${data.reward} coins!`);
      } else {
        alert(data.message || 'Invalid friend code.');
      }
    } catch (error) {
      console.error('Error submitting friend code:', error);
      alert('Failed to submit friend code. Please try again.');
    }
    setFriendCode('');
  };

  return (
    <div className="referral-container">
      <h2>Invite Friends</h2>
      <div className="referral-info">
        <p>Invite friends and earn rewards!</p>
        <p>Your Referral Code: <strong>{player.referralCode}</strong></p>
        <button onClick={copyReferralLink}>Copy Referral Link</button>
      </div>
      <div className="referral-stats">
        <p>Friends Invited: {player.friendsInvited}</p>
        <p>Rewards Earned: {player.referralRewards} coins</p>
      </div>
      <div className="enter-friend-code">
        <h3>Have a friend's code?</h3>
        <input 
          type="text" 
          value={friendCode} 
          onChange={(e) => setFriendCode(e.target.value)}
          placeholder="Enter friend's code"
        />
        <button onClick={submitFriendCode}>Submit</button>
      </div>
    </div>
  );
};

export default Referral;
