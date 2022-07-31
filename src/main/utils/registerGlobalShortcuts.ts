import { app, BrowserWindow, globalShortcut } from "electron";

type Props = {
  configWindow: BrowserWindow;
  appWindow: BrowserWindow;
};

export const registerGlobalShortcut = ({ configWindow, appWindow }: Props) => {
  const globalShortcutArry: {
    content: string;
    cmd: string;
    callback: () => void;
  }[] = [
    {
      content: "アプリの停止",
      cmd: "CommandOrControl+Shift+Q",
      callback: () => app.quit(),
    },
    {
      content: "表示・非表示",
      cmd: "CommandOrControl+Shift+F",
      callback: () => {
        if (appWindow.isVisible()) {
          appWindow.hide();
        } else {
          appWindow.show();
          appWindow.focus();
        }
      },
    },
  ];

  globalShortcutArry.forEach((obj) => {
    const { cmd, content, callback } = obj;
    const ret = globalShortcut.register(cmd, callback);
    if (!ret) {
      console.log(`${cmd}:${content}の登録に失敗`);
    }
  });
};
