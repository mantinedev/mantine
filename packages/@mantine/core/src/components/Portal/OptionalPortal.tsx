import { factory, Factory, useMantineEnv } from '../../core';
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
    const env = useMantineEnv();

    if (env === 'test' || !withinPortal) {
      return <>{children}</>;
    }

    return (
      <Portal ref={ref} {...others}>
        {children}
      </Portal>
    );
  }
);

OptionalPortal.displayName = '@mantine/core/OptionalPortal';
