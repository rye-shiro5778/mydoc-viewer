import classNames from "classnames";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { useTabsContext } from "./useTabsContext";
export const TabBar: FC = () => {
  const { activeKey, setActiveKey, tabs } = useTabsContext();
  return (
    <>
      <div className={styles.tabBar}>
        {tabs.map(({ title, key }) => (
          <div
            key={key}
            className={classNames(
              styles.tabTitle,
              activeKey === key ? styles.tabActive : ""
            )}
            onClick={() => setActiveKey(key)}
          >
            {title}
          </div>
        ))}
      </div>
    </>
  );
};
