import React, { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useEventListener } from '@mantine/hooks';

const code = `
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}

export const useEventListenerDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
