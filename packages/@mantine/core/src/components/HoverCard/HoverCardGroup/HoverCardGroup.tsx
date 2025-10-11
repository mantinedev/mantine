import { createContext } from 'react';
import { FloatingDelayGroup } from '@floating-ui/react';
import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../../core';

export interface HoverCardGroupContextValue {
  withinGroup: boolean;
}

export const HoverCardGroupContext = createContext<HoverCardGroupContextValue>({
  withinGroup: false,
});

export interface HoverCardGroupProps {
  /** `HoverCard` components */
  children: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps = {
  openDelay: 0,
  closeDelay: 0,
} satisfies Partial<HoverCardGroupProps>;

export function HoverCardGroup(props: HoverCardGroupProps) {
  const { openDelay, closeDelay, children } = useProps('HoverCardGroup', defaultProps, props);

  return (
    <HoverCardGroupContext value={{ withinGroup: true }}>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </HoverCardGroupContext>
  );
}

export type HoverCardGroupFactory = Factory<{
  props: HoverCardGroupProps;
}>;

HoverCardGroup.displayName = '@mantine/core/HoverCardGroup';
HoverCardGroup.extend = (c: ExtendComponent<HoverCardGroupFactory>): MantineThemeComponent => c;
