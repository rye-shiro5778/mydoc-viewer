import { default as React, FC, PropsWithChildren } from "react";
import styles from "./index.module.scss";
import { TabBar } from "./TabBar";
import { TabProps } from "./type";
import { useTabs } from "./useTabs";
import { TabsContext } from "./useTabsContext";
export const Tabs: FC<PropsWithChildren<TabProps>> = ({
  defaultKey,
  children,
}) => {
  const [tabState] = useTabs({ defaultKey });
  return (
    <TabsContext.Provider value={tabState}>
      <div className={styles.tabs}>
        <TabBar />
        {children}
      </div>
    </TabsContext.Provider>
  );
};
