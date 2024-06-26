import { render, screen, tests } from '@mantine-tests/core';
import { Image, ImageProps, ImageStylesNames } from './Image';

const defaultProps: ImageProps = {};

describe('@mantine/core/Image', () => {
  tests.itSupportsSystemProps<ImageProps, ImageStylesNames>({
    component: Image,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLImageElement,
    displayName: '@mantine/core/Image',
    stylesApiSelectors: ['root'],
  });

  it('sets data-fallback attribute if image cannot be loaded', () => {
    const { rerender } = render(<Image src={null} fallbackSrc="test" />);
    expect(screen.getByRole('img')).toHaveAttribute('data-fallback', 'true');

    rerender(<Image src="test" fallbackSrc="test" />);
    expect(screen.getByRole('img')).not.toHaveAttribute('data-fallback');
  });
});
