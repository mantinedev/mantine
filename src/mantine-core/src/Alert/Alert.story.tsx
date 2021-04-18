import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Alert } from './Alert';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Alert key={color} color={color} {...props} style={{ marginTop: 20 }}>
      Alert body with {color} color, Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem, reiciendis?
    </Alert>
  ));

storiesOf('@mantine/core/Alert', module)
  .add('Themes', () => (
    <div style={{ maxWidth: 400, padding: 50 }}>{getThemes({ title: 'Alert title' })}</div>
  ))
  .add('Without title', () => <div style={{ maxWidth: 400, padding: 50 }}>{getThemes({})}</div>)
  .add('Content overflow', () => (
    <div style={{ maxWidth: 400, padding: 50 }}>
      <Alert title="Alert title that is too large and will definitely take more that one line to render">
        Alert body
      </Alert>

      <Alert
        title="AlertTitleWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout"
        style={{ marginTop: 20 }}
      >
        AlertBodyWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout
      </Alert>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <div style={{ maxWidth: 400, padding: 50 }}>
        {getThemes({ title: 'Alert title', themeOverride: { colorScheme: 'dark' } })}
        {getThemes({ themeOverride: { colorScheme: 'dark' } })}
      </div>
    </div>
  ));
