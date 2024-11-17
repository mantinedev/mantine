import { SimpleGrid } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { HooksDemos, SliderDemos } from '@docs/demos';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageHooks.module.css';

// use-resize-observer
// use-move
// use-hotkeys
// use-click-outside
// use-local-storage
// use-clipboard
// use-eye-dropper

export function HomePageHooks() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Hooks library</HomePageTitle>
        <HomePageDescription className={classes.description}>70+ hooks for</HomePageDescription>

        <SimpleGrid cols={{ md: 2 }}>
          <div className={classes.column}>
            <Demo data={SliderDemos.customSlider} demoProps={{ defaultExpanded: false }} />
          </div>
          <div className={classes.column}>
            <Demo data={HooksDemos.useResizeObserverDemo} demoProps={{ defaultExpanded: false }} />
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
