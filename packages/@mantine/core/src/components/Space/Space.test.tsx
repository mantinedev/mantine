import { tests } from '@mantine-tests/core';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

describe('@mantine/core/Space', () => {
  tests.itSupportsSystemProps<SpaceProps>({
    component: Space,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/Space',
  });
});
