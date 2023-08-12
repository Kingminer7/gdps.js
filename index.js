const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const webFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".js"));
webFiles.forEach((file) => {
  if (file == "index.js") return;
  const route = require(path.join(__dirname, file));
  if (route.web) {
    app.use(route.route);
  }
});

app.listen(3000, () => {
  
});