const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoDB'));
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  } catch (e) {
    console.log('Server error', e.message);
  }
}

start();
