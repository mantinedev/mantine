import React from 'react';
import useStyles from './DocsSection.styles';

interface DocsSectionProps {
  children: React.ReactNode;
}

export default function DocsSection({ children }: DocsSectionProps) {
  const { classes } = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
}
