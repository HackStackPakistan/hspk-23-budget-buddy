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
};

export default authController;
