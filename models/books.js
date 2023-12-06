const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('book', BookSchema);