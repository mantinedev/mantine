import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UserCardImage } from './UserCardImage';

storiesOf('Gallery/UserCardImage', module).add('UserCardImage', () => (
  <GalleryStory attributes={attributes} component={UserCardImage} />
));
