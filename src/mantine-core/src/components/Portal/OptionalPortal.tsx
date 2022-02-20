import React from 'react';
import { Portal, PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  /** Determines if children should be rendered in Portal */
  withinPortal?: boolean;
}

export function OptionalPortal({ withinPortal = true, children, ...others }: OptionalPortalProps) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <>{children}</>;
}

OptionalPortal.displayName = '@mantine/core/OptionalPortal';
