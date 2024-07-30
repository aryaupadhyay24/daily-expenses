
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  splitMethod: { type: String, required: true, enum: ['equal', 'exact', 'percentage'] },
  splitDetails: { type: Array, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', expenseSchema);
