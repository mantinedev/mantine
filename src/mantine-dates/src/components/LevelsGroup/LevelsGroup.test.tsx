import { tests } from '@mantine/tests';
import { LevelsGroup, LevelsGroupProps, LevelsGroupStylesNames } from './LevelsGroup';

const defaultProps: LevelsGroupProps = {};

describe('@mantine/dates/LevelsGroup', () => {
  tests.itSupportsSystemProps<LevelsGroupProps, LevelsGroupStylesNames>({
    component: LevelsGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/LevelsGroup',
    stylesApiSelectors: ['levelsGroup'],
  });
});
