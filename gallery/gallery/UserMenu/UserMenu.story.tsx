import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UserMenu } from './UserMenu';

storiesOf('Gallery/UserMenu', module).add('UserMenu', () => (
  <GalleryStory attributes={attributes} component={UserMenu} />
));
