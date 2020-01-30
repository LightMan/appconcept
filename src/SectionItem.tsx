import React from 'react';
import styles from './SectionItem.module.scss';

export type SectionCallback = () => void;

interface Props {
  onClick: SectionCallback;
}

const SectionItem: React.FC<Props> = (props) => {
  return (
    <h2 className={styles.sectionItem} onClick={props.onClick}>{props.children}</h2>
  );
}

export default SectionItem;
