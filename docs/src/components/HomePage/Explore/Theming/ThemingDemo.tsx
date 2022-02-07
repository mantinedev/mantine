import React from 'react';
import { Prism } from '@mantine/prism';
import {
  Group,
  Button,
  Badge,
  MantineProvider,
  useMantineTheme,
  createStyles,
} from '@mantine/core';

const code = `
import { Badge, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Greycliff CF, sans-serif',
      colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }}>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>
    </MantineProvider>
  );
}
`.trim();

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 30,
      paddingBottom: 30,
    },

    '& .mantine-ScrollArea-viewport': {
      borderRadius: theme.radius.md,
    },

    '& .mantine-ScrollArea-root': {
      marginTop: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    },
  },
}));

export function ThemingDemo() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <>
      <MantineProvider
        theme={{
          colorScheme: theme.colorScheme,
          fontFamily: 'Greycliff CF, sans-serif',
          colors: {
            'ocean-blue': [
              '#7AD1DD',
              '#5FCCDB',
              '#44CADC',
              '#2AC9DE',
              '#1AC2D9',
              '#11B7CD',
              '#09ADC3',
              '#0E99AC',
              '#128797',
              '#147885',
            ],
            'bright-pink': [
              '#F0BBDD',
              '#ED9BCF',
              '#EC7CC3',
              '#ED5DB8',
              '#F13EAF',
              '#F71FA7',
              '#FF00A1',
              '#E00890',
              '#C50E82',
              '#AD1374',
            ],
          },
        }}
      >
        <Group position="center">
          <Button color="ocean-blue">Ocean blue button</Button>
          <Badge color="bright-pink" variant="filled" size="lg" style={{ lineHeight: 1 }}>
            Bright pink badge
          </Badge>
        </Group>
      </MantineProvider>

      <Prism noCopy language="tsx" className={classes.prism}>
        {code}
      </Prism>
    </>
  );
}
