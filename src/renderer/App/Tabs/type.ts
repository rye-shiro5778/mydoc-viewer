export type TabState = {
  activeKey: string;
  setActiveKey: (activekey: string) => void;
  tabs: TabValue[];
  setTabs: (tabs: TabValue[]) => void;
  addTab: (title: string, key: string) => void;
};

export type TabValue = {
  title: string;
  key: string;
};

export type TabProps = {
  defaultKey: string;
};

export type TabItemProps = {
  tabKey: string;
  title: string;
};
