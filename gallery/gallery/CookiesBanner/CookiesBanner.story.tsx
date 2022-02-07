import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CookiesBanner } from './CookiesBanner';

storiesOf('Gallery/CookiesBanner', module).add('CookiesBanner', () => (
  <GalleryStory attributes={attributes} component={CookiesBanner} />
));
