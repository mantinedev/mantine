import { tests } from '@mantine-tests/core';
import { PillGroup, PillGroupProps, PillGroupStylesNames } from './PillGroup';

const defaultProps: PillGroupProps = {};

describe('@mantine/core/PillGroup', () => {
  tests.itSupportsSystemProps<PillGroupProps, PillGroupStylesNames>({
    component: PillGroup,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PillGroup',
    stylesApiSelectors: ['group'],
  });
});
