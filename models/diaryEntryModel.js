const DiaryEntrySchema = require('../schemas/diaryEntrySchema');

class DiaryEntry {
  static async createEntry(entryData, userId) {
    try {
      // Create a new diary entry associated with the user
      const newEntry = new DiaryEntrySchema({
        title: entryData.title,
        description: entryData.description,
        date: entryData.date,
        location: entryData.location,
        photos: entryData.photos || [],
        user: userId // Associate the entry with the user ID
      });

      await newEntry.save();

      return { message: 'Diary entry created successfully' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getEntry(entryId) {
    try {
      const entry = await DiaryEntrySchema.findById(entryId);
      if (!entry) {
        throw new Error('Diary entry not found');
      }

      return entry;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateEntry(entryId, updatedData) {
    try {
      await DiaryEntrySchema.findByIdAndUpdate(entryId, updatedData);
      
      return { message: 'Diary entry updated successfully' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteEntry(entryId) {
    try {
      await DiaryEntrySchema.findByIdAndDelete(entryId);
      
      return { message: 'Diary entry deleted successfully' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = DiaryEntry;
