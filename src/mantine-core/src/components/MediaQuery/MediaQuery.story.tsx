import React from 'react';
import { storiesOf } from '@storybook/react';
import { MediaQuery } from './MediaQuery';

const hide = { display: 'none' };

storiesOf('@mantine/core/MediaQuery', module)
  .add('General usage', () => (
    <>
      <MediaQuery smallerThan="md" styles={hide}>
        <div style={{ background: 'silver', height: 100 }}>Smaller than md</div>
      </MediaQuery>
      <MediaQuery smallerThan="xl" largerThan="md" styles={hide}>
        <div style={{ background: 'yellow', height: 100 }}>Larger than md, smaller than xl</div>
      </MediaQuery>
      <MediaQuery smallerThan={1200} largerThan={1000} styles={hide}>
        <div style={{ background: 'red', height: 100 }}>Larger than 1200, smaller than 1000</div>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={hide}>
        <div style={{ background: 'pink', height: 100 }}>Larger than md</div>
      </MediaQuery>
    </>
  ))
  .add('Custom styles', () => (
    <MediaQuery smallerThan="md" styles={{ background: 'red' }}>
      <div style={{ height: 100 }}>Smaller than md</div>
    </MediaQuery>
  ))
  .add('Custom query', () => (
    <MediaQuery query="(max-width: 1200px) and (min-width: 800px)" styles={{ background: 'red' }}>
      <div style={{ height: 100 }}>(max-width: 1200px) and (min-width: 800px)</div>
    </MediaQuery>
  ));
