import express from "express";

const app = express();

app.all("/", (req, res) => {
  res.send("I am up and running");
});

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is up and running on port :${PORT}`);
});
