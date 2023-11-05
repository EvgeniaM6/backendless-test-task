import { Suspense, lazy } from 'react';
import { ErrorBoundaryElem, Header, Loading } from './components';
import tabsArr from './tabs.json';
import { LazyTabComponent, TabData } from './models';
import { Route, Routes } from 'react-router-dom';

const getLazyComponent = (pathStr: string): LazyTabComponent => {
  return lazy(() => import(`${pathStr}`));
};

const renderTab = (path: string): JSX.Element => {
  const Tab: LazyTabComponent = getLazyComponent(path);
  return <Tab />;
};

export const App = (): JSX.Element => {
  const defaultTab: TabData | undefined = tabsArr.find((tab: TabData) => tab.order === 0);

  return (
    <>
      <Header />
      <ErrorBoundaryElem>
        <Suspense fallback={<Loading />}>
          <Routes>
            {defaultTab && <Route path="/" element={renderTab(defaultTab.path)} />}
            {tabsArr.map((tabObj: TabData) => (
              <Route path={`/${tabObj.id}`} element={renderTab(tabObj.path)} key={tabObj.id} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundaryElem>
    </>
  );
};
