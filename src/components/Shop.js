import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const [playerCoins, setPlayerCoins] = useState(1000);
  const [playerStars, setPlayerStars] = useState(0);

  const [shopItems] = useState([
    { id: 1, name: 'Basic Card Pack', price: 100, currency: 'coins' },
    { id: 2, name: 'Premium Card Pack', price: 10, currency: 'stars' },
    { id: 3, name: 'XP Boost', price: 200, currency: 'coins' },
    { id: 4, name: 'Rare Card', price: 20, currency: 'stars' },
    { id: 5, name: 'Coin Doubler', price: 500, currency: 'coins' },
    { id: 6, name: 'Exclusive Avatar', price: 30, currency: 'stars' },
  ]);

  useEffect(() => {
    fetchStarsBalance();
  }, []);

  const fetchStarsBalance = async () => {
    try {
      const response = await fetch('/api/payments/get-stars-balance');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlayerStars(data.balance);
    } catch (error) {
      console.error('Failed to fetch Stars balance:', error);
      alert('Unable to retrieve your Stars balance. Please try again later.');
    }
  };

  const purchaseItem = async (item) => {
    if (item.currency === 'coins') {
      if (playerCoins >= item.price) {
        setPlayerCoins(playerCoins - item.price);
        alert(`You purchased ${item.name} for ${item.price} coins!`);
        // Additional logic for coin purchases (e.g., updating backend)
      } else {
        alert('Not enough coins!');
      }
    } else if (item.currency === 'stars') {
      try {
        const response = await fetch('/api/payments/send-invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: item.name,
            description: `Purchase of ${item.name}`,
            payload: `purchase_${item.id}`,
            currency: 'XTR',
            prices: [{ label: item.name, amount: item.price * 100 }],
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.success) {
          alert('Invoice sent! Please check your Telegram to complete the purchase.');
        } else {
          throw new Error('Failed to create invoice');
        }
      } catch (error) {
        console.error('Error initiating Stars purchase:', error);
        alert('Failed to process the purchase. Please try again.');
      }
    }
  };

  return (
    <div className="shop-container">
      <h2>In-Game Shop</h2>
      <div className="player-currency">
        <p>Your Coins: {playerCoins}</p>
        <p>Your Stars: {playerStars}</p>
        <button onClick={fetchStarsBalance}>Refresh Stars</button>
      </div>
      <div className="shop-items">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price} {item.currency}</p>
            <button onClick={() => purchaseItem(item)}>Buy</button>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Shop;
