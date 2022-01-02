import React from 'react';
import { render, screen } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
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
      width: '478px',
      height: '207px',
      objectFit: 'contain',
    });
  });

  it('renders placeholder based on withPlaceholder prop', () => {
    const { container: withPlaceholder } = render(<Image src={null} withPlaceholder />);
    const { container: withoutPlaceholder } = render(<Image src={null} withPlaceholder={false} />);
    expect(withPlaceholder.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(1);
    expect(withoutPlaceholder.querySelectorAll('.mantine-Image-placeholder')).toHaveLength(0);
  });

  it('renders given caption', () => {
    const { container: withoutCaption } = render(<Image src="test" />);
    const { container: withCaption } = render(<Image src="test" caption="test-caption" />);
    expect(withoutCaption.querySelectorAll('figcaption')).toHaveLength(0);
    expect(withCaption.querySelector('figcaption').textContent).toBe('test-caption');
  });

  it('renders given placeholder if image was not loaded', () => {
    render(<Image {...defaultProps} withPlaceholder placeholder="test-placeholder" />);
    expect(screen.getByText('test-placeholder')).toBeInTheDocument();
  });
});
