// app.js
const express = require('express');
const dbConfig = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const diaryEntryRoutes = require('./routes/diaryEntryRoutes');


const app = express();
dbConfig.connect(); // Connect to the database

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/diary-entries', diaryEntryRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

