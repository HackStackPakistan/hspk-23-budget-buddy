const goalServices = {
        createGoal: async (goal) => {
            return { message: "Goal created successfully", goal: goal };
        },
        getAllGoals: async () => {
            return {
                message: "All goals retrieved successfully",
            };
        },
        getGoalById: async (id) => {
            return { message: `Goal with id ${id} retrieved successfully` };
        },
        deleteGoalById: async (id) => {
            return { message: `Goal with id ${id} deleted successfully` };
        },
        updateGoalById: async (id, goal) => {
            return { message: `Goal with id ${id} updated successfully` };
        },
    };
    
    export default goalServices;
    