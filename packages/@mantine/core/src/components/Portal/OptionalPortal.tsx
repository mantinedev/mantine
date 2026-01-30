import { factory, Factory, useMantineEnv } from '../../core';
import { Portal, PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  /**
   * Determines whether children should be rendered inside Portal.
   * When false, children are rendered as regular React children.
   *
   * Note: In test environment, Portal is always disabled regardless of this value.
   *
   * @default true
   */
  withinPortal?: boolean;
}

export type OptionalPortalFactory = Factory<{
  props: OptionalPortalProps;
  ref: HTMLDivElement;
}>;

export const OptionalPortal = factory<OptionalPortalFactory>(
  ({ withinPortal = true, children, ...others }) => {
    const env = useMantineEnv();

    if (env === 'test' || !withinPortal) {
      return <>{children}</>;
    }

    return <Portal {...others}>{children}</Portal>;
  }
);

OptionalPortal.displayName = '@mantine/core/OptionalPortal';
