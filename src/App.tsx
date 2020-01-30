import React, { useState } from 'react';
import styles from './App.module.scss';
import LogoHeader from './LogoHeader';
import SectionsList, { SectionType } from './SectionsList';
import SectionItem, { SectionCallback } from './SectionItem';
import SectionInfo from './SectionInfo';

const App: React.FC = () => {

  const [section, setSection] = useState<SectionType>(SectionType.none);

  const clickedWhat: SectionCallback = () => {
    setSection(SectionType.what);
  };

  const clickedWho: SectionCallback = () => {
    setSection(SectionType.who);
  };

  console.log('Current section', SectionType[section]);

  return (
    <div className={styles.app}>
      <LogoHeader />
      <SectionsList>
        <SectionItem onClick={clickedWhat}>What</SectionItem>
        <SectionItem onClick={clickedWho}>Who</SectionItem>
      </SectionsList>
      <SectionInfo section={section} />
    </div>
  );
}

export default App;
