const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/moneytransfer")
.then(() => console.log("Database Connected"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/transfer", require("./routes/transfer"));

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});