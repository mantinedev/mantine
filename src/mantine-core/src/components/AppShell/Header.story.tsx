import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header/Header';

storiesOf('@mantine/core/AppShell/stories/Header', module)
  .add('Header', () => (
    <>
      <Header height={50}>Just a header</Header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit ex labore
        porro iure. Aperiam, odit distinctio sunt sint excepturi ipsum delectus deserunt, fugit odio
        architecto quae nesciunt dignissimos culpa.
      </div>
    </>
  ))
  .add('Header: Fixed', () => (
    <>
      <Header height={50} fixed position={{ top: 0, left: 0, right: 0 }}>
        Just a header
      </Header>
      <div style={{ paddingTop: 50 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit ex labore
        porro iure. Aperiam, odit distinctio sunt sint excepturi ipsum delectus deserunt, fugit odio
        architecto quae nesciunt dignissimos culpa.
      </div>
    </>
  ));
