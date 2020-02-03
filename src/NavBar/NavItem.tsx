import React from 'react';
import styles from './NavItem.module.scss';

export enum NavItemId {
  none = '',
  solutions = 'Soluciones',
  services = 'Servicios',
  team = 'Equipo',
  clients = 'Clientes',
  contact = 'Contacto'
}

export type NavItemCallback = (navItem: NavItemId) => void;

interface Props {
  type: NavItemId;
  selected: boolean;
  title: string;
  onClick: NavItemCallback;
}

const NavItem: React.FC<Props> = (props) => {
  let classes = [styles.navItem];
  if (props.selected) {
    classes.push(styles.navItemSelected);
  }
  return (
    <h1 className={classes.join(' ')}
      onClick={() => { props.onClick(props.type) }}> {props.title}</h1 >
  );
}

export default NavItem;
