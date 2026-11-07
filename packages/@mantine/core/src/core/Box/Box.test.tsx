import { render, screen, tests } from '@mantine-tests/core';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@mantine/core/Box', () => {
  tests.itSupportsSystemProps<BoxProps>({
    component: Box,
    props: defaultProps,
    polymorphic: true,
    children: true,
    withProps: false,
    extend: false,
    classes: false,
    displayName: '@mantine/core/Box',
    providerName: null,
  });

  it('sets data-variant attribute based on variant prop', () => {
    render(<Box variant="test">test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-variant', 'test');
  });

  it('sets data-size based on size prop', () => {
    const { rerender } = render(<Box size="xs">test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-size', 'xs');

    rerender(<Box size="5rem">test</Box>);
    expect(screen.getByText('test')).not.toHaveAttribute('data-size');

    rerender(<Box size={5}>test</Box>);
    expect(screen.getByText('test')).not.toHaveAttribute('data-size');
  });

  it('supports mod prop', () => {
    const { rerender } = render(<Box mod={{ 'data-test': 'test' }}>test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-test', 'test');

    rerender(
      <Box
        mod={[
          'test',
          { 'data-test-2': 'test-2' },
          [[[[[[{ 'data-test-2': false, 'data-test-3': null }]]]]]],
        ]}
      >
        test
      </Box>
    );
    expect(screen.getByText('test')).toHaveAttribute('data-test');
    expect(screen.getByText('test')).toHaveAttribute('data-test-2', 'test-2');
    expect(screen.getByText('test')).not.toHaveAttribute('data-test-3');
  });

  it('applies specific style props after shorthand ones regardless of prop order', () => {
    render(
      <Box mt="xl" m="xs">
        test
      </Box>
    );
    expect(screen.getByText('test').style.marginTop).toBe('var(--mantine-spacing-xl)');
  });

  it('merges className with visibility classes', () => {
    const { rerender } = render(<Box className="custom">test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('class', 'custom');

    rerender(
      <>
        <Box className="custom" hiddenFrom="sm" lightHidden>
          test
        </Box>
      </>
    );
    expect(screen.getByText('test')).toHaveClass(
      'custom',
      'mantine-hidden-from-sm',
      'mantine-light-hidden'
    );
  });
});
