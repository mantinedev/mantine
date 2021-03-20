import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Code } from './Code';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <div key={color} style={{ padding: 5 }}>
      <Code color={color} {...props}>
        React.createElement();
      </Code>
    </div>
  ));

storiesOf('@mantine/core/Code', module).add('Themes', () => (
  <div style={{ padding: 15 }}>{getThemes()}</div>
));
