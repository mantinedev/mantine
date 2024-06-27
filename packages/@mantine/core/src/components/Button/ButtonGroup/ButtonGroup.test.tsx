import { render, screen, tests } from '@mantine-tests/core';
import { ButtonGroup, ButtonGroupProps, ButtonGroupStylesNames } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@mantine/core/ButtonGroup', () => {
  tests.itSupportsSystemProps<ButtonGroupProps, ButtonGroupStylesNames>({
    component: ButtonGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ButtonGroup',
    stylesApiSelectors: ['group'],
  });

  it('adds data-orientation attribute to root element based on orientation prop', () => {
    render(<ButtonGroup orientation="vertical" />);
    expect(screen.getByRole('group')).toHaveAttribute('data-orientation', 'vertical');
  });
});
