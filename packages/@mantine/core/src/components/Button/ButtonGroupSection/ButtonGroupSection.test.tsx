import { tests } from '@mantine-tests/core';
import {
  ButtonGroupSection,
  ButtonGroupSectionProps,
  ButtonGroupSectionStylesNames,
} from './ButtonGroupSection';

const defaultProps: ButtonGroupSectionProps = {};

describe('@mantine/core/ButtonGroupSection', () => {
  tests.itSupportsSystemProps<ButtonGroupSectionProps, ButtonGroupSectionStylesNames>({
    component: ButtonGroupSection,
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
    displayName: '@mantine/core/ButtonGroupSection',
    stylesApiSelectors: ['groupSection'],
  });
});
