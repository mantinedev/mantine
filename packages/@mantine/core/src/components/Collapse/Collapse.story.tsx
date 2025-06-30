import { useEffect, useState } from 'react';
import { Box } from '../../core';
import { Button } from '../Button';
import { SegmentedControl } from '../SegmentedControl';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Collapse } from './Collapse';

export default { title: 'Collapse' };

export function NestedCollapseWithControl() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('a');

  useEffect(() => {
    setValue('b');
  }, []);

  return (
    <Box maw={400} mx="auto" mt={100}>
      <Button onClick={() => setShow((pre) => !pre)}>Toggle</Button>
      <Collapse in={show} keepMounted>
        <SegmentedControl value={value} onChange={setValue} data={['a', 'b']} />
        <Collapse in={value === 'b'}>
          1<br />2<br />3<br />4<br />5<br />
        </Collapse>
      </Collapse>
    </Box>
  );
}

export function StackedCollapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box maw={400} mx="auto" mt={100}>
      <Stack bg="gray" m="lg">
        <Button onClick={() => setIsOpen((o) => !o)}>Toggle</Button>
        <Collapse in={isOpen}>
          <Text>Text</Text>
        </Collapse>
      </Stack>
      <Text>
        See that the grey box extends below the button even when the collapse is closed. Previously
        there would be no stack gap above closed collapses.
      </Text>
    </Box>
  );
}
