import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SplitButton } from './SplitButton';

storiesOf('Gallery/SplitButton', module).add('SplitButton', () => (
  <GalleryStory attributes={attributes} component={SplitButton} />
));
