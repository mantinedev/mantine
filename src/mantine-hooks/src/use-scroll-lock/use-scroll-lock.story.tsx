import React from 'react';
import { storiesOf } from '@storybook/react';
import { useScrollLock } from './use-scroll-lock';

const lorem =
  'Because and pointing threw system for read. That or spot. What stairs nor perfected lead to buttons to here. The in there I attention would left right look such may through they the seven. People, into probably must suppliers, something phase by the every there up rendering it logged although.';

function Example() {
  const [lockScroll, setLockScroll] = useScrollLock();

  const items = Array(10)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <div style={{ padding: 20 }}>
      {items}
      <button type="button" onClick={() => setLockScroll((c) => !c)}>
        {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
      </button>
      {items}
    </div>
  );
}

storiesOf('@mantine/hooks/use-scroll-lock', module).add('Usage', () => <Example />);
