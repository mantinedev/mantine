import { useEffect, useState } from 'react';
import { Box } from '../../core';
import { Button } from '../Button';
import { SegmentedControl } from '../SegmentedControl';
import { Collapse } from './Collapse';

export default { title: 'Collapse' };

export function NestedCollapseWithControl() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('a');

  useEffect(() => {
    setTimeout(() => setValue('b'));
  }, []);

  return (
    <Box maw={400} mx="auto" mt={100}>
      <Button onClick={() => setShow(!show)}>Toggle</Button>
      <Collapse in={show}>
        <SegmentedControl value={value} onChange={setValue} data={['a', 'b']} />
        <Collapse in={value === 'b'}>
          1<br />2<br />3<br />4<br />5<br />
        </Collapse>
      </Collapse>
    </Box>
  );
}
