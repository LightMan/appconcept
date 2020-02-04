import React from 'react';
import styles from './Footer.module.scss';
import NavItem, { NavItemId, NavItemCallback } from '../NavBar/NavItem';

interface Props {
  navItems: NavItemId[];
  currentNavItem: NavItemId;
  onNavItemChange: NavItemCallback;
}

const Footer: React.FC<Props> = (props) => {

  const navItemClicked: NavItemCallback = (navItemId: NavItemId) => {
    props.onNavItemChange(navItemId);
  }

  let navItemElements = Array<React.ReactNode>();
  props.navItems.forEach( (navItemId) => {    
    const name = navItemId;
    let selected = props.currentNavItem === navItemId;
    const navItemItem = (<NavItem key={navItemId} selected={selected} type={navItemId} title={name} onClick={navItemClicked} />);
    navItemElements.push(navItemItem);
  });

  return (<div className={styles.container}>{navItemElements}</div>);
}

export default Footer;
