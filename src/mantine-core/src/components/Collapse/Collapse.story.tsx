import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse } from './Collapse';
import { Button } from '../Button/Button';

storiesOf('@mantine/core/Collapse', module).add('Initially closed', () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={{ marginBottom: 20 }}
      >
        collapse
      </Button>

      <Collapse in={open} style={{ maxWidth: '600px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Collapse>
    </div>
  );
});

storiesOf('@mantine/core/Collapse', module).add('Initially opened', () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={{ marginBottom: 20 }}
      >
        collapse
      </Button>

      <Collapse in={open} style={{ maxWidth: '600px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Collapse>
    </div>
  );
});

storiesOf('@mantine/core/Collapse', module).add('With transition API', () => {
  const [open, setOpen] = useState(true);

  const handleTransitionEnd = () => {
    // eslint-disable-next-line no-alert
    alert('transition end');
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={{ marginBottom: 20 }}
      >
        collapse
      </Button>

      <Collapse
        in={open}
        onTransitionEnd={handleTransitionEnd}
        transitionTimingFunction="ease"
        transitionDuration={600}
        style={{ maxWidth: '600px' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Collapse>
    </div>
  );
});
