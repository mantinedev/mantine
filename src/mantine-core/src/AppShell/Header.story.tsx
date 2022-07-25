import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header/Header';

const content = Array(30)
  .fill(0)
  .map(() => (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis labore alias nam,
      voluptate aperiam non quidem consequuntur enim unde corrupti quaerat possimus facilis. Ipsa
      quos alias doloremque at veniam?
    </p>
  ));

storiesOf('AppShell/Header', module)
  .add('Header', () => (
    <>
      <Header height={50}>Just a header</Header>
      <div>{content}</div>
    </>
  ))
  .add('Header: Fixed', () => (
    <>
      <Header height={50} fixed position={{ top: 0, left: 0, right: 0 }}>
        Just a header
      </Header>
      <div style={{ paddingTop: 50 }}>{content}</div>
    </>
  ));
