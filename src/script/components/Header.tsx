import { TabData } from '../models';
import tabsArr from '../tabs.json';
import { NavElem } from './NavElem';

export const Header = () => {
  const sortedTabsArr = tabsArr.sort((tabDataPrev: TabData, tabDataNext: TabData) => {
    return tabDataPrev.order - tabDataNext.order;
  });

  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul style={{ padding: '0' }}>
          {sortedTabsArr.map((tabData: TabData) => (
            <NavElem tabData={tabData} key={tabData.id} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
