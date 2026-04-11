import { createContextContainer, render } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourOverlay, TourOverlayProps } from './TourOverlay';

const TestContainer = createContextContainer(TourOverlay, Tour.Root, { active: true });

const defaultProps: TourOverlayProps = {};

describe('@mantine/core/TourOverlay', () => {
  it('has correct displayName', () => {
    expect(TourOverlay.displayName).toBe('@mantine/core/TourOverlay');
  });

  it('renders svg overlay', () => {
    const { container } = render(<TestContainer {...defaultProps} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders spotlight rect when targetRect is provided', () => {
    const { container } = render(
      <TestContainer
        {...defaultProps}
        targetRect={{ top: 100, left: 200, width: 50, height: 30 }}
      />
    );
    const maskRects = container.querySelectorAll('mask rect');
    expect(maskRects.length).toBe(2);
  });

  it('does not render spotlight rect when targetRect is null', () => {
    const { container } = render(<TestContainer {...defaultProps} targetRect={null} />);
    const maskRects = container.querySelectorAll('mask rect');
    expect(maskRects.length).toBe(1);
  });
});
