import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UserInfoIcons } from './UserInfoIcons';

storiesOf('Gallery/UserInfoIcons', module).add('UserInfoIcons', () => (
  <GalleryStory attributes={attributes} component={UserInfoIcons} />
));
