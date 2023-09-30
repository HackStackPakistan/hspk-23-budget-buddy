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
  getFilteredTransactionsByUserId: async (req, res) => {
    try {
      const {
        transactionType,
        amount,
        category,
        transactionStartDate,
        transactionEndDate,
        sortBy, // Field to sort by (e.g., 'createdAt')
        sortOrder, // Sort order ('asc' or 'desc')
        limit, // Number of transactions to return
        budgetID,
      } = req.query; // Parse parameters from request query

      const whereClause = {
        userID: parseInt(req.params.userID), // Convert to integer if needed
      };

      // Add other parameters to the where clause if provided
      if (transactionType) {
        whereClause.transactionType = { equals: transactionType };
      }

      if (amount) {
        whereClause.amount = { equals: parseFloat(amount) }; // Convert to float if needed
      }

      if (category) {
        whereClause.category = { equals: category };
      }

      if (transactionStartDate) {
        whereClause.transactionDate = {
          gte: new Date(transactionStartDate),
        };
      }

      if (budgetID) {
        whereClause.budgetID = { equals: parseInt(budgetID) };
      }
      if (transactionEndDate) {
        whereClause.transactionDate = {
          ...whereClause.transactionDate,
          lte: new Date(transactionEndDate),
        };
      }

      // Define the sorting options
      const orderBy = {};
      if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder;
      }

      const filteredTransactions = await prisma.transaction.findMany({
        where: whereClause,
        orderBy,
        take: limit ? parseInt(limit) : undefined,
      });

      res.status(200).json(filteredTransactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getTotalTransactionsByUserIdAndBudgetId: async (req, res) => {

    try {
      const { userID, budgetID } = req.params;
      const transactions = await prisma.transaction.findMany({
        where: {
          userID: parseInt(userID),
          budgetID: parseInt(budgetID),
          transactionType: "expense",
        },
      });
      let totalTransactions = 0;
      transactions.forEach((transaction) => {
          totalTransactions += transaction.amount;
      });
      res.status(200).json({
        message: `Total transactions for user ${userID} and budget ${budgetID}`,
        totalTransactions: totalTransactions,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

export default transactionController;
