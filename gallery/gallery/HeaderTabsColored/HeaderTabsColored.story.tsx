import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderTabsColored } from './HeaderTabsColored';

storiesOf('Gallery/HeaderTabsColored', module).add('HeaderTabsColored', () => (
  <GalleryStory attributes={attributes} component={HeaderTabsColored} />
));
