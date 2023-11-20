import React from 'react';
import { FrameworkLink } from './FrameworkLink/FrameworkLink';
import { FRAMEWORKS_GUIDES_DATA } from './data';
import classes from './FrameworksGuides.module.css';

export function FrameworksGuides() {
  const frameworks = FRAMEWORKS_GUIDES_DATA.map((framework) => (
    <FrameworkLink key={framework.name} data={framework} />
  ));

  return <div className={classes.root}>{frameworks}</div>;
}
