// routes/diaryEntryRoutes.js
const express = require('express');
const router = express.Router();
const DiaryEntryController = require('../controllers/diaryEntryController');

router.post('/', DiaryEntryController.createEntry);
router.get('/:id', DiaryEntryController.getEntry);
router.put('/:id', DiaryEntryController.updateEntry);
router.delete('/:id', DiaryEntryController.deleteEntry);

module.exports = router;
