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

  it('does not set data-size for numeric size', () => {
    render(<Box size={5}>test</Box>);
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
});
