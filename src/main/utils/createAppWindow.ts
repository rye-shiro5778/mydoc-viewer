import { BrowserWindow } from "electron";
import path from "path";

export const createAppWindow = () => {
  const appWindow = new BrowserWindow({
    width: 910,
    height: 620,
    // transparent: true,
    frame: false,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });
  appWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  appWindow.loadFile(path.resolve(__dirname, "app.html"));
  return appWindow;
};
