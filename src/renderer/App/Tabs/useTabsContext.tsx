import { createContext, useContext } from "react";
import { TabState } from "./type";

// contextの作成・初期化
export const TabsContext = createContext<TabState>({
  activeKey: "",
  setActiveKey: () => {},
  addTab: () => {},
  tabs: [],
  setTabs: () => {},
});

// state参照の汎用化
export const useTabsContext = () => {
  return useContext(TabsContext);
};
