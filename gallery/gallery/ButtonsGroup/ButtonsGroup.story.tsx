import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ButtonsGroup } from './ButtonsGroup';

storiesOf('Gallery/ButtonsGroup', module).add('ButtonsGroup', () => (
  <GalleryStory attributes={attributes} component={ButtonsGroup} />
));
