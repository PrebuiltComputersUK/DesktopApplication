const { app, BrowserWindow, Notification } = require('electron')

require('update-electron-app')({
  repo: 'PrebuiltComputersUK/DesktopApplication',
  updateInterval: '10 minutes',
  logger: require('electron-log'),
  notifyUser: 'true'
})

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

const MainMenuTemplate = [
  {
    label:'File'
  }
]