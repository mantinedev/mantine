import { tests } from '@mantine-tests/core';
import {
  BackgroundImage,
  BackgroundImageProps,
  BackgroundImageStylesNames,
} from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: 'test.png',
};

describe('@mantine/core/BackgroundImage', () => {
  tests.itSupportsSystemProps<BackgroundImageProps, BackgroundImageStylesNames>({
    component: BackgroundImage,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/BackgroundImage',
    stylesApiSelectors: ['root'],
  });
});
