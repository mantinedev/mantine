import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderAction } from './HeaderAction';

storiesOf('Gallery/HeaderAction', module).add('HeaderAction', () => (
  <GalleryStory attributes={attributes} component={HeaderAction} />
));
