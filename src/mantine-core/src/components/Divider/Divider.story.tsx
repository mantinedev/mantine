import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Divider } from './Divider';
import { Badge } from '../Badge/Badge';
import { Group } from '../Group/Group';
import { Text } from '../Text/Text';
import { DarkStory } from '../../../demos';

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
  .add('Vertical Divider', () => (
    <div>
      <Group>
        <Badge>Light</Badge>
        <Divider orientation="vertical" mx={10} />
        <Badge>Outline</Badge>
        <Divider orientation="vertical" />
        <Badge>Filled</Badge>
      </Group>
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
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 20 }}>
        <Divider label="Label" />
        <Divider label="Label center" labelPosition="center" />
        <Divider label="Label right" labelPosition="right" />

        {getColors()}
      </div>
    </DarkStory>
  ));
