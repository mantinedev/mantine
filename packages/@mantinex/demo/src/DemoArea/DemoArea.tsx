import { Box, rem } from '@mantine/core';
import classes from './DemoArea.module.css';

export interface DemoAreaProps {
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number | string;
  minHeight?: number | string;
  dimmed?: boolean;
  striped?: boolean;
  overflow?: 'hidden' | 'auto';
}

export function DemoArea({
  withPadding = true,
  overflow,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped,
}: DemoAreaProps) {
  return (
    <Box
      className={classes.demo}
      style={{ overflow }}
      mod={{ 'with-padding': withPadding, centered, dimmed, striped }}
      __vars={{
        '--demo-flex': maxWidth ? '1' : undefined,
        '--demo-max-width': maxWidth ? rem(maxWidth) : undefined,
        '--demo-min-height': minHeight ? rem(minHeight) : undefined,
        '--demo-margin-y': maxWidth && centered ? 'auto' : undefined,
      }}
    >
      <div className={classes.demoInner}>{children}</div>
    </Box>
  );
}
