import { tests } from '@mantine-tests/core';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

describe('@mantine/core/Space', () => {
  tests.itSupportsSystemProps<SpaceProps>({
    component: Space,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Space',
  });
});
