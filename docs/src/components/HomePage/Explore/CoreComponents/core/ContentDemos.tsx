import React from 'react';
import { Text, Paper } from '@mantine/core';
import { AccordionDemo, TimelineBase } from '@mantine/demos';

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
