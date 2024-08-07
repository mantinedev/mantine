import { FloatingDelayGroup } from '@floating-ui/react';
import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../../core';
import { TooltipGroupProvider } from './TooltipGroup.context';

export interface TooltipGroupProps {
  /** <Tooltip /> components */
  children: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps: Partial<TooltipGroupProps> = {
  openDelay: 0,
  closeDelay: 0,
};

export function TooltipGroup(props: TooltipGroupProps) {
  const { openDelay, closeDelay, children } = useProps('TooltipGroup', defaultProps, props);

  return (
    <TooltipGroupProvider value>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </TooltipGroupProvider>
  );
}

export type TooltipGroupFactory = Factory<{
  props: TooltipGroupProps;
}>;

TooltipGroup.displayName = '@mantine/core/TooltipGroup';
TooltipGroup.extend = (c: ExtendComponent<TooltipGroupFactory>): MantineThemeComponent => c;
