import { default as React, FC, PropsWithChildren, useEffect } from "react";
import { TabItemProps } from "./type";
import { useTabsContext } from "./useTabsContext";

export const TabItem: FC<PropsWithChildren<TabItemProps>> = ({
  title,
  tabKey,
  children,
}) => {
  const { activeKey, addTab } = useTabsContext();

  useEffect(() => addTab(title, tabKey), []);

  return tabKey === activeKey ? <>{children}</> : null;
};
