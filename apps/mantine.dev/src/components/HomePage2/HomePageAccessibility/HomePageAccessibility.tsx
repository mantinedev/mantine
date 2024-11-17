import { IconAccessible } from '@tabler/icons-react';
import { Text } from '@mantine/core';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageAccessibility.module.css';

export function HomePageAccessibility() {
  return (
    <section className={classes.root}>
      <HomePageContainer className={classes.container}>
        <IconAccessible size={600} className={classes.icon} stroke={1.8} />

        <HomePageTitle order={2}>Accessible out of the box</HomePageTitle>

        <HomePageDescription className={classes.description}>
          All Mantine components follow WAI-ARIA guidelines, support keyboard navigation, manage
          focus properly and are tested with a screen reader.
        </HomePageDescription>

        <HomePageLearnMore href="/">Learn more about accessibility in Mantine</HomePageLearnMore>

        <Text mt="xl">
          Here will be an example that shows how to interact with components using keyboard.
          Possible components: Accordion, Tabs, MultiSelect, SegmentedControl, Radio.Card.
        </Text>
      </HomePageContainer>
    </section>
  );
}
