import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { GetInTouch } from './GetInTouch';

storiesOf('Gallery/GetInTouch', module).add('GetInTouch', () => (
  <GalleryStory attributes={attributes} component={GetInTouch} />
));
