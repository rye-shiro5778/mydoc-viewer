import { useCallback, useMemo, useState } from "react";
import { TabState, TabValue } from "./type";

export function useTabs({ defaultKey }: { defaultKey: string }) {
  const [activeKey, setActiveKey] = useState(defaultKey);
  const [tabs, setTabs] = useState<TabValue[]>([]);

  const addTab = useCallback((title: string, key: string) => {
    setTabs((tabs) => {
      if (tabs.findIndex((item) => item.key === key) > 0) {
        return tabs;
      } else {
        return [...tabs, { title, key }];
      }
    });
  }, []);

  const tabState = useMemo<TabState>(
    () => ({
      activeKey,
      setActiveKey,
      tabs,
      setTabs,
      addTab,
    }),
    [activeKey, tabs]
  );

  return [tabState];
}
