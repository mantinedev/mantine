import React from 'react';
import { ReactRenderer } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { Demo, MantineDemo } from '@mantinex/demo';

export function renderDemo(demo: MantineDemo): ArgsStoryFn<ReactRenderer, any> {
  return () => (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        maxWidth: 820,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Demo data={demo} />
    </div>
  );
}
