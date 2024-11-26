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
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ActionIconGroupSection',
    stylesApiSelectors: ['groupSection'],
  });
});
