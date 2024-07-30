
const express = require('express');
const router = express.Router();
const { addExpense, getUserExpenses, getOverallExpenses, downloadBalanceSheet } = require('../controllers/expenseController');

router.post('/expenses', addExpense);
router.get('/expenses/user/:id', getUserExpenses);
router.get('/expenses/overall', getOverallExpenses);
router.get('/expenses/download', downloadBalanceSheet);

module.exports = router;
