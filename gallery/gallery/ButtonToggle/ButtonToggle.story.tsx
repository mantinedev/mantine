import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ButtonToggle } from './ButtonToggle';

storiesOf('Gallery/ButtonToggle', module).add('ButtonToggle', () => (
  <GalleryStory attributes={attributes} component={ButtonToggle} />
));
