import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderMenu } from './HeaderMenu';

storiesOf('Gallery/HeaderMenu', module).add('HeaderMenu', () => (
  <GalleryStory attributes={attributes} component={HeaderMenu} />
));
