import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FaqWithHeader } from './FaqWithHeader';

storiesOf('Gallery/FaqWithHeader', module).add('FaqWithHeader', () => (
  <GalleryStory attributes={attributes} component={FaqWithHeader} />
));
