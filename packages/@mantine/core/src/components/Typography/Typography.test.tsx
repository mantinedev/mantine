import { tests } from '@mantine-tests/core';
import { Typography, TypographyProps, TypographyStylesNames } from './Typography';

const defaultProps: TypographyProps = {};

describe('@mantine/core/Typography', () => {
  tests.itSupportsSystemProps<TypographyProps, TypographyStylesNames>({
    component: Typography,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/Typography',
    stylesApiSelectors: ['root'],
  });
});
