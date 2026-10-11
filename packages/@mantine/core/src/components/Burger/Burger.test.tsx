import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { VisuallyHidden } from '../VisuallyHidden';
import { Burger, BurgerProps, BurgerStylesNames } from './Burger';

const defaultProps: BurgerProps = {};

describe('@mantine/core/Burger', () => {
  tests.axe([
    <Burger aria-label="test" key="1" />,
    <Burger key="2">
      <VisuallyHidden>test</VisuallyHidden>
    </Burger>,
  ]);

  tests.itSupportsSystemProps<BurgerProps, BurgerStylesNames>({
    component: Burger,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Burger',
    stylesApiSelectors: ['root'],
  });

  it('sets data-opened attribute based on opened prop', () => {
    const { rerender } = render(<Burger opened />);
    expect(screen.getByRole('button').firstChild).toHaveAttribute('data-opened', 'true');

    rerender(<Burger opened={false} />);
    expect(screen.getByRole('button').firstChild).not.toHaveAttribute('data-opened');
  });

  it('sets aria-expanded attribute based on opened prop', () => {
    const { rerender } = render(<Burger aria-label="test" />);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-expanded');

    rerender(<Burger aria-label="test" opened />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');

    rerender(<Burger aria-label="test" opened={false} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders a button element that calls onClick', async () => {
    const spy = jest.fn();
    render(<Burger aria-label="Toggle navigation" onClick={spy} />);
    const button = screen.getByRole('button', { name: 'Toggle navigation' });
    expect(button.tagName).toBe('BUTTON');
    await userEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('allows overriding aria-expanded attribute', () => {
    render(<Burger aria-label="test" opened aria-expanded={false} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });
});
