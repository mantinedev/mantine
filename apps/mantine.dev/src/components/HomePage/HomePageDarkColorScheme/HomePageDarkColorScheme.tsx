import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { Button, Group, Image, SimpleGrid, useMantineColorScheme } from '@mantine/core';
import { MdxCodeHighlight } from '@/components/MdxProvider';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import demo from './images/new.webp';
import classes from './HomePageDarkColorScheme.module.css';

const code = `import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  );
}`;

export function HomePageDarkColorScheme() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Dark color scheme</HomePageTitle>

        <SimpleGrid cols={{ md: 2 }} spacing={50} verticalSpacing="xl" className={classes.demo}>
          <Image src={demo.src} className={classes.image} radius="md" />

          <div>
            <HomePageDescription className={classes.description}>
              Add dark theme to your application with just a few lines of code – Mantine exports
              global styles both for light and dark theme, all components support dark theme out of
              the box.
            </HomePageDescription>

            <MdxCodeHighlight code={code} language="tsx" />

            <Group justify="center" mt="xl">
              <Button
                variant="default"
                radius="md"
                onClick={() => toggleColorScheme()}
                leftSection={
                  <>
                    <IconSun className={classes.darkIcon} />
                    <IconMoonStars className={classes.lightIcon} />
                  </>
                }
              >
                Toggle color scheme
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
