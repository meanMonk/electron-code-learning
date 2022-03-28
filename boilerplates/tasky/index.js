const { BrowserWindow, Tray } = require('electron');
const electron = require('electron');
const { app } = electron;
const path = require('path');


let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300, // to set the hieght and width of browser window.
    frame: false, /// to remove the browswer border.
    resizable: false,
    show: false, /// do not show the browswer window on launch.
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new Tray(iconPath);  
  // Implement the event handler to show and hide the browswer window.
  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  })
})
