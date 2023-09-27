
const transactionController = {
    createTransaction: async (req, res) => {
        try {
            const transaction = await transactionServices.createTransaction(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllTransactions: async (req, res) => {
        try {
            const transactions = await transactionServices.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getTransactionById: async (req, res) => {
        try {
            const transaction = await transactionServices.getTransactionById(req.params.id);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    deleteTransactionById: async (req, res) => {
        try {
            const transaction = await transactionServices.deleteTransactionById(req.params.id);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    updateTransactionById: async (req, res) => {
        try {
            const transaction = await transactionServices.updateTransactionById(req.params.id, req.body);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
};

export default transactionController;
