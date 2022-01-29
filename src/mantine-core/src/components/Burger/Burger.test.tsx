import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsFocusEvents, itSupportsSystemProps } from '@mantine/tests';
import { Burger, BurgerProps } from './Burger';

const defaultProps: BurgerProps = {
  opened: true,
  title: 'Close navigation',
};

describe('@mantine/core/Burger', () => {
  checkAccessibility([<Burger {...defaultProps} />]);
  itSupportsFocusEvents(Burger, defaultProps, 'button');
  itSupportsSystemProps({
    component: Burger,
    props: defaultProps,
    displayName: '@mantine/core/Burger',
    refType: HTMLButtonElement,
  });

  it('renders cross when opened prop is true', () => {
    const { container: opened } = render(<Burger opened />);
    const { container: closed } = render(<Burger opened={false} />);
    expect(opened.querySelectorAll('.mantine-Burger-opened')).toHaveLength(1);
    expect(closed.querySelectorAll('.mantine-Burger-opened')).toHaveLength(0);
  });
});
