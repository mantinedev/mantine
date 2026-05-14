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
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/BackgroundImage',
    stylesApiSelectors: ['root'],
  });
});
