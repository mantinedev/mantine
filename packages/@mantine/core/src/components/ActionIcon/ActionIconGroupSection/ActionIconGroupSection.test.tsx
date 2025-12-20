import { tests } from '@mantine-tests/core';
import {
  ActionIconGroupSection,
  ActionIconGroupSectionProps,
  ActionIconGroupSectionStylesNames,
} from './ActionIconGroupSection';

const defaultProps: ActionIconGroupSectionProps = {};

describe('@mantine/core/ActionIconGroupSection', () => {
  tests.itSupportsSystemProps<ActionIconGroupSectionProps, ActionIconGroupSectionStylesNames>({
    component: ActionIconGroupSection,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ActionIconGroupSection',
    stylesApiSelectors: ['groupSection'],
  });
});
