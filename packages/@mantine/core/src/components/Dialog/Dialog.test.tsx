import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Dialog, DialogProps, DialogStylesNames } from './Dialog';

const defaultProps: DialogProps = {
  opened: true,
  withinPortal: false,
  withCloseButton: true,
  children: 'test-dialog',
  transitionProps: { duration: 0, transition: 'fade' },
};

describe('@mantine/core/Dialog', () => {
  tests.itSupportsSystemProps<DialogProps, DialogStylesNames>({
    component: Dialog,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Dialog',
    stylesApiSelectors: ['root', 'closeButton'],
    selector: '.mantine-Dialog-root',
  });

  it('calls onClose when the close button is clicked', async () => {
    const spy = jest.fn();
    render(<Dialog opened withCloseButton onClose={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
