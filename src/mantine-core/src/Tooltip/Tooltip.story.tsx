import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';

storiesOf('@mantine/core/Tooltip', module)
  .add('General usage', () => (
    <div style={{ padding: 100 }}>
      <div>
        <Tooltip label="tooltip" position="left" placement="end" withArrow opened>
          <div style={{ height: 50, width: 200, background: 'red' }}>top-center</div>
        </Tooltip>
      </div>
      <div style={{ marginTop: 20 }}>
        <Tooltip label="tooltip" position="bottom">
          <div style={{ height: 50, width: 200 }}>bottom-center</div>
        </Tooltip>
      </div>
      <div style={{ marginTop: 20 }}>
        <Tooltip label="tooltip" position="left" opened>
          <div style={{ height: 50, width: 200 }}>left-center</div>
        </Tooltip>
      </div>
      <div style={{ marginTop: 20 }}>
        <Tooltip label="tooltip" position="right">
          <div style={{ height: 50, width: 200 }}>right-center</div>
        </Tooltip>
      </div>
    </div>
  ))
  .add('Large tooltip content', () => (
    <div style={{ padding: 100 }}>
      <Tooltip
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima ducimus, nobis numquam ea, iusto possimus repellat in debitis soluta molestiae facilis inventore aut rerum sequi quaerat! Sunt, quia minima."
        position="right"
        opened
        width={220}
      >
        <div style={{ height: 50, width: 200 }}>right-center</div>
      </Tooltip>
    </div>
  ))
  .add('With components', () => (
    <div style={{ padding: 100 }}>
      <Tooltip label="tooltip">
        <Button>Button</Button>
      </Tooltip>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      <div style={{ padding: 100 }}>
        <Tooltip label="tooltip" color="blue" themeOverride={{ colorScheme: 'dark' }}>
          <Button>Button</Button>
        </Tooltip>
      </div>
      <div style={{ padding: 100 }}>
        <Tooltip label="tooltip" themeOverride={{ colorScheme: 'dark' }}>
          <Button>Button</Button>
        </Tooltip>
      </div>
    </div>
  ));
