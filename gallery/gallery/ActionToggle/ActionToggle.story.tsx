import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ActionToggle } from './ActionToggle';

storiesOf('Gallery/ActionToggle', module).add('ActionToggle', () => (
  <GalleryStory attributes={attributes} component={ActionToggle} />
));
