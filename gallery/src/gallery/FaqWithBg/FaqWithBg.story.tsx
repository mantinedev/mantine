import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FaqWithBg } from './FaqWithBg';

storiesOf('Gallery/FaqWithBg', module).add('FaqWithBg', () => (
  <GalleryStory attributes={attributes} component={FaqWithBg} />
));
