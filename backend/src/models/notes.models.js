const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      min: [3, 'title should have more than 3 chars'],
      max: [30, 'title should have no more than 30 chars'],
      required: true,
    },
    description: {
      type: String,
      min: [5, 'description should have more than 5 chars'],
      max: [50, 'description should have no more than 50 chars'],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Note', NoteSchema);
