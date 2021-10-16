import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SocialButtons } from './SocialButtons';

storiesOf('Gallery/SocialButtons', module).add('SocialButtons', () => (
  <GalleryStory attributes={attributes} component={SocialButtons} />
));
