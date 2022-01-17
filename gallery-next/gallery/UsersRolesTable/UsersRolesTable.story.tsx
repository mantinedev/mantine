import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { UsersRolesTable } from './UsersRolesTable';

storiesOf('Gallery/UsersRolesTable', module).add('UsersRolesTable', () => (
  <GalleryStory attributes={attributes} component={UsersRolesTable} />
));
