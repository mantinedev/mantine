import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useMantineTheme } from '@mantine/styles';
import { Group } from '../Group';
import { Button } from '../Button';
import { Paper } from '../Paper';
import { Center } from '../Center';
import { Popper } from './Popper';

function RemoveOnUnmount() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();
  const [showReference, setShowReference] = useState(true);

  return (
    <Group position="center">
      {showReference && (
        <Button ref={setReferenceElement} onClick={() => setVisible((m) => !m)}>
          Reference element
        </Button>
      )}

      <Button
        color="red"
        onClick={() => {
          setShowReference(false);
        }}
      >
        Remove Reference element
      </Button>

      <Popper
        arrowSize={5}
        withArrow
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
        arrowStyle={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }}
      >
        <Paper
          style={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        >
          <Center style={{ height: 100, width: 200 }}>Popper content</Center>
        </Paper>
      </Popper>
    </Group>
  );
}

storiesOf('@mantine/core/Popper/stories', module).add('Remove on unmount', () => (
  <RemoveOnUnmount />
));
