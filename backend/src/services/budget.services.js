const budgetServices = {
  createBudget: async (budget) => {
    return { message: "Budget created successfully", budget: budget };
  },
  getAllBudgets: async () => {
    return {
      message: "All budgets retrieved successfully",
    };
  },
  getBudgetById: async (id) => {
    return { message: `Budget with id ${id} retrieved successfully` };
  },
  deleteBudgetById: async (id) => {
    return { message: `Budget with id ${id} deleted successfully` };
  },
  updateBudgetById: async (id, budget) => {
    return { message: `Budget with id ${id} updated successfully` };
  },
};

export default budgetServices;
