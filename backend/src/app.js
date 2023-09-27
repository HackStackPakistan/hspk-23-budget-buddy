import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";

// import routes
import budgetRouter from "./routes/budget.routes.js";
import transactionRouter from "./routes/transaction.routes.js";
import goalRouter from "./routes/goal.routes.js";
import authRouter from "./routes/auth.routes.js";

// initialization and configuration
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(compression());

// routes
app.use("/auth", authRouter);
app.use("/budgets", budgetRouter);
app.use("/transactions", transactionRouter);
app.use("/goals", goalRouter);

// fallback route
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.url} Not found.` });
});

export default app;
