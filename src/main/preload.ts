import { contextBridge, ipcRenderer } from "electron";
import { Data } from "./store";

contextBridge.exposeInMainWorld("api", {
  getAllData: async () => await ipcRenderer.invoke("getAllData"),
  getData: async (id: string) => await ipcRenderer.invoke("getData", id),
  addData: async (data: Data) => await ipcRenderer.invoke("addData", data),
  editData: async (id: string, data: Data) =>
    await ipcRenderer.invoke("editData", id, data),
  deleteData: async (id: string) => await ipcRenderer.invoke("deleteData", id),
  on: (channel: string, callback: (event: any) => void) =>
    ipcRenderer.on(channel, (event: any) => callback(event)),
});
