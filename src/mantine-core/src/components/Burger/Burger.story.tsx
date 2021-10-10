import React from 'react';
import { storiesOf } from '@storybook/react';
import { WrappedBurger } from './demos/WrappedBurger';

const getThemes = (props?: any) =>
  ['#fff', '#fe6734'].map((color) => <WrappedBurger key={color} color={color} {...props} />);

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 80, 120] as const).map((size) => (
  <WrappedBurger size={size} key={size} />
));

storiesOf('@mantine/core/Burger', module)
  .add('Themes', () => <div style={{ display: 'flex' }}>{getThemes()}</div>)
  .add('Sizes', () => <div style={{ display: 'flex' }}>{sizes}</div>);
