// diaryEntrySchema.js
const mongoose = require('mongoose');

const diaryEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  photos: [{ type: String }] // Array of photo URLs
});

module.exports = mongoose.model('DiaryEntry', diaryEntrySchema);
