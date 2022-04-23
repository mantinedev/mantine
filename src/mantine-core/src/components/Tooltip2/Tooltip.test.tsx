import React from 'react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Tooltip, TooltipProps } from './Tooltip';

const defaultProps: TooltipProps = {
  withinPortal: false,
  opened: true,
  transitionDuration: 0,
  label: 'test-tooltip',
  children: <button type="button">test-target</button>,
};

describe('@mantine/core/Tooltip', () => {
  itSupportsSystemProps({
    component: Tooltip,
    props: defaultProps,
    displayName: '@mantine/core/Tooltip',
    name: 'Tooltip',
  });
});
