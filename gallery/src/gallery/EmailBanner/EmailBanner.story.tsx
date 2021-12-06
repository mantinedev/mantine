import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { EmailBanner } from './EmailBanner';

storiesOf('Gallery/EmailBanner', module).add('EmailBanner', () => (
  <GalleryStory attributes={attributes} component={EmailBanner} />
));
