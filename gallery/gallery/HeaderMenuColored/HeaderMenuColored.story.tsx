import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderMenuColored } from './HeaderMenuColored';

storiesOf('Gallery/HeaderMenuColored', module).add('HeaderMenuColored', () => (
  <GalleryStory attributes={attributes} component={HeaderMenuColored} />
));
