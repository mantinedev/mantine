import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { LanguagePicker } from './LanguagePicker';

storiesOf('Gallery/LanguagePicker', module).add('LanguagePicker', () => (
  <GalleryStory attributes={attributes} component={LanguagePicker} />
));
