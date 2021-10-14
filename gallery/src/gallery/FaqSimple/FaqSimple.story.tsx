import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FaqSimple } from './FaqSimple';

storiesOf('Gallery/FaqSimple', module).add('FaqSimple', () => (
  <GalleryStory attributes={attributes} component={FaqSimple} />
));
