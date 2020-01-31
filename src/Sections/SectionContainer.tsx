import React from 'react';
import styles from './SectionContainer.module.scss';
import { NavItemId } from '../NavBar/NavItem';
import SectionWhat from './What/SectionWhat';
import SectionWhere from './Where/SectionWhere';
import SectionHow from './How/SectionHow';
import SectionWhy from './Why/SectionWhy';
import SectionWhom from './Whom/SectionWhom';
import SectionWho from './Who/SectionWho';

interface Props {
  section: NavItemId;
}

const SectionContainer: React.FC<Props> = (props) => {

  let sectionElement: React.ReactNode;
  switch (props.section) {
    case NavItemId.what:
      sectionElement = (<SectionWhat/>);
      break;
    case NavItemId.where:
      sectionElement = (<SectionWhere/>);
      break;
    case NavItemId.how:
      sectionElement = (<SectionHow/>);
      break;
    case NavItemId.why:
      sectionElement = (<SectionWhy/>);
      break;
    case NavItemId.who:
      sectionElement = (<SectionWho/>);
      break;
    case NavItemId.whom:
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
