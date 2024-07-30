
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);