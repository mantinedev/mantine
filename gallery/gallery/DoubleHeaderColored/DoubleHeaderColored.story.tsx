import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DoubleHeaderColored } from './DoubleHeaderColored';

storiesOf('Gallery/DoubleHeaderColored', module).add('DoubleHeaderColored', () => (
  <GalleryStory attributes={attributes} component={DoubleHeaderColored} />
));
