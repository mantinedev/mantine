import React from 'react';
import { Accordion, useMantineTheme } from '@mantine/core';
import data from './data';

export function GalleryFaq() {
  const theme = useMantineTheme();
  const items = data.map((item) => (
    <Accordion.Item key={item.q} label={item.q}>
      {item.a}
    </Accordion.Item>
  ));

  return (
    <Accordion
      styles={{
        label: {
          fontWeight: 700,
        },

        itemOpened: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      }}
    >
      {items}
    </Accordion>
  );
}
