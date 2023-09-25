const transactionServices = {
  createTransaction: async (transaction) => {
    return {
      message: "Transaction created successfully",
      transaction: transaction,
    };
  },
  getAllTransactions: async () => {
    return {
      message: "All transactions retrieved successfully",
    };
  },
  getTransactionById: async (id) => {
    return { message: `Transaction with id ${id} retrieved successfully` };
  },
  deleteTransactionById: async (id) => {
    return { message: `Transaction with id ${id} deleted successfully` };
  },
  updateTransactionById: async (id, transaction) => {
    return { message: `Transaction with id ${id} updated successfully` };
  },
};

export default transactionServices;
