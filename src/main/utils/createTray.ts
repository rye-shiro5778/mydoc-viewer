import { Menu, shell, Tray } from "electron";
import { BrowserWindow } from "electron/main";
import { iconPath, sourceUrl } from "../constant";

type Props = {
  configWindow: BrowserWindow;
  appWindow: BrowserWindow;
};

export const createTray = ({ configWindow, appWindow }: Props) => {
  const tray = new Tray(iconPath);
  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Edit",
        click: () => configWindow.show(),
      },
      {
        type: "separator",
      },
      {
        label: "Reload",
        click: () => appWindow.reload(),
      },
      {
        label: "Github",
        click: () => shell.openExternal(sourceUrl),
      },
      {
        label: "Exit",
        role: "quit",
      },
    ])
  );
  return tray;
};
