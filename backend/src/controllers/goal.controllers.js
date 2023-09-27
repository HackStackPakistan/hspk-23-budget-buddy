import prisma from "../utils/prisma.js";

const goalController = {
  createGoal: async (req, res) => {
    try {
      const goal = await prisma.goal.create({
        data: {
          userID: parseInt(req.body.userID),
          goalName: req.body.goalName,
          goalAmount: parseFloat(req.body.goalAmount),
          targetDate: req.body.targetDate,
          currentProgress: parseFloat(req.body.currentProgress),
          goalCategory: req.body.goalCategory,
          goalType: req.body.goalType,
          goalPriority: parseInt(req.body.goalPriority),
          goalStatus: req.body.goalStatus,
        },
      });
      res.status(201).json(goal);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  getAllGoalsByUserId: async (req, res) => {
    try {
      const goals = await prisma.goal.findMany({
        where: {
          userID: parseInt(req.params.userID),
        },
      });
      res.status(200).json(goals);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getGoalById: async (req, res) => {
    try {
      const goal = await prisma.goal.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json(goal);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteGoalById: async (req, res) => {
    try {
      await prisma.goal.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).json({ message: `Goal with id ${req.params.id} deleted` });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateGoalById: async (req, res) => {
    try {
      const goal = await prisma.goal.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: req.body,
      });
      res.status(200).json({
        message: `Goal with id ${req.params.id} updated`,
        goal: goal,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default goalController;
