/* eslint no-undef: off, no-console: off */

const path = require('path');
const { app, BrowserWindow } = require('electron');
const log = require('electron-log');
// import MenuBuilder from './menu';


let mainWindow = null;

// if (process.env.NODE_ENV === 'production') {
//     const sourceMapSupport = require('source-map-support');
//     sourceMapSupport.install();
// }

// if (
//     process.env.NODE_ENV === 'development' ||
//     process.env.DEBUG_PROD === 'true'
// ) {
//     require('electron-debug')();
// }

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(
        extensions.map((name) =>
            installer.default(installer[name], forceDownload)
        )
    ).catch(console.log);
};

const createWindow = async () => {
    // if (
    //     process.env.NODE_ENV === 'development'
    // ) {
    //     await installExtensions();
    // }

    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        webPreferences:
            process.env.NODE_ENV === 'development'
                ? {
                    nodeIntegration: true
                } : {
                    preload: path.join(__dirname, 'dist/renderer.prod.js')
                }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
    // @TODO: Use 'ready-to-show' event
    //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }
        if (process.env.START_MINIMIZED) {
            mainWindow.minimize();
        } else {
            mainWindow.show();
            mainWindow.focus();
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // const menuBuilder = new MenuBuilder(mainWindow);
    // menuBuilder.buildMenu();

    // // Remove this if your app does not use auto updates
    // // eslint-disable-next-line
    // new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', createWindow);

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

