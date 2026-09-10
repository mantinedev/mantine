import { SmileyIcon } from '@phosphor-icons/react';
import { render, tests } from '@mantine-tests/core';
import { Notification, NotificationProps, NotificationStylesNames } from './Notification';

const getRoot = (container: HTMLElement) => container.querySelector('.mantine-Notification-root');

const defaultProps: NotificationProps = {
  title: 'test-notification',
  children: 'test-description',
  closeButtonProps: { title: 'test-close' },
  icon: <SmileyIcon size={18} />,
};

describe('@mantine/core/Notification', () => {
  tests.axe([<Notification {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<NotificationProps, NotificationStylesNames>({
    component: Notification,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Notification',
    stylesApiSelectors: ['root', 'icon', 'body', 'title', 'description', 'closeButton'],
  });

  it('renders close button based on withCloseButton prop', () => {
    const { container, rerender } = render(
      <Notification {...defaultProps} withCloseButton={false} />
    );
    expect(container.querySelector('.mantine-Notification-closeButton')).not.toBeInTheDocument();

    rerender(<Notification {...defaultProps} withCloseButton />);
    expect(container.querySelector('.mantine-Notification-closeButton')).toBeInTheDocument();
  });

  it('renders given icon', () => {
    const { container, rerender } = render(<Notification {...defaultProps} icon="test-icon" />);
    expect(container.querySelector('.mantine-Notification-icon')).toHaveTextContent('test-icon');
    rerender(<Notification {...defaultProps} icon={null} />);
    expect(container.querySelector('.mantine-Notification-icon')).not.toBeInTheDocument();
  });

  it('displays loader when loading prop is true', () => {
    const { container, rerender } = render(<Notification {...defaultProps} loading />);
    expect(container.querySelector('.mantine-Notification-loader')).toBeInTheDocument();

    rerender(<Notification {...defaultProps} loading={false} />);
    expect(container.querySelector('.mantine-Notification-loader')).not.toBeInTheDocument();
  });

  it('renders given title', () => {
    const { container } = render(<Notification {...defaultProps} title="test-title" />);
    expect(container.querySelector('.mantine-Notification-title')).toHaveTextContent('test-title');
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<Notification {...defaultProps} withBorder />);
    expect(container.querySelector('.mantine-Notification-root')).toHaveAttribute(
      'data-with-border'
    );

    rerender(<Notification {...defaultProps} withBorder={false} />);
    expect(container.querySelector('.mantine-Notification-root')).not.toHaveAttribute(
      'data-with-border'
    );
  });

  it('sets data-with-icon attribute based on icon prop', () => {
    const { container, rerender } = render(<Notification {...defaultProps} icon="test-icon" />);
    expect(container.querySelector('.mantine-Notification-root')).toHaveAttribute('data-with-icon');

    rerender(<Notification {...defaultProps} icon={null} loading={false} />);
    expect(container.querySelector('.mantine-Notification-root')).not.toHaveAttribute(
      'data-with-icon'
    );
  });

  it('sets data-with-title attribute on description based on title prop', () => {
    const { container, rerender } = render(<Notification {...defaultProps} title="test-title" />);
    expect(container.querySelector('.mantine-Notification-description')).toHaveAttribute(
      'data-with-title'
    );

    rerender(<Notification {...defaultProps} title={null} />);
    expect(container.querySelector('.mantine-Notification-description')).not.toHaveAttribute(
      'data-with-title'
    );
  });

  it('renders a solid icon badge with contrast color by default', () => {
    const { container } = render(<Notification {...defaultProps} color="red" />);
    expect(getRoot(container)).toHaveAttribute('data-variant', 'filled');
    expect(getRoot(container)).toHaveStyle({
      '--notification-color': 'var(--mantine-color-red-filled)',
      '--notification-icon-bg': 'var(--mantine-color-red-filled)',
      '--notification-icon-color': 'var(--mantine-color-white)',
    });
  });

  it('uses variantColorResolver colors for the light variant', () => {
    const { container } = render(<Notification {...defaultProps} color="red" variant="light" />);
    expect(getRoot(container)).toHaveStyle({
      '--notification-icon-bg': 'var(--mantine-color-red-light)',
      '--notification-icon-color': 'var(--mantine-color-red-light-color)',
    });
  });

  it('renders the icon without background in the text shade for the transparent variant', () => {
    const { container } = render(
      <Notification {...defaultProps} color="red" variant="transparent" />
    );
    expect(getRoot(container)).toHaveStyle({
      '--notification-icon-bg': 'transparent',
      '--notification-icon-color': 'var(--mantine-color-red-text)',
    });
  });

  it('uses the exact shade for the transparent variant icon when color includes a shade', () => {
    const { container } = render(
      <Notification {...defaultProps} color="red.4" variant="transparent" />
    );
    expect(getRoot(container)).toHaveStyle({
      '--notification-icon-color': 'var(--mantine-color-red-4)',
    });
  });

  it('sets data-variant attribute on root and icon elements', () => {
    const { container } = render(<Notification {...defaultProps} variant="light" />);
    expect(getRoot(container)).toHaveAttribute('data-variant', 'light');
    expect(container.querySelector('.mantine-Notification-icon')).toHaveAttribute(
      'data-variant',
      'light'
    );
  });

  it('keeps variantColorResolver output for unknown variants', () => {
    const { container } = render(<Notification {...defaultProps} color="red" variant="gradient" />);
    expect(getRoot(container)).toHaveStyle({
      '--notification-icon-color': 'var(--mantine-color-white)',
    });
  });

  it('sizes and colors the loader with notification variables unless loaderProps override them', () => {
    const { container, rerender } = render(<Notification {...defaultProps} color="red" loading />);
    expect(container.querySelector('.mantine-Notification-loader')).toHaveStyle({
      '--loader-size': 'var(--notification-icon-size)',
      '--loader-color': 'var(--notification-color)',
    });

    rerender(
      <Notification {...defaultProps} loading loaderProps={{ size: 'xs', color: 'teal' }} />
    );
    expect(container.querySelector('.mantine-Notification-loader')).toHaveStyle({
      '--loader-size': 'var(--loader-size-xs)',
      '--loader-color': 'var(--mantine-color-teal-filled)',
    });
  });
});
