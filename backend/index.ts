import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hej från backend!");
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
