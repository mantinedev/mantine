import React from 'react';
import { Button, Image, SimpleGrid, Text, useMantineColorScheme, Group, rem } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { PageSection } from '../PageSection/PageSection';
import image from './dark-theme-image.png';
import useStyles from './DarkTheme.styles';

export function DarkTheme() {
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ colorScheme: '${colorScheme}' }}>
      <App />
    </MantineProvider>
  );
}
`;

  return (
    <PageSection
      title="Dark color scheme"
      sx={{ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white }}
    >
      <SimpleGrid
        cols={2}
        mt={30}
        spacing={60}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 30 }]}
        pb={60}
      >
        <div>
          <Image src={image} radius="md" className={classes.image} />
        </div>
        <div>
          <Text size="lg">
            Add dark theme to your application with just a few lines of code – Mantine exports
            global styles both for light and dark theme, all components support dark theme out of
            the box.
          </Text>

          <Prism
            language="tsx"
            noCopy
            mt="xl"
            radius="md"
            styles={{
              code: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
              },
            }}
          >
            {code}
          </Prism>

          <Group position="center" mt="xl">
            <Button
              variant="default"
              radius="md"
              leftIcon={
                colorScheme === 'dark' ? (
                  <IconSun size={rem(16)} color={theme.colors.yellow[4]} />
                ) : (
                  <IconMoonStars size={rem(16)} color={theme.colors.blue[7]} />
                )
              }
              onClick={() => toggleColorScheme()}
            >
              Toggle color scheme
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </PageSection>
  );
}
