import React from 'react';
import styles from './SectionInfo.module.scss';
import { SectionType } from './SectionsList';

interface Props {
  section: SectionType;
}

const SectionInfo: React.FC<Props> = (props) => {
  return (
    <div className={styles.SectionInfo}>
      Info for {SectionType[props.section]}
    </div>
  );
}

export default SectionInfo;
