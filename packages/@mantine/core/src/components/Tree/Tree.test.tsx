import { tests } from '@mantine-tests/core';
import { Tree, TreeProps, TreeStylesNames } from './Tree';

const defaultProps: TreeProps = {
  data: [
    {
      label: 'Tree Node',
      value: 'tree-node',
    },
  ],
};

describe('@mantine/core/Tree', () => {
  tests.itSupportsSystemProps<TreeProps, TreeStylesNames>({
    component: Tree,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    displayName: '@mantine/core/Tree',
    stylesApiSelectors: ['root', 'label', 'node'],
  });
});
