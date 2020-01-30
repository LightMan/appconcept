import React from 'react';
import styles from './SectionsList.module.scss';

export enum SectionType {
  none, what, who, where, how, why
}

const SectionsList: React.FC = (props) => {    
  return (
    <div className={styles.sections}>
      {props.children}
    </div>
  );
}

export default SectionsList;
