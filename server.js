const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const App = express();
App.use(cors());
connectDB();
App.use(express.json({ extended: false }));

App.use("/", require("./routes/api/task"));
//serve static assets
if (process.env.NODE_ENV === "production") {
  //   //set static folder
  App.use(express.static("client/build"));

  App.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
