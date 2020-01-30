import React from 'react';
import styles from './App.module.scss';
import LogoHeader from './LogoHeader';
import SectionsList from './SectionsList';
import SectionItem, { SectionCallback } from './SectionItem';
import SectionInfo from './SectionInfo';

const App: React.FC = () => {

  const clickedWhat: SectionCallback = () => {
    console.log('Clicked what');
  };

  const clickedWho: SectionCallback = () => {
    console.log('Clicked who');
  };

  return (
    <div className={styles.app}>
      <LogoHeader />
      <SectionsList>
        <SectionItem onClick={clickedWhat}>What</SectionItem>
        <SectionItem onClick={clickedWho}>Who</SectionItem>
      </SectionsList>
      <SectionInfo />
    </div>
  );
}

export default App;
