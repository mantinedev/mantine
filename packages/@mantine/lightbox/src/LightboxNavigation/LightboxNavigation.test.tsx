import { renderWithAct, screen } from '@mantine-tests/core';
import { LightboxWrapper, testSlides } from '../test-utils';
import { LightboxNavigation } from './LightboxNavigation';

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

  it('marks previous button inactive but keeps it focusable on first slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={0}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('tabindex', '0');
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

  it('marks next button inactive but keeps it focusable on last slide', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={testSlides.length - 1}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('data-inactive');
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('tabindex', '0');
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

  it('renders nothing when there is only one slide', async () => {
    await renderWithAct(
      <LightboxWrapper slides={[testSlides[0]]}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument();
  });

  it('renders nothing when there are no slides', async () => {
    await renderWithAct(
      <LightboxWrapper slides={[]}>
        <LightboxNavigation />
      </LightboxWrapper>
    );
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
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
