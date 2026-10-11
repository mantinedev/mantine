import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Image, ImageProps, ImageStylesNames } from './Image';

const defaultProps: ImageProps = {};

describe('@mantine/core/Image', () => {
  tests.itSupportsSystemProps<ImageProps, ImageStylesNames>({
    component: Image,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Image',
    stylesApiSelectors: ['root'],
  });

  it('sets data-fallback attribute if image cannot be loaded', () => {
    const { rerender } = render(<Image src={null} fallbackSrc="test" />);
    expect(screen.getByRole('img')).toHaveAttribute('data-fallback', 'true');

    rerender(<Image src="test" fallbackSrc="test" />);
    expect(screen.getByRole('img')).not.toHaveAttribute('data-fallback');
  });

  it('switches to fallbackSrc when image fails to load', () => {
    const spy = jest.fn();
    render(<Image src="broken.png" fallbackSrc="fallback.png" onError={spy} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'broken.png');
    expect(image).not.toHaveAttribute('data-fallback');

    fireEvent.error(image);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'fallback.png');
    expect(screen.getByRole('img')).toHaveAttribute('data-fallback', 'true');
  });
});
