import { tests } from '@mantine-tests/core';
import { Progress, ProgressProps, ProgressStylesNames } from './Progress';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
import { ProgressRoot } from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';

const defaultProps: ProgressProps = {
  value: 40,
  'aria-label': 'test',
};

describe('@mantine/core/Progress', () => {
  tests.axe([<Progress {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<ProgressProps, ProgressStylesNames>({
    component: Progress,
    props: defaultProps,
    id: true,
    displayName: '@mantine/core/Progress',
    stylesApiSelectors: ['root', 'section'],
  });

  it('exposes ProgressRoot, ProgressSection and ProgressLabel components', () => {
    expect(Progress.Root).toBe(ProgressRoot);
    expect(Progress.Section).toBe(ProgressSection);
    expect(Progress.Label).toBe(ProgressLabel);
  });
});
