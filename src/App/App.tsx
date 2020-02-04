import React, { useState } from 'react';
import styles from './App.module.scss';
import LogoHeader from '../Logo/LogoHeader';
import NavBar from '../NavBar/NavBar';
import { NavItemCallback, NavItemId } from '../NavBar/NavItem';
import SectionContainer from '../Sections/SectionContainer';
import Footer from '../Footer/Footer';

const App: React.FC = () => {

  const [navItem, setNavItem] = useState<NavItemId>(NavItemId.solutions);

  const navItemChanged: NavItemCallback = (navItemId: NavItemId) => {
    setNavItem(navItemId);    
  };

  const navItems = [NavItemId.solutions, NavItemId.services, NavItemId.clients, NavItemId.contact];
  const footerItems = [NavItemId.legal, NavItemId.cookies];
  return (
    <div className={styles.app}>
      <LogoHeader />
      <NavBar navItems={navItems} currentNavItem={navItem} onNavItemChange={navItemChanged}/>
      <SectionContainer section={navItem} />      
      <Footer navItems={footerItems} currentNavItem={navItem} onNavItemChange={navItemChanged}/>
    </div>
  );  
}

export default App;
