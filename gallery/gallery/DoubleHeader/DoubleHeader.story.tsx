import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DoubleHeader } from './DoubleHeader';

storiesOf('Gallery/DoubleHeader', module).add('DoubleHeader', () => (
  <GalleryStory attributes={attributes} component={DoubleHeader} />
));
