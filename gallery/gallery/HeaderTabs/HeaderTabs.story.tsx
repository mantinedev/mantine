import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderTabs } from './HeaderTabs';

storiesOf('Gallery/HeaderTabs', module).add('HeaderTabs', () => (
  <GalleryStory attributes={attributes} component={HeaderTabs} />
));
