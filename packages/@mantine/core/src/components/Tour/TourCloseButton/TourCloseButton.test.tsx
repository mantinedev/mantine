import { createContextContainer, render, screen, userEvent } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourCloseButton, TourCloseButtonProps } from './TourCloseButton';

const TestContainer = createContextContainer(TourCloseButton, Tour.Root, {
  active: true,
  stepsCount: 1,
});

const defaultProps: TourCloseButtonProps = {};

describe('@mantine/core/TourCloseButton', () => {
  it('has correct displayName', () => {
    expect(TourCloseButton.displayName).toBe('@mantine/core/TourCloseButton');
  });

  it('renders close button with aria-label', () => {
    render(<TestContainer {...defaultProps} />);
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('calls context close on click', async () => {
    const onClose = jest.fn();
    const Container = createContextContainer(TourCloseButton, Tour.Root, {
      active: true,
      stepsCount: 1,
      onClose,
    });
    render(<Container {...defaultProps} />);
    await userEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});
