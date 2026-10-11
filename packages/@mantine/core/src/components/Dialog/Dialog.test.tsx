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
    varsResolver: true,
    children: true,
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

  it('passes closeButtonProps to the close button and keeps onClose', async () => {
    const onClose = jest.fn();
    const onClick = jest.fn();
    render(
      <Dialog
        {...defaultProps}
        onClose={onClose}
        closeButtonProps={{ 'aria-label': 'Close dialog', onClick }}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Close dialog' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the close button when withCloseButton is not set', () => {
    render(<Dialog {...defaultProps} withCloseButton={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders nothing when opened is false', () => {
    render(<Dialog {...defaultProps} opened={false} />);
    expect(screen.queryByText('test-dialog')).not.toBeInTheDocument();
  });

  it('keeps the closed dialog mounted when keepMounted is set', () => {
    const { container } = render(
      <Dialog
        {...defaultProps}
        opened={false}
        keepMounted
        transitionProps={{ duration: 0, keepMountedMode: 'display-none' }}
      />,
      undefined,
      { env: 'default' }
    );
    expect(screen.getByText('test-dialog')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Dialog-root')).toHaveStyle({ display: 'none' });
  });
});
