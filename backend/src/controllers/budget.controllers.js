import prisma from "../utils/prisma.js";

const budgetController = {
  createBudget: async (req, res) => {
    try {
      const budget = await prisma.budget.create({
        data: {
          userID: req.body.userID,
          budgetName: req.body.budgetName,
          budgetAmount: parseFloat(req.body.budgetAmount),
          budgetAmountRemaining: parseFloat(req.body.budgetAmount),
          budgetCategory: req.body.budgetCategory,
          budgetTimePeriod: req.body.budgetTimePeriod,
          budgetEndDate: req.body.budgetEndDate,
          budgetStartDate: req.body.budgetStartDate,
        },
      });
      res.status(201).json(budget);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  getAllBudgetsByUserId: async (req, res) => {
    try {
      const budgets = await prisma.budget.findMany({
        where: {
          userID: parseInt(req.params.userID),
        },
      });
      res.status(200).json(budgets);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getBudgetById: async (req, res) => {
    try {
      const budget = await prisma.budget.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json(budget);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  deleteBudgetById: async (req, res) => {
    try {
      const budgetID = await prisma.budget.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json({
        message: `Budget with id ${req.params.id} deleted`,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  updateBudgetById: async (req, res) => {
    try {
      const budget = await prisma.budget.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      res.status(200).json({
        message: `Budget with id ${req.params.id} updated`,
        budget: budget,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default budgetController;
