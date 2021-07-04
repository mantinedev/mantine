import React from 'react';
import { ChatBubbleIcon, ImageIcon, GearIcon } from '@modulz/radix-icons';
import { useMantineTheme, Text, Tabs, Tab, RingProgress, Group } from '@mantine/core';
import { usage as CardDemo } from '@mantine/core/src/components/Card/demos/usage';
import { AccordionDemo } from '@mantine/core/src/components/Accordion/demos/label';

export function ContentDemos() {
  const theme = useMantineTheme();
  const CardComponent = CardDemo.component;

  return (
    <>
      <Group align="flex-start" grow spacing={30}>
        <div>
          <Text size="lg" style={{ marginBottom: 5 }}>
            RingProgress component
          </Text>

          <Group position="center">
            <RingProgress
              label={
                <Text size="xs" align="center">
                  Application data usage
                </Text>
              }
              sections={[
                { value: 40, color: 'cyan' },
                { value: 15, color: 'orange' },
                { value: 15, color: 'grape' },
              ]}
            />
          </Group>
        </div>

        <div>
          <Text size="lg" style={{ marginBottom: 15 }}>
            Accordion component
          </Text>
          <AccordionDemo />
        </div>

        <div>
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
      </Group>

      <Text size="lg" style={{ marginBottom: 15, marginTop: 30 }}>
        Card component
      </Text>
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <div
          style={{
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <CardComponent />
        </div>
      </div>
    </>
  );
}
