
const goalController = {
    createGoal: async (req, res) => {
        try {
            const goal = await goalServices.createGoal(req.body);
            res.status(201).json(goal);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllGoals: async (req, res) => {
        try {
            const goals = await goalServices.getAllGoals();
            res.status(200).json(goals);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getGoalById: async (req, res) => {
        try {
            const goal = await goalServices.getGoalById(req.params.id);
            res.status(200).json(goal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    deleteGoalById: async (req, res) => {
        try {
            const goal = await goalServices.deleteGoalById(req.params.id);
            res.status(200).json(goal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    updateGoalById: async (req, res) => {
        try {
            const goal = await goalServices.updateGoalById(req.params.id, req.body);
            res.status(200).json(goal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
};

export default goalController;
