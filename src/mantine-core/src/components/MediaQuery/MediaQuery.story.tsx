import React from 'react';
import { storiesOf } from '@storybook/react';
import { MediaQuery } from './MediaQuery';

storiesOf('@mantine/core/MediaQuery', module).add('General usage', () => (
  <>
    <MediaQuery smallerThan="md">
      <div style={{ background: 'silver', height: 100 }}>Smaller than md</div>
    </MediaQuery>
    <MediaQuery smallerThan="xl" largerThan="md">
      <div style={{ background: 'yellow', height: 100 }}>Larger than md, smaller than xl</div>
    </MediaQuery>
    <MediaQuery smallerThan={1200} largerThan={1000}>
      <div style={{ background: 'red', height: 100 }}>Larger than 1200, smaller than 1000</div>
    </MediaQuery>
    <MediaQuery largerThan="md">
      <div style={{ background: 'pink', height: 100 }}>Larger than md</div>
    </MediaQuery>
  </>
));
