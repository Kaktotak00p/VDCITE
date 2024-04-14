const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('ws');
const config = require('./config'); // Make sure this path is correct
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const upload = multer({dest: 'uploads/'})
const FormData = require('form-data');

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
app.post('/send-to-telegram', upload.single('file'), async (req, res) => {
  const { firstName, lastName, email, telegramNickname, message } = req.body;
  const file = req.file; // Uploaded file information

  const fullMessage = `
      New Message from: ${firstName} ${lastName}
      Email: ${email}
      Telegram Nickname: ${telegramNickname}
      Message: ${message}
  `;

  try {
      // Send the text message
      await axios.post(`${config.telegramApiUrl}${config.telegramBotToken}/sendMessage`, {
          chat_id: config.telegramChatId,
          text: fullMessage,
      });

      if (file) {
          // If there's a file and it's a PDF, send it as a document
          const formData = new FormData();
          formData.append('chat_id', config.telegramChatId);
          formData.append('document', fs.createReadStream(file.path), { filename: file.originalname, contentType: 'application/pdf' });

          await axios.post(`${config.telegramApiUrl}${config.telegramBotToken}/sendDocument`, formData, {
              headers: formData.getHeaders(),
          });

          // Delete the file after sending
          fs.unlinkSync(file.path);
      }

      res.send({ success: true, message: 'Message and file sent to Telegram successfully!' });
  } catch (error) {
      console.error('Error sending message or file to Telegram:', error);
      res.status(500).send({ success: false, message: 'Failed to send message or file to Telegram' });
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
