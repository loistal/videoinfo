const electron = require("electron");

// app is the overall running process
const { app } = electron;

app.on("ready", () => {
  console.log("hello world!");
});
