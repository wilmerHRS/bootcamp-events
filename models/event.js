const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    idUser: {
      type: Number,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    book: {
      type: Number,
      ref: 'book',
      required: true
    },
    description: {
      type: String,
      required: true
    },
    registered: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('event', EventSchema);