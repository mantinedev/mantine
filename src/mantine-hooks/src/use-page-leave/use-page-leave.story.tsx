import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { usePageLeave } from './use-page-leave';

const lorem =
  'Because and pointing threw system for read. That or spot. What stairs nor perfected lead to buttons to here. The in there I attention would left right look such may through they the seven. People, into probably must suppliers, something phase by the every there up rendering it logged although.';

function Example() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));

  const items = Array(60)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <div style={{ padding: 20 }}>
      Mouse cursor has left the page {leftsCount} times
      {items}
    </div>
  );
}

storiesOf('Hooks/use-page-leave', module).add('Usage', () => <Example />);
