import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { Button, Group, Image, SimpleGrid, Text, useMantineColorScheme } from '@mantine/core';
import { CodeHighlight } from '@mantinex/shiki';
import { PageSection } from '../PageSection/PageSection';
import image from './dark-theme-image.png';
import classes from './DarkTheme.module.css';

export function DarkTheme() {
  const { toggleColorScheme } = useMantineColorScheme();

  const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  );
}
`;

  return (
    <PageSection title="Dark color scheme" alt>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt={30} spacing={{ base: 30, sm: 60 }} pb={60}>
        <div>
          <Image src={image.src} alt="Dark and light theme" radius="md" className={classes.image} />
        </div>
        <div>
          <Text size="lg">
            Add dark theme to your application with just a few lines of code – Mantine exports
            global styles both for light and dark theme, all components support dark theme out of
            the box.
          </Text>

          <CodeHighlight
            language="tsx"
            withCopyButton={false}
            mt="xl"
            code={code}
            className={classes.codeHighlight}
          />

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
    </PageSection>
  );
}
