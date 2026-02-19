import { useRef } from 'react';
import { CheckIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Carousel } from '@mantine/carousel';
import { Button, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { TipTapDemos } from '@docs/demos';
import { searchHandlers } from '@/components/Search';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageExtensions.module.css';

const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

interface ExtensionDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ExtensionDemo({ title, description, children }: ExtensionDemoProps) {
  return (
    <section className={classes.demo}>
      <header className={classes.demoHeader}>
        <Title order={3} className={classes.demoTitle}>
          {title}
        </Title>
        <Text className={classes.demoDescription}>{description}</Text>
      </header>

      <div className={classes.demoArea}>{children}</div>
    </section>
  );
}

export function HomePageExtensions() {
  const RichText = TipTapDemos.usage.component as any;
  const timeoutRef = useRef<number>(-1);

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} radius="md" />
    </Carousel.Slide>
  ));

  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Extensions</HomePageTitle>

        <HomePageDescription className={classes.description}>
          Extensions are additional packages that provide extra functionality to Mantine, such as
          rich text editor, notifications system, charts, modals manager and more. They are built to
          be easily integrated into your application and provide a seamless experience.
        </HomePageDescription>

        <HomePageLearnMore href="/x/extensions">Browse all extensions</HomePageLearnMore>

        <SimpleGrid cols={{ md: 2 }} className={classes.grid} verticalSpacing={30}>
          <ExtensionDemo title="Rich text editor" description="TipTap based rich text editor">
            <RichText stickyOffset={56} />
          </ExtensionDemo>

          <div>
            <Stack>
              <ExtensionDemo
                title="Notifications system"
                description="Show/update/hide notifications at any part of your application"
              >
                <Group justify="center">
                  <Button
                    className={classes.demoControl}
                    variant="default"
                    radius="md"
                    size="lg"
                    onClick={() => {
                      window.clearTimeout(timeoutRef.current);
                      const id = notifications.show({
                        id: 'home-page-demo',
                        withBorder: true,
                        loading: true,
                        title: 'Loading your data',
                        radius: 'md',
                        message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                        autoClose: false,
                        withCloseButton: false,
                      });

                      timeoutRef.current = window.setTimeout(() => {
                        notifications.update({
                          id,
                          color: 'teal',
                          withBorder: true,
                          title: 'Data was loaded',
                          radius: 'md',
                          message:
                            'Notification will close in 2 seconds, you can close this notification now',
                          icon: <CheckIcon size={18} />,
                          loading: false,
                          autoClose: 2000,
                        });
                      }, 3000);
                    }}
                  >
                    Show notification
                  </Button>
                </Group>
              </ExtensionDemo>

              <ExtensionDemo
                title="Spotlight"
                description="Ctrl + K command palette, can be used for search or common actions"
              >
                <Group justify="center">
                  <Button
                    className={classes.demoControl}
                    size="lg"
                    radius="md"
                    variant="default"
                    onClick={searchHandlers.open}
                    rightSection={
                      <MagnifyingGlassIcon size={20} color="var(--mantine-color-dimmed)" />
                    }
                    miw={300}
                    justify="space-between"
                  >
                    Open search spotlight
                  </Button>
                </Group>
              </ExtensionDemo>

              <ExtensionDemo title="Carousel" description="Embla based carousel component">
                <Carousel
                  withIndicators
                  emblaOptions={{ loop: true }}
                  classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                  }}
                >
                  {slides}
                </Carousel>
              </ExtensionDemo>
            </Stack>
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
