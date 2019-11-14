"use strict";
const express = require('express');
const app = express();
const PORT = 4000;

const path = require('path');
let buildPath = '../build';

app.use(express.static(path.join(__dirname, buildPath)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, buildPath, 'index.html'));
});

const chat = require('./chat');

app.post('/login', express.json(), (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(400).json({ 'error': `'username' property are required` });
    return;
  }
  chat.addUser({ username });
  res.json({ 'users': chat.users, 'messages': chat.messages });
});

app.post('/logout', express.json(), (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(400).json({ 'error': `'username' property are required` });
    return;
  }
  chat.removeUser({ username });
  res.status(200).json({});
});

app.get('/messages', (req, res) => {
  res.json({ 'messages': chat.messages, 'users': chat.users });
});

app.post('/messages', express.json(), (req, res) => {
  const { text, username } = req.body;
  if (!username || !text) {
    res.status(400).json({ 'error': `'username' and 'text' property are required` });
  } else {
    chat.addMessage({ sender: username, text, timestamp: new Date() });
    res.json({ 'messages': chat.messages, 'users': chat.users });
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
