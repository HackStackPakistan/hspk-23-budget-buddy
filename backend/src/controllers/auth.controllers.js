import prisma from "../utils/prisma.js";
const authController = {
  register: async (req, res) => {
    const { userID, username, email } = req.body;
    const user = await prisma.user.create({
      data: {
        userID,
        username,
        email,
      },
    });
    return res
      .status(201)
      .json({ message: "User created", user: user });
  },
  getDataByUserId: async (req, res) => {
    const { userID } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        userID,
      },
    });
    return res.status(200).json(user);
  }
};

export default authController;
