import { tests } from '@mantine-tests/core';
import { AspectRatio, AspectRatioProps, AspectRatioStylesNames } from './AspectRatio';

const defaultProps: AspectRatioProps = {};

describe('@mantine/core/AspectRatio', () => {
  tests.itSupportsSystemProps<AspectRatioProps, AspectRatioStylesNames>({
    component: AspectRatio,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/AspectRatio',
    stylesApiSelectors: ['root'],
  });
});
