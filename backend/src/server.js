import app from "./app.js";
import connectToDatabase from "./db/db.js";
const port = process.env.PORT || 3000;

const startServer = async () => {
  // const isDatabaseConnected = await connectToDatabase(); for production
  const isDatabaseConnected = true; // for development

  if (isDatabaseConnected) {
    app.listen(port, () => {
      console.log(`Server running on port http://localhost:${port}`);
    });
  }
};

startServer();
