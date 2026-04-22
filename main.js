const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'OP-1 Beat Making Guide',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#0e0e0e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    titleBarStyle: 'default',
    autoHideMenuBar: true
  })

  win.loadFile('op1-learning-guide.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
