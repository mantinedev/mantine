import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import { Collapse } from '../Collapse';

const code = `
import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

const [isOpen, setOpen] = useState(false);

const handleTransitionEnd = () => {
  if (isOpen) {
    alert('collapse opened');
  }
};

return (
  <div style={{ maxWidth: 400 }}>
    <Button onClick={() => setOpen(prev => !prev)}>
      Collapse
    </Button>

    <Collapse
      in={isOpen}
      transitionDuration={1000}
      onTransitionEnd={handleTransitionEnd}
      transitionTimingFunction="ease"
    >
      {/* content */}
    </Collapse>
  </div>
);
`;

function Demo() {
  const [isOpen, setOpen] = useState(false);

  const handleTransitionEnd = () => {
    if (isOpen) {
      console.log('collapse opened');
    }
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <Button onClick={() => setOpen(prev => !prev)}>
        Collapse
      </Button>

      <Collapse
        in={isOpen}
        transitionDuration={1000}
        onTransitionEnd={handleTransitionEnd}
        transitionTimingFunction="ease"
      >
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

export const transition: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
