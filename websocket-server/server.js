const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('ws');
const config = require('./config'); // Make sure this path is correct

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Start the Express server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Set up WebSocket server
const wss = new Server({ server });

// Initialize the counter with the current Unix timestamp
let vlitoCounter = Math.floor(Date.now());

wss.on('connection', (ws) => {
  // On connection, send the current value of the time counter
  ws.send(JSON.stringify({ vlitoCounter }));

  // Set an interval to update the time counter every second
  const interval = setInterval(() => {
    vlitoCounter = Math.floor(Date.now() / 100000);
    ws.send(JSON.stringify({ vlitoCounter }));
  }, 1000);

  ws.on('close', () => {
    clearInterval(interval);
  });
});

// Route for sending messages to Telegram
app.post('/send-to-telegram', async (req, res) => {
  // Construct message from all parts of the form data
  const { firstName, lastName, email, telegramNickname, message } = req.body;
  const fullMessage = `
      New Message from: ${firstName} ${lastName}
      Email: ${email}
      Telegram Nickname: ${telegramNickname}
      Message: ${message}
  `;

  try {
      console.log(fullMessage);
      await axios.post(`${config.telegramApiUrl}${config.telegramBotToken}/sendMessage?chat_id=${config.telegramChatId}`, {
          text: fullMessage,
      });

      res.send({ success: true, message: 'Message sent to Telegram successfully!' });
  } catch (error) {
      console.error('Error sending message to Telegram:', error);
      res.status(500).send({ success: false, message: 'Failed to send message to Telegram' });
  }
});


// Route for checking the server status
app.get('/', (req, res) => res.send('WebSocket server is running'));

// Add CORS middleware for development purposes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any domain during development
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
