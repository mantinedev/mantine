import React from 'react';
import { storiesOf } from '@storybook/react';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Avatar } from './Avatar';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => <Avatar key={size} size={size} {...props} />);

const image =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

storiesOf('@mantine/core/Avatar', module)
  .add('Sizes', () => <ElementsGroup>{getSizes({ src: image, radius: 'xl' })}</ElementsGroup>)
  .add('Broken link', () => <ElementsGroup>{getSizes({ src: null, radius: 'xl' })}</ElementsGroup>)
  .add('Overlay', () => (
    <ElementsGroup spacing={-10}>
      {getSizes({ size: 'md', src: image, radius: 'xl' })}
    </ElementsGroup>
  ));
