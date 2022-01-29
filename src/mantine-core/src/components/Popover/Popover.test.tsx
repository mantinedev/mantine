import React from 'react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Popover, PopoverProps } from './Popover';

const defaultProps: PopoverProps = {
  opened: true,
  onClose: () => {},
  withinPortal: false,
  target: <div>target</div>,
  children: 'test-content',
  title: 'test-title',
  transitionDuration: 0,
};

describe('@mantine/core/Popover', () => {
  itSupportsSystemProps({
    component: Popover,
    props: defaultProps,
    displayName: '@mantine/core/Popover',
  });
});
