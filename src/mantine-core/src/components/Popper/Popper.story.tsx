import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Popper } from './Popper';

function Demo() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        ref={setReferenceElement}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ padding: 100 }}
      >
        Reference
      </button>
      <Popper
        placement="end"
        position="top"
        gutter={5}
        arrowSize={3}
        referenceElement={referenceElement}
        mounted={visible}
        transition="pop-top-left"
        transitionDuration={1000}
      >
        <div style={{ backgroundColor: 'black', color: 'white' }}>Content</div>
      </Popper>
    </div>
  );
}

storiesOf('@mantine/core/Popper', module).add('General usage', () => (
  <div style={{ padding: 100 }}>
    <Demo />
  </div>
));
