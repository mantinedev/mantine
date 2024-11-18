import { IconBalloon, IconGauge, IconPuzzle, IconRocket } from '@tabler/icons-react';
import { SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { FormDemos } from '@docs/demos';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageForm.module.css';

const features: FormFeatureProps[] = [
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

interface FormFeatureProps {
  icon: typeof IconPuzzle;
  title: string;
  description: string;
}

function FormFeature({ icon: Icon, title, description }: FormFeatureProps) {
  return (
    <section className={classes.feature}>
      <ThemeIcon className={classes.featureIcon} size={50} radius="md">
        <Icon size={30} stroke={1.5} />
      </ThemeIcon>
      <div>
        <Text component="h3" className={classes.featureTitle}>
          {title}
        </Text>

        <Text className={classes.featureDescription}>{description}</Text>
      </div>
    </section>
  );
}

export function HomePageForm() {
  const items = features.map((feature, index) => <FormFeature key={index} {...feature} />);

  return (
    <section className={classes.root}>
      <HomePageContainer>
        <SimpleGrid cols={{ md: 2 }}>
          <div className={classes.column} data-primary>
            <div className={classes.main}>
              <HomePageTitle order={2}>Form library</HomePageTitle>
              <HomePageDescription className={classes.description}>
                @mantine/form – performant form library designed for Mantine components. Works out
                of the box with all Mantine inputs.
              </HomePageDescription>
              <HomePageLearnMore href="/form/package">Explore all form features</HomePageLearnMore>

              <div className={classes.features}>{items}</div>
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
