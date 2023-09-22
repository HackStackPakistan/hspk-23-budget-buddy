import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';

// initialization and configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
dotenv.config();

// routes






// fallback route
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.url} Not found.` });
});


export default app;