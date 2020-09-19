const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(` ✅ Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  console.log("HI! This is Home");
};

app.listen(PORT, handleListening);
app.get("/", handleHome);
