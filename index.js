// index.js
const TelegramBot = require('node-telegram-bot-api');
const { verifyChannel, selectModel, getAIResponse } = require('./helpers'); // Assuming helpers for verification, model selection, and AI response

// Replace with your token from @BotFather
define your token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Telegram AI Bot! How can I help you today?');
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // Verify if the user is in the channel
  const isVerified = await verifyChannel(chatId);
  if (!isVerified) {
    bot.sendMessage(chatId, 'Please join the channel to use this bot.');
    return;
  }

  // Select appropriate AI model based on the message or user preference
  const model = selectModel(msg.text);

  // Get AI response using the selected model
  const response = await getAIResponse(msg.text, model);
  bot.sendMessage(chatId, response);
});

console.log('Bot is up and running...');
