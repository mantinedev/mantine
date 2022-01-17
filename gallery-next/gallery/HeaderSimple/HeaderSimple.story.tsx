import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderSimple } from './HeaderSimple';

storiesOf('Gallery/HeaderSimple', module).add('HeaderSimple', () => (
  <GalleryStory attributes={attributes} component={HeaderSimple} />
));
