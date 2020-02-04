import React from 'react';
import styles from './SectionContainer.module.scss';
import { NavItemId } from '../NavBar/NavItem';
import SectionSolutions from './Solutions/SectionSolutions';
import SectionServices from './Services/SectionServices';
import SectionClientes from './Clients/SectionClients';
import SectionContact from './Contact/SectionContact';

interface Props {
  section: NavItemId;
}

const SectionContainer: React.FC<Props> = (props) => {

  let sectionElement: React.ReactNode;
  switch (props.section) {
    case NavItemId.solutions:
      sectionElement = (<SectionSolutions/>);
      break;
    case NavItemId.contact:
      sectionElement = (<SectionContact/>);
      break;
    case NavItemId.services:
      sectionElement = (<SectionServices/>);
      break;
    case NavItemId.clients:
      sectionElement = (<SectionClientes/>);
      break;
  }

  return (
    <section className={styles.SectionContainer}>
      {sectionElement}
    </section>
  );
}

export default SectionContainer;
