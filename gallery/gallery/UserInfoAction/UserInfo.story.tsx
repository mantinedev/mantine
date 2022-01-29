import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UserInfoAction } from './UserInfoAction';

storiesOf('Gallery/UserInfoAction', module).add('UserInfoAction', () => (
  <GalleryStory attributes={attributes} component={UserInfoAction} />
));
