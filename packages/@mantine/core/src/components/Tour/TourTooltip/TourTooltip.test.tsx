import { createRef } from 'react';
import { createContextContainer, renderWithAct, screen } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourTooltip, TourTooltipProps } from './TourTooltip';

const TestContainer = createContextContainer(TourTooltip, Tour.Root, {
  active: true,
  stepsCount: 1,
});

const defaultProps: TourTooltipProps = {
  mounted: true,
  children: 'Tooltip content',
};

describe('@mantine/core/TourTooltip', () => {
  it('has correct displayName', () => {
    expect(TourTooltip.displayName).toBe('@mantine/core/TourTooltip');
  });

  it('forwards ref to the rendered element', async () => {
    const ref = createRef<HTMLDivElement>();
    await renderWithAct(
      <Tour.Root active stepsCount={1}>
        <TourTooltip {...defaultProps} ref={ref} />
      </Tour.Root>
    );
    expect(ref.current).toBe(screen.getByRole('dialog'));
  });

  it('renders as a dialog labelled with the step counter when there is no title', async () => {
    await renderWithAct(<TestContainer {...defaultProps} />);
    expect(screen.getByRole('dialog', { name: '1 of 1' })).toBeInTheDocument();
  });

  it('is labelled by Tour.Title and described by Tour.Body when they are rendered', async () => {
    await renderWithAct(
      <TestContainer {...defaultProps}>
        <Tour.Title>Title text</Tour.Title>
        <Tour.Body>Body text</Tour.Body>
      </TestContainer>
    );
    const dialog = screen.getByRole('dialog', { name: 'Title text' });
    expect(dialog).toHaveAccessibleDescription('Body text');
  });

  it('sets data-centered when targetElement is not provided', async () => {
    await renderWithAct(<TestContainer {...defaultProps} />);
    expect(screen.getByRole('dialog')).toHaveAttribute('data-centered');
  });

  it('renders nothing when mounted is false', async () => {
    await renderWithAct(<TestContainer {...defaultProps} mounted={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
