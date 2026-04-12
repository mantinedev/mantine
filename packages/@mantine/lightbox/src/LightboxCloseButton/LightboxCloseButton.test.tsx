import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { LightboxCloseButton } from './LightboxCloseButton';
import { LightboxWrapper } from '../test-utils';

describe('@mantine/lightbox/LightboxCloseButton', () => {
  it('renders with correct aria-label', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxCloseButton />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Close lightbox')).toBeInTheDocument();
  });

  it('calls onClose when clicked', async () => {
    const onClose = jest.fn();
    await renderWithAct(
      <LightboxWrapper onClose={onClose}>
        <LightboxCloseButton />
      </LightboxWrapper>
    );

    await userEvent.click(screen.getByLabelText('Close lightbox'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
