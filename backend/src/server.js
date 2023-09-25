import app from "./app.js";
const port = process.env.PORT || 3000;

const startServer = async () => {
  // Connect to Server
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
};

startServer();
