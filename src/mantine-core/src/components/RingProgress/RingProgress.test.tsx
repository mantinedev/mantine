import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { RingProgress, RingProgressProps } from './RingProgress';

const defaultProps: RingProgressProps = {
  sections: [{ value: 50, color: 'blue' }],
  label: 'test',
};

describe('@mantine/core/RingProgress', () => {
  itSupportsSystemProps({
    component: RingProgress,
    props: defaultProps,
    displayName: '@mantine/core/RingProgress',
    refType: HTMLDivElement,
  });

  it('renders given amount of curves', () => {
    const { container } = render(
      <RingProgress
        sections={[
          { value: 10, color: 'blue' },
          { value: 15, color: 'red' },
          { value: 10, color: 'green' },
        ]}
      />
    );

    // 3 sections + 1 root element
    expect(container.querySelectorAll('circle')).toHaveLength(4);
  });

  it('renders given label', () => {
    render(<RingProgress {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });
});
