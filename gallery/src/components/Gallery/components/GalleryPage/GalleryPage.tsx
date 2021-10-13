import React from 'react';
import useStyles from './GalleryPage.styles';

interface GalleryPageProps {
  children: React.ReactNode;
}

export function GalleryPage({ children }: GalleryPageProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
