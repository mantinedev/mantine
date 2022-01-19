import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { GridAsymmetrical } from './GridAsymmetrical';

storiesOf('Gallery/GridAsymmetrical', module).add('GridAsymmetrical', () => (
  <GalleryStory attributes={attributes} component={GridAsymmetrical} />
));
