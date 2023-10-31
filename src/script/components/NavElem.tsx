import { NavLink, useLocation } from 'react-router-dom';
import { NavElemProps } from '../models';
import { useEffect, useState } from 'react';

export const NavElem = (props: NavElemProps) => {
  const { tabData } = props;

  const [isDefaultActive, setIsDefaultActive] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const newPathname = location.pathname.slice(1);
    setIsDefaultActive(!newPathname);
  }, [location]);

  return (
    <li style={{ padding: '5px', listStyle: 'none', display: 'inline' }}>
      <NavLink
        to={`/${tabData.id}`}
        className={({ isActive }) => {
          if (!tabData.order) {
            return isActive || isDefaultActive ? 'active' : '';
          } else {
            return isActive ? 'active' : '';
          }
        }}
      >
        {tabData.title}
      </NavLink>
    </li>
  );
};
