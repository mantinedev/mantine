import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import { Collapse } from '../Collapse';

const code = `
const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400 }}>
      <Button onClick={() => setOpen(prev => !prev)}>
        collapse
      </Button>

      <Collapse in={isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Collapse>
    </div>
`;

function Demo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400 }}>
      <Button onClick={() => setOpen(prev => !prev)}>
        Collapse
      </Button>

      <Collapse in={isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Collapse>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
