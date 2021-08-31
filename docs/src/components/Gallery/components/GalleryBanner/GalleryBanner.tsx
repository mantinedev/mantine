import React from 'react';
import { Title, Overlay } from '@mantine/core';
import useStyles from './GalleryBanner.styles';

interface GalleryBannerProps {
  componentsCount: number;
}

export function GalleryBanner({ componentsCount = 20 }: GalleryBannerProps) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Overlay
        gradient="linear-gradient(45deg, #141844 25%, rgba(0, 0, 0, 0) 95%)"
        opacity={0.2}
        zIndex={0}
      />
      <Overlay
        gradient="linear-gradient(0deg, #141844 25%, rgba(0, 0, 0, 0) 95%)"
        zIndex={0}
        opacity={0.75}
      />
      <div className={classes.body}>
        <Title className={classes.title}>{componentsCount}+ premade components</Title>
      </div>
      <div className={classes.image} />
    </div>
  );
}
