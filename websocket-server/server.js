// server.js
const express = require('express');
const { Server } = require('ws');

const app = express();
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const wss = new Server({ server });

let userCount = 0;

wss.on('connection', (ws) => {
  userCount++;
  wss.clients.forEach(client => client.send(JSON.stringify({ userCount })));

  ws.on('close', () => {
    userCount--;
    wss.clients.forEach(client => client.send(JSON.stringify({ userCount })));
  });
});

app.get('/', (req, res) => res.send('WebSocket server'));
