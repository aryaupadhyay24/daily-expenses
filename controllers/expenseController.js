
const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { description, amount, splitMethod, splitDetails } = req.body;
    const expense = new Expense({ description, amount, splitMethod, splitDetails });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'splitDetails.userId': req.params.id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  // Logic to generate and download the balance sheet
};
