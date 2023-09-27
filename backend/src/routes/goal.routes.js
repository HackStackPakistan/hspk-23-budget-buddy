import { Router } from "express";
import goalController from "../controllers/goal.controllers.js";
const goalRouter = Router();

goalRouter.post("/", goalController.createGoal);
goalRouter.get("/all/:userID", goalController.getAllGoalsByUserId);
goalRouter.get("/:id", goalController.getGoalById);
goalRouter.delete("/:id", goalController.deleteGoalById);
goalRouter.patch("/:id", goalController.updateGoalById);

export default goalRouter;