import { itSupportsSystemProps } from '@mantine/tests';
import { BackgroundImage } from './BackgroundImage';

describe('@mantine/core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: '@mantine/core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toEqual('@mantine/core/BackgroundImage');
  });
});
