import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { Subgrid } from './Subgrid';

storiesOf('Gallery/Subgrid', module).add('Subgrid', () => (
  <GalleryStory attributes={attributes} component={Subgrid} />
));
