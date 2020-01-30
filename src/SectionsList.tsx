import React from 'react';
import styles from './SectionsList.module.scss';

interface Props {  
  // sectionClick: (section: SectionType) => void;
}

const SectionsList: React.FC<Props> = (props) => {    
  return (
    <div className={styles.sections}>
      {props.children}
    </div>
  );
}

export default SectionsList;
