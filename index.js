if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/text", (req, res) => {
  const message = req.body.message;

  console.log(`The message is ${message}.`);

  res.send("Message!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
