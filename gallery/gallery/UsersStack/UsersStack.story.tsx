import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UsersStack } from './UsersStack';

storiesOf('Gallery/UsersStack', module).add('UsersStack', () => (
  <GalleryStory attributes={attributes} component={UsersStack} />
));
