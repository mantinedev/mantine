import React from 'react';
import {
  Group,
  Button,
  Badge,
  Switch,
  MantineProvider,
  useMantineColorScheme,
} from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const code = `import { Badge, Button, MantineProvider, Switch } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0', '#7189EA', '#4968E4', '#2147DE', '#1A39B2', '#142B85', '#0D1D59', '#070E2C'],
        asphalt: ['#F0F4F5', '#D4E0E2', '#B9CCD0', '#9EB8BD', '#82A4AB', '#679098', '#52747A', '#3E575B', '#293A3D', '#151D1E']
      },
    }}>
      <Button color="deep-blue">Deep blue button</Button>

      <Badge color="asphalt" variant="filled">
        Asphalt badge
      </Badge>

      <Switch
        color="deep-blue"
        label="Deep blue switch"
        defaultChecked
      />
    </MantineProvider>
  );
}`;

export function ThemeColorExtendDemo() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <CodeDemo code={code} language="tsx">
      <MantineProvider
        theme={{
          colorScheme,
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
        <Group position="center">
          <Button color="deep-blue">Deep blue button</Button>
          <Badge color="asphalt" variant="filled">
            Asphalt badge
          </Badge>
          <Switch
            color="deep-blue"
            label="Deep blue switch"
            defaultChecked
            wrapperProps={{ 'data-mantine-composable': true }}
          />
        </Group>
      </MantineProvider>
    </CodeDemo>
  );
}
