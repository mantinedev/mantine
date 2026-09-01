import { renderWithAct, screen } from '@mantine-tests/core';
import { LightboxWrapper } from '../test-utils';
import { LightboxCaption } from './LightboxCaption';

describe('@mantine/lightbox/LightboxCaption', () => {
  it('renders caption from current slide data', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0}>
        <LightboxCaption />
      </LightboxWrapper>
    );
    expect(screen.getByText('Caption 1')).toBeInTheDocument();
  });

  it('renders caption for second slide when currentIndex is 1', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={1}>
        <LightboxCaption />
      </LightboxWrapper>
    );
    expect(screen.getByText('Caption 2')).toBeInTheDocument();
  });

  it('renders nothing when current slide has no caption', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={2}>
        <LightboxCaption />
      </LightboxWrapper>
    );
    expect(document.querySelector('.mantine-Lightbox-caption')).not.toBeInTheDocument();
  });

  it('overrides slide caption with children prop', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0}>
        <LightboxCaption>Custom caption</LightboxCaption>
      </LightboxWrapper>
    );
    expect(screen.getByText('Custom caption')).toBeInTheDocument();
    expect(screen.queryByText('Caption 1')).not.toBeInTheDocument();
  });

  it('renders children even when slide has no caption', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={2}>
        <LightboxCaption>Fallback caption</LightboxCaption>
      </LightboxWrapper>
    );
    expect(screen.getByText('Fallback caption')).toBeInTheDocument();
  });
});
