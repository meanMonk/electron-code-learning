const { BrowserWindow } = require('electron');
const electron = require('electron');
const { app } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300, // to set the hieght and width of browser window.
    frame: false, /// to remove the browswer border.
    resizable: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
})
