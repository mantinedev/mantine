import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ButtonMenu } from './ButtonMenu';

storiesOf('Gallery/ButtonMenu', module).add('ButtonMenu', () => (
  <GalleryStory attributes={attributes} component={ButtonMenu} />
));
