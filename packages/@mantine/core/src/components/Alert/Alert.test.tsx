import { render, tests } from '@mantine-tests/core';
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
