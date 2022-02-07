import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ButtonCopy } from './ButtonCopy';

storiesOf('Gallery/ButtonCopy', module).add('ButtonCopy', () => (
  <GalleryStory attributes={attributes} component={ButtonCopy} />
));
