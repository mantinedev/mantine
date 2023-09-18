import React from 'react';
import { Demo, MantineDemo } from '@mantine/ds';

export function attachDemos(stories: any, demos: Record<string, MantineDemo>) {
  Object.keys(demos).forEach((key) => {
    stories.add(`⭐ Demo: ${key}`, () => (
      <div
        style={{
          paddingTop: 40,
          paddingBottom: 40,
          maxWidth: 820,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Demo data={demos[key]} />
      </div>
    ));
  });
}
