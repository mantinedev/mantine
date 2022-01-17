import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UsersTable } from './UsersTable';

storiesOf('Gallery/UsersTable', module).add('UsersTable', () => (
  <GalleryStory attributes={attributes} component={UsersTable} />
));
