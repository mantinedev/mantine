import React from 'react';
import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { Content } from './_content';

function Wrapper(props: ScrollAreaProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <ScrollArea style={{ height: 250 }} {...props}>
        <Content />
      </ScrollArea>
    </div>
  );
}

const codeTemplate = (props: string) => `<ScrollArea style={{ height: 250 }}${props}>
  {/* ... content */}
</ScrollArea>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'type',
      type: 'select',
      data: [
        { value: 'hover', label: 'Hover' },
        { value: 'auto', label: 'Auto' },
        { value: 'always', label: 'Always' },
        { value: 'scroll', label: 'Scroll' },
      ],
      initialValue: 'hover',
      defaultValue: 'hover',
    },
    {
      name: 'offsetScrollbars',
      type: 'boolean',
      defaultValue: false,
      initialValue: false,
    },
    {
      name: 'scrollbarSize',
      type: 'number',
      min: 2,
      max: 20,
      step: 2,
      defaultValue: 10,
      initialValue: 10,
    },
    {
      name: 'scrollHideDelay',
      type: 'number',
      min: 0,
      max: 6000,
      step: 500,
      defaultValue: 1000,
      initialValue: 1000,
    },
  ],
};
