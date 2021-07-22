import React from 'react';
import { Prism } from '@mantine/prism';
import { Group, Button, Badge, Text, MantineProvider, useMantineTheme } from '@mantine/core';
import { LinkTitle } from './LinkTitle';

const code = `
import React from 'react';
import { Badge, Button, Text, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      colors: {
        'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0', '#7189EA', '#4968E4', '#2147DE', '#1A39B2', '#142B85', '#0D1D59', '#070E2C'],
        asphalt: ['#F0F4F5', '#D4E0E2', '#B9CCD0', '#9EB8BD', '#82A4AB', '#679098', '#52747A', '#3E575B', '#293A3D', '#151D1E']
      },
    }}>
      <Button color="deep-blue">Deep blue button</Button>
      <Badge color="asphalt" variant="filled">Asphalt badge</Badge>
      <Text themeOverride={{ fontFamily: 'Dosis, sans-serif' }}>Dosis text</Text>
    </MantineProvider>
  );
}
`.trim();

export function ThemingDemo() {
  const theme = useMantineTheme();

  return (
    <>
      <LinkTitle
        title="Extend theme with additional values"
        link="/theming/extend-theme/"
        label="Learn more"
        description="Customize theme for entire application with MantineProvider or override it per component with themeOverride prop"
      />

      <MantineProvider
        theme={{
          colorScheme: theme.colorScheme,
          fontFamily: 'Verdana, sans-serif',
          colors: {
            'deep-blue': [
              '#E9EDFC',
              '#C1CCF6',
              '#99ABF0',
              '#7189EA',
              '#4968E4',
              '#2147DE',
              '#1A39B2',
              '#142B85',
              '#0D1D59',
              '#070E2C',
            ],
            asphalt: [
              '#F0F4F5',
              '#D4E0E2',
              '#B9CCD0',
              '#9EB8BD',
              '#82A4AB',
              '#679098',
              '#52747A',
              '#3E575B',
              '#293A3D',
              '#151D1E',
            ],
          },
        }}
      >
        <Group style={{ marginTop: 10 }}>
          <Button color="deep-blue">Dark blue button</Button>
          <Badge color="asphalt" variant="filled">
            Asphalt badge
          </Badge>
          <Text themeOverride={{ fontFamily: 'Dosis, sans-serif' }}>Dosis text</Text>
        </Group>
      </MantineProvider>

      <Prism noCopy language="tsx" style={{ marginTop: 15 }}>
        {code}
      </Prism>
    </>
  );
}
