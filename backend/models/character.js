const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  breed: { type: String, required: true },
  saga: { type: String, required: true },
  serie: { type: String, required: true},
});

module.exports = mongoose.model('Character', characterSchema);
