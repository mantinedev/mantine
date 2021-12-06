import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DropzoneButton } from './DropzoneButton';

storiesOf('Gallery/DropzoneButton', module).add('DropzoneButton', () => (
  <GalleryStory attributes={attributes} component={DropzoneButton} />
));
