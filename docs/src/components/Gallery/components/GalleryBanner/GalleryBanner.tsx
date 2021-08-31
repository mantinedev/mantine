import React from 'react';
import { Link } from 'gatsby';
import { Title, Overlay, Group, Text, Button, ThemeIcon, SimpleGrid } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import data from './data';
import useStyles from './GalleryBanner.styles';

interface GalleryBannerProps {
  componentsCount: number;
}

export function GalleryBanner({ componentsCount }: GalleryBannerProps) {
  const classes = useStyles();
  const [, scrollTo] = useWindowScroll();

  const features = data.map((feature) => (
    <div>
      <ThemeIcon className={classes.featureIcon} size={44}>
        <feature.icon size={20} />
      </ThemeIcon>

      <div className={classes.featureBody}>
        <Text className={classes.featureTitle}>{feature.title}</Text>
        <Text className={classes.featureDescription}>{feature.description}</Text>
      </div>
    </div>
  ));

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

        <Text className={classes.description}>
          Build websites even faster with over {componentsCount}+ fully responsive components
          designed and built by Mantine maintainers and community. All components are free forever
          for everyone.
        </Text>

        <Group className={classes.controls}>
          <Button className={classes.controlMain} onClick={() => scrollTo({ y: 700 })}>
            Browse everything
          </Button>
          <Button className={classes.controlSecondary} component={Link} to="/pages/gallery-faq/">
            FAQ
          </Button>
        </Group>

        <SimpleGrid cols={3} spacing="xl" className={classes.features} style={{ marginTop: 110 }}>
          {features}
        </SimpleGrid>
      </div>
    </div>
  );
}
