import { tests } from '@mantine-tests/core';
import { LevelsGroup, LevelsGroupProps, LevelsGroupStylesNames } from './LevelsGroup';

const defaultProps: LevelsGroupProps = {};

describe('@mantine/dates/LevelsGroup', () => {
  tests.itSupportsSystemProps<LevelsGroupProps, LevelsGroupStylesNames>({
    component: LevelsGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/LevelsGroup',
    stylesApiSelectors: ['levelsGroup'],
  });
});
