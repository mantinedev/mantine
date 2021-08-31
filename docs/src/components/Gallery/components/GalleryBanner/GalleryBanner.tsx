import React from 'react';
import { Link } from 'gatsby';
import { Title, Overlay, Group, Text, Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import useStyles from './GalleryBanner.styles';

interface GalleryBannerProps {
  componentsCount: number;
}

export function GalleryBanner({ componentsCount }: GalleryBannerProps) {
  const classes = useStyles();
  const [, scrollTo] = useWindowScroll();
  return (
    <div className={classes.wrapper}>
      <div className={classes.image} />
      <Overlay
        gradient="linear-gradient(45deg, #0d1138 25%, rgba(0, 0, 0, 0) 95%)"
        opacity={0.5}
        zIndex={1}
      />

      <div className={classes.body}>
        <Text className={classes.supTitle}>Mantine gallery</Text>
        <Title className={classes.title}>
          <span className={classes.highlight}>{componentsCount}+ responsive components</span>
          <br /> built with Mantine
        </Title>

        <Group className={classes.controls}>
          <Button className={classes.controlMain} onClick={() => scrollTo({ y: 700 })}>
            Browse everything
          </Button>
          <Button className={classes.controlSecondary} component={Link} to="/pages/gallery-faq/">
            FAQ
          </Button>
        </Group>
      </div>
    </div>
  );
}
