import { createContextContainer, render, userEvent } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourOverlay, TourOverlayProps } from './TourOverlay';

const TestContainer = createContextContainer(TourOverlay, Tour.Root, {
  active: true,
  stepsCount: 1,
});
const PaddedContainer = createContextContainer(TourOverlay, Tour.Root, {
  active: true,
  stepsCount: 1,
  spotlightPadding: 10,
  spotlightRadius: 6,
});

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

  it('derives spotlight geometry from targetRect, spotlightPadding and spotlightRadius', () => {
    const { container } = render(
      <PaddedContainer
        {...defaultProps}
        targetRect={{ top: 100, left: 200, width: 50, height: 30 }}
      />
    );
    const spotlight = container.querySelector('mask rect:nth-child(2)')!;
    expect(spotlight).toHaveAttribute('x', '190');
    expect(spotlight).toHaveAttribute('y', '90');
    expect(spotlight).toHaveAttribute('width', '70');
    expect(spotlight).toHaveAttribute('height', '50');
    expect(spotlight).toHaveAttribute('rx', '6');
    expect(spotlight).toHaveAttribute('ry', '6');
  });

  it('keeps spotlightRadius={0}', () => {
    const Container = createContextContainer(TourOverlay, Tour.Root, {
      active: true,
      stepsCount: 1,
      spotlightRadius: 0,
    });
    const { container } = render(
      <Container targetRect={{ top: 100, left: 200, width: 50, height: 30 }} />
    );
    expect(container.querySelector('mask rect:nth-child(2)')).toHaveAttribute('rx', '0');
  });

  it('does not render spotlight rect when targetRect is null', () => {
    const { container } = render(<TestContainer {...defaultProps} targetRect={null} />);
    const maskRects = container.querySelectorAll('mask rect');
    expect(maskRects.length).toBe(1);
  });

  it('renders an even-odd hit path with a hole at targetRect when withInteraction is set', () => {
    const { container } = render(
      <PaddedContainer
        withInteraction
        targetRect={{ top: 100, left: 200, width: 50, height: 30 }}
      />
    );
    const svg = container.querySelector('svg')!;
    const hitPath = svg.querySelector(':scope > path')!;
    expect(svg).toHaveAttribute('data-with-overlay-interaction');
    expect(hitPath).toHaveAttribute('fill-rule', 'evenodd');
    expect(hitPath).toHaveStyle({ pointerEvents: 'auto' });
    expect(hitPath.getAttribute('d')).toBe(
      'M-100000 -100000H100000V100000H-100000Z' +
        'M196 90H254A6 6 0 0 1 260 96V134A6 6 0 0 1 254 140H196A6 6 0 0 1 190 134V96A6 6 0 0 1 196 90Z'
    );
  });

  it('does not render the hit path without withInteraction', () => {
    const { container } = render(
      <TestContainer targetRect={{ top: 100, left: 200, width: 50, height: 30 }} />
    );
    expect(container.querySelector('svg > path')).not.toBeInTheDocument();
  });

  it('closes on hit path click with withInteraction and closeOnOverlayClick', async () => {
    const onClose = jest.fn();
    const Container = createContextContainer(TourOverlay, Tour.Root, {
      active: true,
      stepsCount: 1,
      closeOnOverlayClick: true,
      onClose,
    });
    const { container } = render(
      <Container withInteraction targetRect={{ top: 100, left: 200, width: 50, height: 30 }} />
    );
    await userEvent.click(container.querySelector('svg > path')!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
