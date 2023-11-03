export type TabData = {
  id: string;
  title: string;
  order: number;
  path: string;
};

export type NavElemProps = {
  tabData: TabData;
};

export type LazyTabComponent = React.LazyExoticComponent<React.ComponentType<unknown>>;
