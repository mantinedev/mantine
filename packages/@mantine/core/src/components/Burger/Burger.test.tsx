import { render, screen, tests } from '@mantine-tests/core';
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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    children: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/Burger',
    stylesApiSelectors: ['root'],
  });

  it('sets data-opened attribute based on opened prop', () => {
    const { rerender } = render(<Burger opened />);
    expect(screen.getByRole('button').firstChild).toHaveAttribute('data-opened', 'true');

    rerender(<Burger opened={false} />);
    expect(screen.getByRole('button').firstChild).not.toHaveAttribute('data-opened');
  });
});
