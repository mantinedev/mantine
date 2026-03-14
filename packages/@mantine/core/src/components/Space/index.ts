import type { SpaceFactory, SpaceProps } from './Space';

export { Space } from './Space';
export type { SpaceFactory, SpaceProps } from './Space';

export namespace Space {
  export type Props = SpaceProps;
  export type Factory = SpaceFactory;
}
