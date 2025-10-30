import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { Text } from '../Text';
import { Collapse } from './Collapse';

export default { title: 'Collapse' };

function Component() {
  const random = useRef(Math.random());
  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  return (
    <Text>
      {random.current}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </Text>
  );
}

export function Usage() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ maxWidth: 400, background: 'pink' }}>
      <Button onClick={() => setOpened((o) => !o)} mb="md">
        Toggle content
      </Button>

      <Collapse expanded={opened} keepMounted={false}>
        <Component />
      </Collapse>
    </div>
  );
}
