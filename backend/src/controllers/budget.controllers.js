import budgetServices from "../services/budget.services.js";


const budgetController = {
        createBudget: async (req, res) => {
            try {
                const budget = await budgetServices.createBudget(req.body);
                res.status(201).json(budget);
            } catch (error) {
                res.status(409).json({ message: error.message });
            }
        },
        getAllBudgets: async (req, res) => {
            try {
                const budgets = await budgetServices.getAllBudgets();
                res.status(200).json(budgets);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }
        },
        getBudgetById: async (req, res) => {
            try {
                const budget = await budgetServices.getBudgetById(req.params.id);
                res.status(200).json(budget);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }
        },
        deleteBudgetById: async (req, res) => {
            try {
                const budget = await budgetServices.deleteBudgetById(req.params.id);
                res.status(200).json(budget);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }
        },
        updateBudgetById: async (req, res) => {
            try {
                const budget = await budgetServices.updateBudgetById(req.params.id, req.body);
                res.status(200).json(budget);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }
        },
}

export default budgetController;