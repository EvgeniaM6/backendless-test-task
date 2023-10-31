/* eslint-disable @typescript-eslint/no-var-requires */
import { Suspense, lazy, useEffect, useState } from 'react';
import { ErrorBoundaryElem, Header, Loading } from './components';
import tabsArr from './tabs.json';
import { TabData } from './models';
import { useLocation } from 'react-router-dom';

let DummyComponent: React.LazyExoticComponent<React.ComponentType<unknown>>;

const getLazyDummyComponent = (pathStr: string) => {
  DummyComponent = lazy(
    () =>
      new Promise((resolve) =>
        resolve(
          require(
            /* webpackPrefetch: true */ /* webpackChunkName: "my-chunk-name" */ /* webpackMode: "lazy" */ `${pathStr}`
          )
        )
      )
  );
};

export const App = () => {
  const [currId, setCurrId] = useState(tabsArr[0].id);

  const location = useLocation();

  getLazyDummyComponent(currId);

  useEffect(() => {
    const newPathname = location.pathname.slice(1);
    const newTabData = tabsArr.find((tabData: TabData) => tabData.id === newPathname);
    setCurrId(newTabData?.path || tabsArr[0].path);
  }, [location]);

  return (
    <>
      <Header />
      <ErrorBoundaryElem>
        <Suspense fallback={<Loading />}>
          <DummyComponent />
        </Suspense>
      </ErrorBoundaryElem>
    </>
  );
};
