import React from 'react';
import styles from './SectionItem.module.scss';

export enum SectionType {
  none, what, who, where, how, why
}

export type SectionCallback = (section: SectionType) => void;

interface Props {
  type: SectionType;
  title: string;  
  onClick: SectionCallback;
}

const SectionItem: React.FC<Props> = (props) => {
  return (
    <h1 className={styles.sectionItem}
    onClick={ () => { props.onClick(props.type)} }> {props.title}</h1 >
  );
}

export default SectionItem;
