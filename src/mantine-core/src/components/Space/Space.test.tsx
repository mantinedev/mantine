import { itSupportsSystemProps } from '@mantine/tests';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

describe('@mantine/core/Space', () => {
  itSupportsSystemProps({
    component: Space as any,
    props: defaultProps,
    displayName: '@mantine/core/Space',
    refType: HTMLDivElement,
  });
});
