import { itSupportsSystemProps, itIsPolymorphic } from '@mantine/tests';
import { BackgroundImage, BackgroundImageProps } from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: './image.png',
};

describe('@mantine/core/BackgroundImage', () => {
  itIsPolymorphic(BackgroundImage, defaultProps);
  itSupportsSystemProps({
    component: BackgroundImage,
    props: defaultProps,
    displayName: '@mantine/core/BackgroundImage',
    refType: HTMLDivElement,
    providerName: 'BackgroundImage',
  });
});
