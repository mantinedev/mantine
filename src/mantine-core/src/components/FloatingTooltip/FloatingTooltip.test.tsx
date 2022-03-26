import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itRendersChildren,
  itSupportsRef,
  itSupportsSystemProps,
  renderWithAct,
  actAsync,
} from '@mantine/tests';
import { FloatingTooltip, FloatingTooltipProps } from './FloatingTooltip';

const defaultProps: FloatingTooltipProps = {
  withinPortal: false,
  label: 'test-tooltip',
  children: 'test-target',
  transitionDuration: 0,
};

describe('@mantine/core/FloatingTooltip', () => {});
