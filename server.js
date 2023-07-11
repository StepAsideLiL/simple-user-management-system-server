require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

// Middlewares.
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Simple User Management System App is runing");
});

// Bypass routes.
app.use("/api/v1", userRouter);

// Connect to DB.
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Simple User Management System App is running of port ${port}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
