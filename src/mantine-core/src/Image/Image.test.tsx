import React from 'react';
import { render, screen } from '@testing-library/react';
import { rem } from '@mantine/core';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Image, ImageProps } from './Image';

const defaultProps: ImageProps = {
  src: 'test.png',
  alt: 'Test',
};

describe('@mantine/core/Image', () => {
  checkAccessibility([
    <Image {...defaultProps} />,
    <Image {...defaultProps} src={null} />,
    <Image {...defaultProps} src={null} withPlaceholder />,
  ]);

  itSupportsProviderVariant(Image, defaultProps, 'Image');
  itSupportsSystemProps({
    component: Image,
    props: defaultProps,
    displayName: '@mantine/core/Image',
    refType: HTMLDivElement,
  });

  it('sets src and alt attributes on img element', () => {
    render(<Image src="test-src" alt="test-alt" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-src');
    expect(image).toHaveAttribute('alt', 'test-alt');
  });

  it('sets given width, height and object-fit on img element', () => {
    render(<Image {...defaultProps} width={478} height={207} fit="contain" />);
    expect(screen.getByRole('img')).toHaveStyle({
      width: rem(478),
      height: rem(207),
      objectFit: 'contain',
    });
  });

  it('renders placeholder based on withPlaceholder prop', () => {
    const { container: withPlaceholder } = render(<Image src={null} withPlaceholder />);
    const { container: withoutPlaceholder } = render(<Image src={null} withPlaceholder={false} />);
    expect(withPlaceholder.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(1);
    expect(withoutPlaceholder.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(0);
  });

  it('renders a placeholder after having src updated to null', () => {
    const { rerender, container } = render(<Image src="test-src" withPlaceholder />);
    expect(container.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(0);
    rerender(<Image src={null} withPlaceholder />);
    expect(container.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(1);
  });

  it('sets overflow to hidden if withPlaceholder is true on img element', () => {
    render(<Image src={null} alt="test-alt" withPlaceholder />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyle({ overflow: 'hidden' });
  });

  it('uses a user-defined overflow if an imageProps style is set on img element', () => {
    render(
      <Image
        src={null}
        alt="test-alt"
        withPlaceholder
        imageProps={{ style: { overflow: 'unset' } }}
      />
    );
    const image = screen.getByRole('img');
    expect(image).toHaveStyle({ overflow: 'unset' });
  });

  it('renders given caption', () => {
    const { container: withoutCaption } = render(<Image src="test" />);
    const { container: withCaption } = render(<Image src="test" caption="test-caption" />);
    expect(withoutCaption.querySelectorAll('figcaption')).toHaveLength(0);
    expect(withCaption.querySelector('figcaption').textContent).toBe('test-caption');
  });
});
