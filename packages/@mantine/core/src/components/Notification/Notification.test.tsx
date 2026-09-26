import { SmileyIcon } from '@phosphor-icons/react';
import { render, tests } from '@mantine-tests/core';
import { Notification, NotificationProps, NotificationStylesNames } from './Notification';

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
});
