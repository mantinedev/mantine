import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { Divider } from './Divider';
import { Badge } from '../Badge/Badge';
import { Text } from '../Text/Text';

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 10] as const).map((size) => (
  <Divider style={{ marginTop: 15 }} size={size} key={size} />
));

const getColors = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('@mantine/core/Divider', module)
  .add('General usage', () => (
    <div style={{ padding: 20 }}>
      <Divider />
      <Divider variant="dotted" style={{ marginTop: 15 }} />
      <Divider variant="dashed" style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Divider themeOverride={{ colorScheme: 'dark' }} />
      <Divider themeOverride={{ colorScheme: 'dark' }} variant="dotted" style={{ marginTop: 15 }} />
      <Divider themeOverride={{ colorScheme: 'dark' }} variant="solid" style={{ marginTop: 15 }} />
      {getColors({ themeOverride: { colorScheme: 'dark' } })}
    </div>
  ))
  .add('Vertical Divider', () => (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}
      >
        <Badge>Light</Badge>
        <Divider orientation="vertical" />
        <Badge>Outline</Badge>
        <Divider orientation="vertical" />
        <Badge>Filled</Badge>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}
      >
        <Text>Light</Text>
        <Divider orientation="vertical" />
        <Text>Outline</Text>
        <Divider orientation="vertical" />
        <Text>Filled</Text>
      </div>
    </div>
  ))
  .add('With label', () => (
    <div style={{ padding: 20 }}>
      <Divider label="Label" />
      <Divider label="Label center" labelPosition="center" />
      <Divider label="Label right" labelPosition="right" />
    </div>
  ));
