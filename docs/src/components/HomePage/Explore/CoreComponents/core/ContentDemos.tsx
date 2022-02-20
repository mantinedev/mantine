import React from 'react';
import { Text, Paper } from '@mantine/core';
import { AccordionDemo, TimelineBase } from '@mantine/demos';

export function ContentDemos() {
  return (
    <Paper shadow="md" radius="md" p={30}>
      <div>
        <Text size="lg" mb="md">
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
