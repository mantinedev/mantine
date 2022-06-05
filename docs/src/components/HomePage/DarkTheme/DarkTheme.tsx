import React from 'react';
import { Button, Image, SimpleGrid, Text, useMantineColorScheme, Group } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { PageSection } from '../PageSection/PageSection';
import image from './dark-theme-image.png';
import useStyles from './DarkTheme.styles';

const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <App />
    </MantineProvider>
  );
}
`;

export function DarkTheme() {
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <PageSection title="Dark color scheme">
      <SimpleGrid
        cols={2}
        mt={30}
        spacing={60}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 30 }]}
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

          <Prism language="tsx" noCopy mt="xl">
            {code}
          </Prism>

          <Group position="center" mt="xl">
            <Button
              variant="default"
              radius="md"
              leftIcon={
                colorScheme === 'dark' ? (
                  <IconSun size={16} color={theme.colors.yellow[4]} />
                ) : (
                  <IconMoonStars size={16} color={theme.colors.blue[7]} />
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
