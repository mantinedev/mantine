import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Collapse } from './Collapse';
import { Button } from '../Button/Button';

storiesOf('@mantine/core/Collapse', module)
  .add('Initially closed', () => {
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
  })
  .add('Initially opened', () => {
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
  })
  .add('With transition API', () => {
    const [open, setOpen] = useState(true);

    const handleTransitionEnd = () => {
      console.log('transition end');
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
  })
  .add('With transition API', () => {
    const [open, setOpen] = useState(true);

    const handleTransitionEnd = () => {
      console.log('transition end');
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
  })
  .add('With dynamic children', () => {
    const [open, setOpen] = useState(true);
    const [texts, setTexts] = useState(['Some text', 'Some text']);

    const addText = () => {
      setTexts(prev => [...prev, 'Some text']);
    };

    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          style={{ margin: 20 }}
        >
          collapse
        </Button>

        <Button
          onClick={addText}
        >
          add
        </Button>

        <Collapse
          in={open}
          style={{ maxWidth: '600px' }}
        >
          <div style={{ border: '1px solid black' }}>
          {texts.map(text => (
            <div style={{ padding: '8px', border: '1px solid rgba(0, 0, 0, 0.5)' }}>{text}</div>
          ))}
          </div>
        </Collapse>
      </div>
    );
  });
