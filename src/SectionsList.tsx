import React from 'react';
import styles from './SectionsList.module.scss';
import SectionItem, { SectionType, SectionCallback } from './SectionItem';

interface Props {
  sections: SectionType[];
  currentSection: SectionType;
  onSectionChange: SectionCallback;
}

const SectionsList: React.FC<Props> = (props) => {

  const sectionClicked: SectionCallback = (sectionType: SectionType) => {
    props.onSectionChange(sectionType);
  }

  let sectionElements = Array<React.ReactNode>();
  props.sections.forEach( (sectionType) => {
    const name = SectionType[sectionType];
    const sectionItem = (<SectionItem key={sectionType} type={sectionType} title={name} onClick={sectionClicked} />);
    sectionElements.push(sectionItem);
  });

  return (<div className={styles.sections}>{sectionElements}</div>);
}

export default SectionsList;
