import { tests } from '@mantine-tests/core';
import { AspectRatio, AspectRatioProps, AspectRatioStylesNames } from './AspectRatio';

const defaultProps: AspectRatioProps = {};

describe('@mantine/core/AspectRatio', () => {
  tests.itSupportsSystemProps<AspectRatioProps, AspectRatioStylesNames>({
    component: AspectRatio,
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
    refType: HTMLDivElement,
    displayName: '@mantine/core/AspectRatio',
    stylesApiSelectors: ['root'],
  });
});
