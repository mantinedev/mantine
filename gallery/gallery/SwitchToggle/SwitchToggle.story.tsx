import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SwitchToggle } from './SwitchToggle';

storiesOf('Gallery/SwitchToggle', module).add('SwitchToggle', () => (
  <GalleryStory attributes={attributes} component={SwitchToggle} />
));
