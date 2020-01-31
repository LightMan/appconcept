import React from 'react';
import styles from './SectionInfo.module.scss';
import { SectionType } from './SectionItem';
import SectionWhat from './SectionWhat';

interface Props {
  section: SectionType;
}

const SectionInfo: React.FC<Props> = (props) => {

  let sectionElement = <div>unknown</div>;
  if (props.section === SectionType.what) {
    sectionElement = <SectionWhat />
  }
  return (
    <section className={styles.SectionInfo}>
      {sectionElement}
    </section>
  );
}

export default SectionInfo;
