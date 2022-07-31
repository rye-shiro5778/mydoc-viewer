import { BrowserWindow, screen } from "electron";
import path from "path";

export const createConfigWindow: () => BrowserWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width } = primaryDisplay.workAreaSize;
  const configWindow = new BrowserWindow({
    width: 350,
    height: 600,
    frame: true,
    show: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });
  configWindow.setPosition(width - 400, 30);
  configWindow.loadFile(path.resolve(__dirname, "config.html"));
  return configWindow;
};
