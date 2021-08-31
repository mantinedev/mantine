import React from 'react';
import { Link } from 'gatsby';
import { Title, Overlay, Group, Text, Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import useStyles from './GalleryBanner.styles';

interface GalleryBannerProps {
  componentsCount: number;
}

export function GalleryBanner({ componentsCount = 20 }: GalleryBannerProps) {
  const classes = useStyles();
  const [, scrollTo] = useWindowScroll();
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
        <Text className={classes.supTitle}>Mantine gallery</Text>
        <Title className={classes.title}>{componentsCount} premade components</Title>

        <Group className={classes.controls}>
          <Button className={classes.controlMain} onClick={() => scrollTo({ y: 700 })}>
            Browse everything
          </Button>
          <Button className={classes.controlSecondary} component={Link} to="/pages/gallery-faq/">
            FAQ
          </Button>
        </Group>
      </div>
      <div className={classes.image} />
    </div>
  );
}
