import type { OptionalPortalProps } from './OptionalPortal';
import type { BasePortalProps, PortalProps } from './Portal';

export { Portal } from './Portal';
export { OptionalPortal } from './OptionalPortal';

export type { PortalProps, BasePortalProps, OptionalPortalProps };

export namespace Portal {
  export type Props = PortalProps;
}

export namespace OptionalPortal {
  export type Props = OptionalPortalProps;
}
