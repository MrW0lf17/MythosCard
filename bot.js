const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const app = express();
app.use(bodyParser.json());

// Store user data (in-memory for this example, use a database in production)
const users = {};

bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const referralCode = match[1];

  if (!users[chatId]) {
    users[chatId] = {
      referralCode: generateReferralCode(),
      referredBy: referralCode,
      friendsInvited: 0,
      rewards: 0
    };
    bot.sendMessage(chatId, `Welcome! Your referral code is: ${users[chatId].referralCode}`);
    
    // Update referrer's stats if the referral code is valid
    const referrer = Object.values(users).find(user => user.referralCode === referralCode);
    if (referrer) {
      referrer.friendsInvited += 1;
      referrer.rewards += 10; // Example reward amount
      bot.sendMessage(Object.keys(users).find(key => users[key] === referrer), 
        "Congratulations! Someone used your referral code. You've earned 10 coins!");
    }
  } else {
    bot.sendMessage(chatId, `Welcome back! Your referral code is: ${users[chatId].referralCode}`);
  }
});

function generateReferralCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// API endpoint to submit friend code
app.post('/api/submit-friend-code', (req, res) => {
  const { playerCode, friendCode } = req.body;
  
  const player = Object.values(users).find(user => user.referralCode === playerCode);
  const friend = Object.values(users).find(user => user.referralCode === friendCode);

  if (!player || !friend) {
    return res.status(400).json({ success: false, message: 'Invalid player or friend code' });
  }

  if (player === friend) {
    return res.status(400).json({ success: false, message: 'You cannot use your own referral code' });
  }

  if (player.referredBy === friendCode) {
    return res.status(400).json({ success: false, message: 'This code has already been used' });
  }

  player.referredBy = friendCode;
  friend.friendsInvited += 1;
  friend.rewards += 10; // Example reward amount

  res.json({ success: true, reward: 10 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = bot;
