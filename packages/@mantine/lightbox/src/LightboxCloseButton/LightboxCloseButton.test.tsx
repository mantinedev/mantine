import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { LightboxWrapper } from '../test-utils';
import { LightboxCloseButton } from './LightboxCloseButton';

describe('@mantine/lightbox/LightboxCloseButton', () => {
  it('uses closeLabel as aria-label', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxCloseButton />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('supports localizing the label with the labels prop', async () => {
    await renderWithAct(
      <LightboxWrapper labels={{ closeLabel: 'Zamknij' }}>
        <LightboxCloseButton />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Zamknij')).toBeInTheDocument();
  });

  it('allows overriding aria-label directly', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxCloseButton aria-label="Dismiss" />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Dismiss')).toBeInTheDocument();
  });

  it('calls onClose when clicked', async () => {
    const onClose = jest.fn();
    await renderWithAct(
      <LightboxWrapper onClose={onClose}>
        <LightboxCloseButton />
      </LightboxWrapper>
    );

    await userEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the given onClick handler in addition to onClose', async () => {
    const onClose = jest.fn();
    const onClick = jest.fn();
    await renderWithAct(
      <LightboxWrapper onClose={onClose}>
        <LightboxCloseButton onClick={onClick} />
      </LightboxWrapper>
    );

    await userEvent.click(screen.getByLabelText('Close'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
