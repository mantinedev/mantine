import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Tooltip } from './Tooltip';

const defaultProps = {
  opened: true,
  withArrow: true,
  label: 'tooltip',
  children: 'tooltip',
  transitionDuration: 0,
};

describe('@mantine/core/Tooltip', () => {
  itRendersChildren(Tooltip, defaultProps);
  itSupportsClassName(Tooltip, defaultProps);
  itSupportsOthers(Tooltip, defaultProps);
  itSupportsStyle(Tooltip, defaultProps);
  itSupportsRef(Tooltip, defaultProps, HTMLDivElement, 'tooltipRef');

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@mantine/core/Tooltip');
  });
});
