import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UserButton } from './UserButton';

storiesOf('Gallery/UserButton', module).add('UserButton', () => (
  <GalleryStory attributes={attributes} component={UserButton} />
));
