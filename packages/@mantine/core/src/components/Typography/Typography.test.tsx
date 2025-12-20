import { tests } from '@mantine-tests/core';
import { Typography, TypographyProps, TypographyStylesNames } from './Typography';

const defaultProps: TypographyProps = {};

describe('@mantine/core/Typography', () => {
  tests.itSupportsSystemProps<TypographyProps, TypographyStylesNames>({
    component: Typography,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    displayName: '@mantine/core/Typography',
    stylesApiSelectors: ['root'],
  });
});
