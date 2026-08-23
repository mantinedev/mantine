import { renderWithAct, screen } from '@mantine-tests/core';
import { LightboxNavigation } from './LightboxNavigation';
import { LightboxWrapper, testSlides } from '../test-utils';

describe('@mantine/lightbox/LightboxNavigation', () => {
  it('renders previous and next buttons', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
  });

  it('disables previous button on first slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('tabindex', '-1');
  });

  it('does not disable next button on first slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Next slide')).not.toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('tabindex', '0');
  });

  it('disables next button on last slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={testSlides.length - 1}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('tabindex', '-1');
  });

  it('does not disable previous button on last slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={testSlides.length - 1}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).not.toHaveAttribute('data-inactive');
  });

  it('does not disable either button when loop is enabled', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0} loop>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).not.toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Next slide')).not.toHaveAttribute('data-inactive');
  });

  it('does not disable either button on last slide when loop is enabled', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={testSlides.length - 1} loop>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).not.toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Next slide')).not.toHaveAttribute('data-inactive');
  });

  it('applies local classNames and styles to navigation buttons', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={1}>
        <LightboxNavigation
          classNames={{ navigationButton: 'test-nav-button' }}
          styles={{ navigationButton: { opacity: 0.5 } }}
        />
      </LightboxWrapper>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => {
      expect(button).toHaveClass('test-nav-button');
      expect(button).toHaveStyle({ opacity: '0.5' });
    });
  });
});
