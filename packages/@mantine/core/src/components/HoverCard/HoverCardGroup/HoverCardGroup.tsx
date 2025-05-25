import { FloatingDelayGroup } from '@floating-ui/react';
import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../../core';
import { HoverCardGroupProvider } from './HoverCardGroup.context';

export interface HoverCardGroupProps {
  /** <HoverCard /> components */
  children: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps: Partial<HoverCardGroupProps> = {
  openDelay: 0,
  closeDelay: 0,
};

export function HoverCardGroup(props: HoverCardGroupProps) {
  const { openDelay, closeDelay, children } = useProps('HoverCardGroup', defaultProps, props);

  return (
    <HoverCardGroupProvider value>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </HoverCardGroupProvider>
  );
}

export type HoverCardGroupFactory = Factory<{
  props: HoverCardGroupProps;
}>;

HoverCardGroup.displayName = '@mantine/core/HoverCardGroup';
HoverCardGroup.extend = (c: ExtendComponent<HoverCardGroupFactory>): MantineThemeComponent => c;
