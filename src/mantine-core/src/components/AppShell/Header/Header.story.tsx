import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';

storiesOf('@mantine/core/AppShell/Header', module)
  .add('General usage', () => (
    <>
      <Header height={50}>Just a header</Header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi quae optio numquam
        animi harum perferendis quibusdam in asperiores corporis delectus corrupti! Magnam magni
        itaque commodi labore laborum non animi?
      </div>
    </>
  ))
  .add('Fixed', () => (
    <>
      <Header height={50} fixed position={{ top: 0, left: 0, right: 0 }}>
        Just a header
      </Header>
      <div style={{ paddingTop: 60 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi quae optio numquam
        animi harum perferendis quibusdam in asperiores corporis delectus corrupti! Magnam magni
        itaque commodi labore laborum non animi?
      </div>
    </>
  ));
