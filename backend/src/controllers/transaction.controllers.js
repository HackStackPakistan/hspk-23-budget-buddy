import prisma from "../utils/prisma.js";

const transactionController = {
  createTransaction: async (req, res) => {
    try {
      const transaction = await prisma.transaction.create({
        data: {
          userID: parseInt(req.body.userID),
          budgetID: parseInt(req.body.budgetID),
          transactionDate: req.body.transactionDate,
          transactionType: req.body.transactionType,
          amount: parseFloat(req.body.amount),
          category: req.body.category,
          description: req.body.description,
          paymentMethod: req.body.paymentMethod,
        },
      });
      const budget = await prisma.budget.findFirst({
        where: {
          id: parseInt(req.body.budgetID),
        },
      });
      let newBudgetAmountRemaining;
      if (req.body.transactionType === "expense") {
        newBudgetAmountRemaining =
          budget.budgetAmountRemaining - parseFloat(req.body.amount);
      } else {
        newBudgetAmountRemaining =
          budget.budgetAmountRemaining + parseFloat(req.body.amount);
      }
      const updatedBudget = await prisma.budget.update({
        where: {
          id: parseInt(req.body.budgetID),
        },
        data: {
          budgetAmountRemaining: newBudgetAmountRemaining,
        },
      });
      res.status(201).json({
        message: "Transaction created and related budget updated",
        transaction: transaction,
        updatedBudget: updatedBudget,
      });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  getAllTransactionsByUserId: async (req, res) => {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          userID: parseInt(req.params.userID),
        },
      });
      res.status(200).json({
        message: `All transactions for user ${req.params.userID}`,
        transactions: transactions,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getAllTransactionsByBudgetId: async (req, res) => {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          budgetID: parseInt(req.params.budgetID),
        },
      });
      res.status(200).json({
        message: `All transactions for budget ${req.params.budgetID}`,
        transactions: transactions,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getTransactionById: async (req, res) => {
    try {
      const transaction = await prisma.transaction.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json({
        message: `Transaction with id ${req.params.id}`,
        transaction: transaction,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  deleteTransactionById: async (req, res) => {
    try {
      await prisma.transaction.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json({
        message: `Transaction with id ${req.params.id} deleted`,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  // TODO: update budget amount remaining
  updateTransactionById: async (req, res) => {
    try {
      const transaction = await prisma.transaction.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      res.status(200).json({
        message: `Transaction with id ${req.params.id} updated`,
        transaction: transaction,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default transactionController;
