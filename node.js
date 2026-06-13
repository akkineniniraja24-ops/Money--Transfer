app.post("/api/transaction", async (req, res) => {
    const { sender, receiver, amount } = req.body;

    const transaction = {
        sender,
        receiver,
        amount,
        date: new Date()
    };

    transactions.push(transaction); // For demo only

    res.json({
        success: true,
        message: "Transaction Saved"
    });
});
app.get("/api/history", (req, res) => {
    res.json(transactions);
});
let transactions = [];