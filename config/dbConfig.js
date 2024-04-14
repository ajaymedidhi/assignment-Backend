// config/dbConfig.js
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://21955a2101:VKBzy9wLgiHjbasl@cluster0.qz5renm.mongodb.net/prop';

function connect() {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

module.exports = { connect };

