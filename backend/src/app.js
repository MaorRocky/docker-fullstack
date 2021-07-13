const express = require('express');
const mongoose = require('mongoose');
const { initRouter } = require('./routers/index');

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL || 27017;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const PORT = process.env.PORT || 3001;

const app = express();
  
initRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
