const express = require("express");

const connectDB = require("./config/db");

const App = express();

const cors = require("cors");

connectDB();

App.use(express.json({ extended: false }));

App.use(cors());

const PORT = process.env.PORT || 6060;

App.use("/", require("./routes/api/task"));

App.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
