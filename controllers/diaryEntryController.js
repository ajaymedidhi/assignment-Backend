// diaryEntryController.js
const DiaryEntry = require('../models/diaryEntryModel');

exports.createEntry = async (req, res) => {
  try {
    const entryData = req.body;
    const result = await DiaryEntry.createEntry(entryData);
    res.status(201).json({ message: result.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEntry = async (req, res) => {
  try {
    const entryId = req.params.id;
    const entry = await DiaryEntry.getEntry(entryId);
    res.json(entry);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entryId = req.params.id;
    const updatedData = req.body;
    const result = await DiaryEntry.updateEntry(entryId, updatedData);
    res.json({ message: result.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entryId = req.params.id;
    const result = await DiaryEntry.deleteEntry(entryId);
    res.json({ message: result.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
