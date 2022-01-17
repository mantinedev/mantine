import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { InputTooltip } from './InputTooltip';

storiesOf('Gallery/InputTooltip', module).add('InputTooltip', () => (
  <GalleryStory attributes={attributes} component={InputTooltip} />
));
