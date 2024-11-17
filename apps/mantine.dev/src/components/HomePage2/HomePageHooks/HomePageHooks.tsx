import Link from 'next/link';
import { SimpleGrid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Demo } from '@mantinex/demo';
import { HooksDemos, SliderDemos } from '@docs/demos';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageHooks.module.css';

interface DemoColumnProps {
  children: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function DemoColumn({ children, title, description, link }: DemoColumnProps) {
  return (
    <section className={classes.column}>
      <header className={classes.header}>
        <Title order={3} className={classes.title}>
          <Link href={link} className={classes.titleLink}>
            {title}
          </Link>
        </Title>

        <Text className={classes.description}>{description}</Text>
      </header>

      {children}
    </section>
  );
}

export function HomePageHooks() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Hooks library</HomePageTitle>
        <HomePageDescription>70+ hooks for</HomePageDescription>

        <SimpleGrid cols={{ md: 2 }} className={classes.demos} spacing="xl">
          <DemoColumn
            title="use-move"
            description="use-move hook handles move behavior over given element, can be used to build custom sliders"
            link="/hooks/use-move"
          >
            <Demo
              data={SliderDemos.customSlider}
              demoProps={{ defaultExpanded: false, maxCollapsedHeight: isMobile ? 150 : 428 }}
            />
          </DemoColumn>

          <DemoColumn
            title="use-resize-observer"
            description="use-resize-observer hook tracks element size and position changes"
            link="/hooks/use-resize-observer"
          >
            <Demo data={HooksDemos.useResizeObserverDemo} demoProps={{ defaultExpanded: false }} />
          </DemoColumn>

          <DemoColumn
            title="use-hotkeys"
            description="use-hotkeys hook allows binding keyboard shortcuts to actions"
            link="/hooks/use-hotkeys"
          >
            <Demo data={HooksDemos.useHotkeysDemoIndex} demoProps={{ defaultExpanded: false }} />
          </DemoColumn>

          <DemoColumn
            title="use-eye-dropper"
            description="use-eye-dropper hook allows picking colors from anywhere on the screen"
            link="/hooks/use-eye-dropper"
          >
            <Demo
              data={HooksDemos.useEyeDropperUsage}
              demoProps={{ defaultExpanded: false, maxCollapsedHeight: isMobile ? 150 : 204 }}
            />
          </DemoColumn>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
