import { factory, Factory } from '../../core';
import { Portal, PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  /** Determines whether children should be rendered inside `<Portal />` */
  withinPortal?: boolean;
}

export type OptionalPortalFactory = Factory<{
  props: OptionalPortalProps;
  ref: HTMLDivElement;
}>;

export const OptionalPortal = factory<OptionalPortalFactory>(
  ({ withinPortal = true, children, ...others }, ref) => {
    if (withinPortal) {
      return (
        <Portal ref={ref} {...others}>
          {children}
        </Portal>
      );
    }

    return <>{children}</>;
  }
);

OptionalPortal.displayName = '@mantine/core/OptionalPortal';
