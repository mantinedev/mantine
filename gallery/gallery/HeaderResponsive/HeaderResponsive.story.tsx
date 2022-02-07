import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderResponsive } from './HeaderResponsive';

storiesOf('Gallery/HeaderResponsive', module).add('HeaderResponsive', () => (
  <GalleryStory attributes={attributes} component={HeaderResponsive} />
));
