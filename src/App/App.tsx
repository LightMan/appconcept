import React, { useState } from 'react';
import styles from './App.module.scss';
import LogoHeader from '../Logo/LogoHeader';
import NavBar from '../NavBar/NavBar';
import { NavItemCallback, NavItemId } from '../NavBar/NavItem';
import SectionContainer from '../Sections/SectionContainer';

const App: React.FC = () => {

  const [navItem, setNavItem] = useState<NavItemId>(NavItemId.none);

  const navItemChanged: NavItemCallback = (navItemId: NavItemId) => {
    setNavItem(navItemId);    
  };

  const navItems = [NavItemId.what, NavItemId.where, NavItemId.how, NavItemId.why, NavItemId.who, NavItemId.whom];
  return (
    <div className={styles.app}>
      <LogoHeader />
      <NavBar navItems={navItems} currentNavItem={navItem} onNavItemChange={navItemChanged}/>
      <SectionContainer section={navItem} />
    </div>
  );  
}

export default App;
