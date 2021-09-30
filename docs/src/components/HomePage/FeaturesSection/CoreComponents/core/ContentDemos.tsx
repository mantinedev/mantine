import React from 'react';
import { ChatBubbleIcon, ImageIcon, GearIcon } from '@modulz/radix-icons';
import { Text, Tabs, Tab, Paper } from '@mantine/core';
import { AccordionDemo } from '@mantine/core/src/components/Accordion/demos/label';

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
        <Text size="lg" style={{ marginBottom: 5 }}>
          Tabs component
        </Text>

        <Tabs grow>
          <Tab label="Messages" icon={<ChatBubbleIcon />} />
          <Tab label="Gallery" icon={<ImageIcon />} />
          <Tab label="Settings" icon={<GearIcon />} />
        </Tabs>

        <Tabs grow variant="outline" style={{ marginTop: 30 }}>
          <Tab label="Messages" icon={<ChatBubbleIcon />} />
          <Tab label="Gallery" icon={<ImageIcon />} />
          <Tab label="Settings" icon={<GearIcon />} />
        </Tabs>
      </div>
    </Paper>
  );
}
