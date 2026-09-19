import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { Alert, AlertProps, AlertStylesNames } from './Alert';

const getRoot = (container: HTMLElement) => container.querySelector('.mantine-Alert-root');

const defaultProps: AlertProps = {
  withCloseButton: true,
  icon: 'test-icon',
  closeButtonLabel: 'test-close',
  title: 'test-title',
  children: 'test-children',
};

describe('@mantine/core/Alert', () => {
  tests.axe([
    <Alert key="1">Alert message</Alert>,
    <Alert title="Alert title" key="2">
      Alert message
    </Alert>,
    <Alert withCloseButton closeButtonLabel="test-close" key="3">
      Alert message
    </Alert>,
  ]);

  tests.itSupportsSystemProps<AlertProps, AlertStylesNames>({
    component: Alert,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Alert',
    stylesApiSelectors: [
      'root',
      'body',
      'label',
      'title',
      'icon',
      'wrapper',
      'message',
      'closeButton',
    ],
  });

  it('does not render close button by default', () => {
    render(<Alert>test</Alert>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders close button and calls onClose when it is clicked', async () => {
    const onClose = jest.fn();
    render(
      <Alert withCloseButton onClose={onClose}>
        test
      </Alert>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('sets Close as the default close button aria-label', () => {
    render(<Alert withCloseButton>test</Alert>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
  });

  it('supports closeButtonLabel and closeButtonProps to override close button aria-label', () => {
    const { rerender } = render(
      <Alert withCloseButton closeButtonLabel="dismiss">
        test
      </Alert>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'dismiss');

    rerender(
      <>
        <Alert withCloseButton closeButtonLabel="dismiss" closeButtonProps={{ 'aria-label': 'x' }}>
          test
        </Alert>
      </>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'x');
  });

  it('calls both closeButtonProps.onClick and onClose when close button is clicked', async () => {
    const onClick = jest.fn();
    const onClose = jest.fn();
    render(
      <Alert withCloseButton onClose={onClose} closeButtonProps={{ onClick }}>
        test
      </Alert>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders title and icon', () => {
    const { container } = render(
      <Alert title="test-title" icon="test-icon">
        test-children
      </Alert>
    );

    expect(screen.getByText('test-title')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Alert-icon')).toHaveTextContent('test-icon');
    expect(container.querySelector('.mantine-Alert-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('sets role, aria-labelledby and aria-describedby', () => {
    const { container } = render(<Alert title="test-title">test-children</Alert>);
    const root = getRoot(container)!;

    expect(root).toHaveAttribute('role', 'alert');
    expect(root.getAttribute('aria-labelledby')).toBe(
      container.querySelector('.mantine-Alert-label')!.id
    );
    expect(root.getAttribute('aria-describedby')).toBe(
      container.querySelector('.mantine-Alert-message')!.id
    );
  });

  it('does not set aria-labelledby and aria-describedby when title and children are not given', () => {
    const { container } = render(<Alert />);
    const root = getRoot(container)!;

    expect(root).not.toHaveAttribute('aria-labelledby');
    expect(root).not.toHaveAttribute('aria-describedby');
  });

  it('supports role override', () => {
    const { container } = render(<Alert role="status">test</Alert>);
    expect(getRoot(container)).toHaveAttribute('role', 'status');
  });

  it('softens the light variant background and derives the border from the accent color', () => {
    const { container } = render(<Alert color="red">test</Alert>);
    expect(getRoot(container)).toHaveStyle({
      '--alert-bg':
        'color-mix(in srgb, var(--mantine-color-red-light) 60%, var(--mantine-color-body))',
      '--alert-bd':
        'calc(0.0625rem * var(--mantine-scale)) solid color-mix(in srgb, var(--mantine-color-red-text) 30%, transparent)',
    });
  });

  it('uses neutral text and the text role token for the icon on tinted and neutral variants', () => {
    const { container } = render(
      <Alert color="red" variant="default">
        test
      </Alert>
    );
    expect(getRoot(container)).toHaveStyle({
      '--alert-color': 'var(--mantine-color-text)',
      '--alert-title-color': 'var(--mantine-color-bright)',
      '--alert-icon-color': 'var(--mantine-color-red-text)',
    });
  });

  it('uses the exact shade for the icon when color includes a shade', () => {
    const { container } = render(<Alert color="red.4">test</Alert>);
    expect(getRoot(container)).toHaveStyle({
      '--alert-icon-color': 'var(--mantine-color-red-4)',
    });
  });

  it('uses the contrast color for text, title and icon on the filled variant', () => {
    const { container } = render(
      <Alert color="red" variant="filled">
        test
      </Alert>
    );
    expect(getRoot(container)).toHaveStyle({
      '--alert-bg': 'var(--mantine-color-red-filled)',
      '--alert-color': 'var(--mantine-color-white)',
      '--alert-title-color': 'var(--mantine-color-white)',
      '--alert-icon-color': 'var(--mantine-color-white)',
    });
  });

  it('softens the outline variant border', () => {
    const { container } = render(
      <Alert color="red" variant="outline">
        test
      </Alert>
    );
    expect(getRoot(container)).toHaveStyle({
      '--alert-bg': 'transparent',
      '--alert-bd':
        'calc(0.0625rem * var(--mantine-scale)) solid color-mix(in srgb, var(--mantine-color-red-text) 60%, transparent)',
    });
  });

  it('sets size variables based on size prop', () => {
    const { container } = render(<Alert size="lg">test</Alert>);
    expect(getRoot(container)).toHaveStyle({
      '--alert-padding': 'var(--alert-padding-lg)',
      '--alert-fz': 'var(--alert-fz-lg)',
      '--alert-icon-size': 'var(--alert-icon-size-lg)',
      '--alert-gap': 'var(--alert-gap-lg)',
    });
  });

  it('scales close button with size prop', () => {
    const { container } = render(
      <Alert size="lg" withCloseButton closeButtonLabel="close">
        test
      </Alert>
    );
    expect(getRoot(container)).toHaveStyle({
      '--alert-close-size': 'var(--alert-close-size-lg)',
    });
    expect(container.querySelector('.mantine-Alert-closeButton')).toHaveStyle({
      '--cb-size': 'var(--alert-close-size)',
    });
  });

  it('supports custom size keys', () => {
    const { container } = render(<Alert size="xxl">test</Alert>);
    expect(getRoot(container)).toHaveStyle({
      '--alert-padding': 'var(--alert-padding-xxl)',
      '--alert-close-size': 'var(--alert-close-size-xxl)',
    });
  });

  it('keeps variantColorResolver output as is for unknown variants', () => {
    const { container } = render(
      <Alert color="red" variant="gradient">
        test
      </Alert>
    );
    expect(getRoot(container)).toHaveStyle({
      '--alert-color': 'var(--mantine-color-white)',
      '--alert-title-color': 'var(--mantine-color-white)',
      '--alert-icon-color': 'var(--mantine-color-white)',
    });
  });
});
