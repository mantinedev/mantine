import { render, tests } from '@mantine-tests/core';
import { UnstyledButton, UnstyledButtonProps, UnstyledButtonStylesNames } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@mantine/core/UnstyledButton', () => {
  tests.axe([
    <UnstyledButton aria-label="test" key="1" />,
    <UnstyledButton key="2">test</UnstyledButton>,
  ]);

  tests.itSupportsFocusEvents<UnstyledButtonProps>({
    component: UnstyledButton,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<UnstyledButtonProps, UnstyledButtonStylesNames>({
    component: UnstyledButton,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    size: true,
    variant: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/UnstyledButton',
    stylesApiSelectors: ['root'],
  });

  it('adds type="button" to root element if component="button"', () => {
    const { container: buttonContainer } = render(<UnstyledButton component="button" />);
    expect(buttonContainer.querySelector('button')).toHaveAttribute('type', 'button');

    const { container: divContainer } = render(<UnstyledButton component="div" />);
    expect(divContainer.querySelector('div')).not.toHaveAttribute('type');
  });
});
