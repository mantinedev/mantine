import { CodeBlockIcon, CodeIcon, NotePencilIcon, PlugIcon } from '@phosphor-icons/react';
import { SimpleGrid } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { StylesDemos } from '@docs/demos';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import {
  HomePageFeatures,
  HomePageFeaturesData,
} from '../shared/HomePageFeatures/HomePageFeatures';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageStyles.module.css';

const features: HomePageFeaturesData = [
  {
    icon: CodeIcon,
    title: 'Built with CSS',
    description:
      'Mantine styles are exposed as .css files – styles are performant and do not have any runtime overhead',
  },
  {
    icon: NotePencilIcon,
    title: 'Override anything',
    description:
      'All Mantine components support Styles API which allows to override any part of component styles with inline styles of classes',
  },
  {
    icon: CodeBlockIcon,
    title: 'PostCSS preset',
    description:
      'postcss-preset-mantine includes mixins and functions to apply dark/light, rtl and responsive styles',
  },
  {
    icon: PlugIcon,
    title: 'Compatible with any styling solution',
    description:
      'You can bring your own library to style Mantine components (Emotion, Vanilla Extract, Sass, etc.) – you are not limited to any specific tool',
  },
];

export function HomePageStyles() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <SimpleGrid cols={{ md: 2 }} spacing={50} verticalSpacing={30}>
          <div className={classes.column}>
            <div className={classes.main}>
              <HomePageTitle order={2}>Flexible styling</HomePageTitle>
              <HomePageDescription className={classes.description}>
                Mantine components are built with native CSS – styles are performant and easy to
                override
              </HomePageDescription>
              <HomePageLearnMore href="/styles/styles-overview/">
                Learn more about styles
              </HomePageLearnMore>

              <HomePageFeatures data={features} />
            </div>
          </div>
          <div className={classes.column}>
            <Demo data={StylesDemos.dataAttributes} />
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
