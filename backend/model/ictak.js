const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  comments: {
    type: String,
   
  },
  pageNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Ictak = mongoose.model('Ictak', projectSchema);

module.exports = Ictak;
