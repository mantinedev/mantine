import { tests } from '@mantine-tests/core';
import { LevelsGroup, LevelsGroupProps, LevelsGroupStylesNames } from './LevelsGroup';

const defaultProps: LevelsGroupProps = {};

describe('@mantine/dates/LevelsGroup', () => {
  tests.itSupportsSystemProps<LevelsGroupProps, LevelsGroupStylesNames>({
    component: LevelsGroup,
    props: defaultProps,
    children: true,
    displayName: '@mantine/dates/LevelsGroup',
    stylesApiSelectors: ['levelsGroup'],
  });
});
