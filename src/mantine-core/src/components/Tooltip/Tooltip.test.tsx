import { itRendersChildren, itSupportsRef, itSupportsSystemProps } from '@mantine/tests';
import { Tooltip, TooltipProps } from './Tooltip';

const defaultProps: TooltipProps = {
  opened: true,
  withArrow: true,
  label: 'tooltip',
  children: 'tooltip',
  transitionDuration: 0,
};

describe('@mantine/core/Tooltip', () => {
  itRendersChildren(Tooltip, defaultProps);
  itSupportsRef(Tooltip, defaultProps, HTMLDivElement, 'tooltipRef');
  itSupportsSystemProps({
    component: Tooltip,
    props: defaultProps,
    displayName: '@mantine/core/Tooltip',
  });
});
