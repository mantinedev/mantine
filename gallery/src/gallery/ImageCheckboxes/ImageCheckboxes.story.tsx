import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageCheckboxes } from './ImageCheckboxes';

storiesOf('Gallery/ImageCheckbox', module).add('ImageCheckbox', () => (
  <GalleryStory attributes={attributes} component={ImageCheckboxes} />
));
