import { Router } from "express";
import transactionController from "../controllers/transaction.controllers.js";
const transactionRouter = Router();

transactionRouter.post("/", transactionController.createTransaction);
transactionRouter.get("/all/user/:userID", transactionController.getAllTransactionsByUserId);
transactionRouter.get("/all/budget/:budgetID", transactionController.getAllTransactionsByBudgetId);
transactionRouter.get("/:id", transactionController.getTransactionById);
transactionRouter.get("/filter/:userID" , transactionController.getFilteredTransactionsByUserId);
transactionRouter.get("/total/:userID/:budgetID", transactionController.getTotalTransactionsByUserIdAndBudgetId);
transactionRouter.delete("/:id", transactionController.deleteTransactionById);
transactionRouter.patch("/:id", transactionController.updateTransactionById);


export default transactionRouter;