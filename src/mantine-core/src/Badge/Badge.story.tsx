import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Badge } from './Badge';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Badge key={color} color={color} {...props}>
      {color}
    </Badge>
  ));

storiesOf('@mantine/core/Badge', module)
  .add('Themes', () => (
    <>
      <ElementsGroup style={{ padding: 10 }}>{getThemes()}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'outline' })}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'filled' })}</ElementsGroup>
    </>
  ))
  .add('Overflow', () => (
    <div style={{ width: 140, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Badge with overflow</Badge>
      <Badge fullWidth variant="filled" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
    </div>
  ));
