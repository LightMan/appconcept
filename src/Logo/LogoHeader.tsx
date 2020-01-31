import React from 'react';
import styles from './LogoHeader.module.scss';

const LogoHeader: React.FC = () => {
  return (
    <header className={styles.container} >
      <h1 className={styles.logoText}>AppConcept</h1>
    </header>
  );
}

export default LogoHeader;
