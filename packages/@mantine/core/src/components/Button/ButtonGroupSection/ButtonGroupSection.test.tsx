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
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ButtonGroupSection',
    stylesApiSelectors: ['groupSection'],
  });
});
