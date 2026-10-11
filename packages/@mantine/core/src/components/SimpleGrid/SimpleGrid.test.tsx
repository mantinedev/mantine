import { render, tests } from '@mantine-tests/core';
import { SimpleGrid, SimpleGridProps, SimpleGridStylesNames } from './SimpleGrid';

const defaultProps: SimpleGridProps = {};

describe('@mantine/core/SimpleGrid', () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/SimpleGrid',
    stylesApiSelectors: ['root'],
  });

  it('does not set data-auto-cols without minColWidth', () => {
    const { container } = render(<SimpleGrid cols={3} autoFlow="auto-fit" />);
    expect(container.querySelector('.mantine-SimpleGrid-root')).not.toHaveAttribute(
      'data-auto-cols'
    );
  });

  it('sets data-auto-cols="auto-fill" by default when minColWidth is set', () => {
    const { container } = render(<SimpleGrid minColWidth={200} />);
    expect(container.querySelector('.mantine-SimpleGrid-root')).toHaveAttribute(
      'data-auto-cols',
      'auto-fill'
    );
  });

  it('sets data-auto-cols from autoFlow prop', () => {
    const { container } = render(<SimpleGrid minColWidth={200} autoFlow="auto-fit" />);
    expect(container.querySelector('.mantine-SimpleGrid-root')).toHaveAttribute(
      'data-auto-cols',
      'auto-fit'
    );
  });

  it('uses auto columns when both minColWidth and cols are set', () => {
    const { container } = render(<SimpleGrid minColWidth="10rem" cols={4} />);
    expect(container.querySelector('.mantine-SimpleGrid-root')).toHaveAttribute(
      'data-auto-cols',
      'auto-fill'
    );
  });

  it('does not render container wrapper with type="media"', () => {
    const { container } = render(<SimpleGrid />);
    expect(container.querySelector('.mantine-SimpleGrid-container')).toBeNull();
  });

  it('renders root inside container wrapper with type="container"', () => {
    const { container } = render(<SimpleGrid type="container" minColWidth={200} />);
    const wrapper = container.querySelector('.mantine-SimpleGrid-container');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper!.firstElementChild).toHaveClass('mantine-SimpleGrid-root');
    expect(wrapper!.firstElementChild).toHaveAttribute('data-auto-cols', 'auto-fill');
  });
});
