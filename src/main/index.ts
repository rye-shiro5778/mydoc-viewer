import {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  powerMonitor,
  Tray,
} from "electron";
import { addData, Data, getAlldata } from "./store";
import { createAppWindow } from "./utils/createAppWindow";
import { createConfigWindow } from "./utils/createConfigWindow";
import { createTray } from "./utils/createTray";
import { registerGlobalShortcut } from "./utils/registerGlobalShortcuts";
const isDev = process.env.NODE_ENV === "development";
let tray: Tray | null = null;
let appWindow: BrowserWindow | null;
let configWindow: BrowserWindow | null;

// 二重起動の防止
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
}

app.once("ready", async () => {
  // isDev && clearStore();
  // Windowの作成
  configWindow = createConfigWindow();
  appWindow = createAppWindow();

  // 初期設定
  tray = createTray({ appWindow, configWindow });
  registerGlobalShortcut({ appWindow, configWindow });

  if (process.platform !== "win32") {
    powerMonitor.once("shutdown", () => {
      app.quit();
    });
  }
});

app.on("browser-window-blur", () => {
  if (configWindow && configWindow.isVisible()) {
    configWindow.hide();
  }
});

app.once("window-all-closed", () => {
  globalShortcut.unregisterAll();
});

process.once("exit", () => {
  globalShortcut.unregisterAll();
});

// IPC通信
ipcMain.handle("getAllData", (event) => {
  return getAlldata();
});
ipcMain.handle("addData", (event, data: Data) => {
  const isSuccess = addData(data);
  console.log(getAlldata());
  return isSuccess;
});
