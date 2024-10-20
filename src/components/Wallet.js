import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Wallet.css';

function Wallet() {
  const [balance, setBalance] = useState({ coins: 0, stars: 0 });
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState({ wallet: true, balance: true, transactions: true });
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    connectTonkeeper();
  }, []);

  const connectTonkeeper = async () => {
    setError(null);
    if (window.ton && window.ton.requestPermissions) {
      try {
        const permissions = await window.ton.requestPermissions({
          permissions: ['basic', 'info'],
        });
        const address = permissions.account.address;
        setWalletAddress(address);
        setLoading(prev => ({ ...prev, wallet: false }));
        fetchBalances(address);
        fetchTransactionHistory(address);
      } catch (error) {
        console.error('Error connecting to Tonkeeper:', error);
        setError('Failed to connect to Tonkeeper. Please ensure Tonkeeper is installed and try again.');
        setLoading({ wallet: false, balance: false, transactions: false });
      }
    } else {
      setError('Tonkeeper is not installed. Please install Tonkeeper to use this feature.');
      setLoading({ wallet: false, balance: false, transactions: false });
    }
  };

  const fetchBalances = async (address) => {
    setLoading(prev => ({ ...prev, balance: true }));
    setError(null);
    try {
      const tonResponse = await fetch(`https://tonapi.io/v2/json/getAddressInformation?address=${address}`);
      const tonData = await tonResponse.json();
      const tonBalance = parseFloat(tonData.balance) / 1e9;

      const starsResponse = await fetch(`/api/tokens/getStarsBalance?address=${address}`);
      const starsData = await starsResponse.json();
      const starsBalance = starsData.balance;

      setBalance({
        coins: tonBalance,
        stars: starsBalance,
      });
    } catch (error) {
      console.error('Error fetching balances:', error);
      setError('Failed to fetch balances. Please try again later.');
    } finally {
      setLoading(prev => ({ ...prev, balance: false }));
    }
  };

  const fetchTransactionHistory = async (address) => {
    setLoading(prev => ({ ...prev, transactions: true }));
    setError(null);
    try {
      const response = await fetch(`/api/transactions/getHistory?address=${address}`);
      const data = await response.json();
      setTransactions(data.transactions.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      setError('Failed to fetch transaction history.');
    } finally {
      setLoading(prev => ({ ...prev, transactions: false }));
    }
  };

  const refreshWallet = () => {
    if (walletAddress) {
      fetchBalances(walletAddress);
      fetchTransactionHistory(walletAddress);
    } else {
      connectTonkeeper();
    }
  };

  const formatCurrency = (amount, currency) => {
    return `${amount.toFixed(2)} ${currency}`;
  };

  return (
    <div className="wallet-container">
      <h2>Wallet</h2>
      {loading.wallet ? (
        <p>Connecting to Tonkeeper...</p>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          {walletAddress && (
            <div className="wallet-address">
              <h3>Your Wallet Address</h3>
              <p>{walletAddress}</p>
            </div>
          )}
          <div className="balance">
            <h3>Current Balance</h3>
            {loading.balance ? (
              <p>Loading balances...</p>
            ) : (
              <>
                <p>Coins: {formatCurrency(balance.coins, 'TON')}</p>
                <p>Stars: {formatCurrency(balance.stars, 'Stars')}</p>
              </>
            )}
          </div>
          <div className="transactions">
            <h3>Transaction History</h3>
            {loading.transactions ? (
              <p>Loading transactions...</p>
            ) : transactions.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.currency}</td>
                      <td>{new Date(transaction.date).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No transactions found.</p>
            )}
          </div>
          <button onClick={refreshWallet} className="refresh-button">Refresh Wallet</button>
        </>
      )}
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Wallet;
