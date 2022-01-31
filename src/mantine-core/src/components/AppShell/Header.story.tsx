import React from 'react';
import { storiesOf } from '@storybook/react';
import { paragraph } from '@mantine/mockdata';
import { Header } from './Header/Header';

storiesOf('@mantine/core/AppShell/stories/Header', module)
  .add('Header', () => (
    <>
      <Header height={50}>Just a header</Header>
      <div>{paragraph}</div>
    </>
  ))
  .add('Header: Fixed', () => (
    <>
      <Header height={50} fixed position={{ top: 0, left: 0, right: 0 }}>
        Just a header
      </Header>
      <div style={{ paddingTop: 50 }}>{paragraph}</div>
    </>
  ));
