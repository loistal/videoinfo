const electron = require("electron");
const ffmpeg = require("ffmpeg");
const ffmpeg = require('fluent-ffmpeg');


// app is the overall running process
const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log("Test");
    console.log("Error: ", err);
    console.log("Video duration is: ", metadata.format.duration);
  });
});
