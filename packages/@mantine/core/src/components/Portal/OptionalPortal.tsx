import { Portal, PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  /** Determines whether children should be rendered inside `<Portal />` */
  withinPortal?: boolean;
}

export function OptionalPortal({ withinPortal = true, children, ...others }: OptionalPortalProps) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <>{children}</>;
}

OptionalPortal.displayName = '@mantine/core/OptionalPortal';
