import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_COLORS } from '../../theme';
import { Alert } from './Alert';

const getThemes = (props?: any) =>
  MANTINE_COLORS.map((color) => (
    <Alert key={color} color={color} {...props} style={{ marginTop: 20 }}>
      Alert body with {color} color, Sign fly semantics, soon as and was alphabet while in big had
      free a he a to of into the on slight them. To the had dreams, drunk.
    </Alert>
  ));

storiesOf('@mantine/core/Alert', module)
  .addDecorator((Story, props) => (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 50 }}>
      <Story {...props} />
    </div>
  ))
  .add('Colors', () => <>{getThemes({ title: 'Alert title' })}</>)
  .add('Without title', () => <>{getThemes({})}</>)
  .add('Content overflow', () => (
    <>
      <Alert title="Alert title that is too large and will definitely take more that one line to render">
        Alert body
      </Alert>

      <Alert
        classNames={{ title: 'hello', root: 'there' }}
        styles={{ root: { background: 'lightgray' }, title: { color: 'red' } }}
        title="AlertTitleWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout"
        style={{ marginTop: 20 }}
      >
        AlertBodyWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout
      </Alert>
    </>
  ));
