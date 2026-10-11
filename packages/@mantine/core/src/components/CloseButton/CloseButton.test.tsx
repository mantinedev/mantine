import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { CloseButton, CloseButtonProps, CloseButtonStylesNames } from './CloseButton';
import { CloseIcon } from './CloseIcon';

const defaultProps: CloseButtonProps = {};

describe('@mantine/core/CloseButton', () => {
  tests.axe([<CloseButton aria-label="test" key="1" />]);

  tests.itSupportsFocusEvents<CloseButtonProps>({
    component: CloseButton,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<CloseButtonProps, CloseButtonStylesNames>({
    component: CloseButton,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/CloseButton',
    stylesApiSelectors: ['root'],
  });

  it('blocks click when disabled', async () => {
    const spy = jest.fn();
    render(<CloseButton aria-label="close" disabled onClick={spy} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled');
    await userEvent.click(button);
    expect(spy).not.toHaveBeenCalled();
  });

  it('sets data-disabled and aria-disabled without native disabled attribute when data-disabled is set', async () => {
    const spy = jest.fn();
    render(<CloseButton aria-label="close" data-disabled onClick={spy} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveAttribute('data-disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('allows rendering custom icon', () => {
    const { container } = render(<CloseButton icon={<span data-testid="test-icon" />} />);
    expect(container.querySelector('[data-testid="test-icon"]')).toBeInTheDocument();
  });
});

describe('@mantine/core/CloseIcon', () => {
  tests.itSupportsRef({ component: CloseIcon, refType: SVGSVGElement, props: {} });

  it('sets width and height to size prop', () => {
    const { container } = render(<CloseIcon size="10%" />);
    expect(container.querySelector('svg')).toHaveStyle({ width: '10%', height: '10%' });
  });
});
