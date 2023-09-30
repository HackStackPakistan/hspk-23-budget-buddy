import { Router } from "express";
import budgetController from "../controllers/budget.controllers.js";
const budgetRouter = Router();

budgetRouter.post("/", budgetController.createBudget);
budgetRouter.get("/all/:userID", budgetController.getAllBudgetsByUserId);
budgetRouter.get("/:id", budgetController.getBudgetById);
budgetRouter.get("/filter/:userID" , budgetController.getFilteredBudgetsByUserId);
budgetRouter.delete("/:id", budgetController.deleteBudgetById);
budgetRouter.patch("/:id", budgetController.updateBudgetById);

export default budgetRouter;
