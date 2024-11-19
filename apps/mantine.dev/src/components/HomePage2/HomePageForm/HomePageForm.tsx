import { IconBalloon, IconGauge, IconPuzzle, IconRocket } from '@tabler/icons-react';
import { SimpleGrid } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { FormDemos } from '@docs/demos';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import {
  HomePageFeatures,
  HomePageFeaturesData,
} from '../shared/HomePageFeatures/HomePageFeatures';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageForm.module.css';

const features: HomePageFeaturesData = [
  {
    icon: IconPuzzle,
    title: 'Seamless integration',
    description: 'useForm hook works out of the box with all Mantine inputs',
  },
  {
    icon: IconGauge,
    title: 'Excellent performance',
    description:
      'useForm rerenders only for validation and status changes, usually only 2-3 times per form lifecycle',
  },
  {
    icon: IconBalloon,
    title: 'Lightweight',
    description: '6.3kb minified + gzipped, no dependencies except React',
  },
  {
    icon: IconRocket,
    title: 'Fully featured',
    description:
      'useForm supports lists and nested objects, multiple validation approaches (including schema based with zod) and an easy way to manage subscriptions to values updates',
  },
];

export function HomePageForm() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <SimpleGrid cols={{ md: 2 }} spacing={50} verticalSpacing={30}>
          <div className={classes.column} data-primary>
            <div className={classes.main}>
              <HomePageTitle order={2}>Form library</HomePageTitle>
              <HomePageDescription className={classes.description}>
                @mantine/form – performant form library designed for Mantine components. Works out
                of the box with all Mantine inputs.
              </HomePageDescription>
              <HomePageLearnMore href="/form/package">Explore all form features</HomePageLearnMore>

              <HomePageFeatures data={features} />
            </div>
          </div>
          <div className={classes.column}>
            <Demo data={FormDemos.usage} />
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
