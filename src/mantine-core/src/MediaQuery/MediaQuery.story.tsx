import React from 'react';
import { MediaQuery } from './MediaQuery';

export default { title: 'MediaQuery' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <div style={{ height: 100, backgroundColor: 'red' }} />
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <div style={{ height: 100, backgroundColor: 'blue' }} />
      </MediaQuery>
    </div>
  );
}

export function StylesFunction() {
  return (
    <div style={{ padding: 40 }}>
      <MediaQuery
        smallerThan="md"
        styles={(theme) => ({ backgroundColor: theme.colors.orange[5] })}
      >
        <div style={{ height: 100 }} />
      </MediaQuery>
      <MediaQuery largerThan="md" styles={(theme) => ({ backgroundColor: theme.colors.pink[5] })}>
        <div style={{ height: 100 }} />
      </MediaQuery>
    </div>
  );
}
