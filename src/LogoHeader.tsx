import React from 'react';
import styles from './LogoHeader.module.scss';

const LogoHeader: React.FC = () => {
  return (
    <div className={styles.container} >
      <h1>AppConcept</h1>
    </div>
  );
}

export default LogoHeader;
