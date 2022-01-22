import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SwitchesCard } from './SwitchesCard';

storiesOf('Gallery/SwitchesCard', module).add('SwitchesCard', () => (
  <GalleryStory attributes={attributes} component={SwitchesCard} />
));
