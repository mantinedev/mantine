import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderMiddle } from './HeaderMiddle';

storiesOf('Gallery/HeaderMiddle', module).add('HeaderMiddle', () => (
  <GalleryStory attributes={attributes} component={HeaderMiddle} />
));
