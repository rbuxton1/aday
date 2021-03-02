const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("game");
});

app.listen(8008, () => {
  console.log("listening");
});
