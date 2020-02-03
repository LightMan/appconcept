import React from 'react';
import styles from './SectionContainer.module.scss';
import { NavItemId } from '../NavBar/NavItem';
import SectionWhat from './What/SectionWhat';
import SectionWhere from './Where/SectionWhere';
import SectionServices from './Services/SectionServices';
import SectionWhom from './Whom/SectionWhom';
import SectionWho from './Who/SectionWho';

interface Props {
  section: NavItemId;
}

const SectionContainer: React.FC<Props> = (props) => {

  let sectionElement: React.ReactNode;
  switch (props.section) {
    case NavItemId.solutions:
      sectionElement = (<SectionWhat/>);
      break;
    case NavItemId.contact:
      sectionElement = (<SectionWhere/>);
      break;
    case NavItemId.services:
      sectionElement = (<SectionServices/>);
      break;
    case NavItemId.team:
      sectionElement = (<SectionWho/>);
      break;
    case NavItemId.clients:
      sectionElement = (<SectionWhom/>);
      break;
  }

  return (
    <section className={styles.SectionContainer}>
      {sectionElement}
    </section>
  );
}

export default SectionContainer;
