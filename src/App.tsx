import React, { useState } from 'react';
import styles from './App.module.scss';
import LogoHeader from './LogoHeader';
import SectionsList from './SectionsList';
import { SectionCallback, SectionType } from './SectionItem';
import SectionInfo from './SectionInfo';

const App: React.FC = () => {

  const [section, setSection] = useState<SectionType>(SectionType.none);

  const sectionChanged: SectionCallback = (sectionType: SectionType) => {
    setSection(sectionType);    
  };

  const sections = [SectionType.what, SectionType.where];
  return (
    <div className={styles.app}>
      <LogoHeader />
      <SectionsList sections={sections} currentSection={section} onSectionChange={sectionChanged}/>
      <SectionInfo section={section} />
    </div>
  );  
}

export default App;
