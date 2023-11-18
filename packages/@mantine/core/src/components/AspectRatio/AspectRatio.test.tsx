import { tests } from '@tests/core';
import { AspectRatio, AspectRatioProps, AspectRatioStylesNames } from './AspectRatio';

const defaultProps: AspectRatioProps = {};

describe('@mantine/core/AspectRatio', () => {
  tests.itSupportsSystemProps<AspectRatioProps, AspectRatioStylesNames>({
    component: AspectRatio,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AspectRatio',
    stylesApiSelectors: ['root'],
  });
});
