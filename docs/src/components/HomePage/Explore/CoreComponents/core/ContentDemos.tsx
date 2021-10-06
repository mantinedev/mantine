import React from 'react';
import { Text, Paper } from '@mantine/core';
import { AccordionDemo } from '@mantine/core/src/components/Accordion/demos/label';
import { TimelineBase } from '@mantine/core/src/components/Timeline/demos/_base';

export function ContentDemos() {
  return (
    <Paper shadow="md" radius="md" padding={30}>
      <div>
        <Text size="lg" style={{ marginBottom: 15 }}>
          Accordion component
        </Text>
        <AccordionDemo />
      </div>

      <div style={{ marginTop: 30 }}>
        <Text size="lg" mb={15}>
          Timeline component
        </Text>

        <TimelineBase />
      </div>
    </Paper>
  );
}
