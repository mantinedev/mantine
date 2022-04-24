import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Modal, ModalProps } from './Modal';

const defaultProps: ModalProps = {
  opened: true,
  withinPortal: false,
  onClose: () => {},
  title: 'test-modal',
  closeButtonLabel: 'test-close',
  children: 'test-modal',
};

describe('@mantine/core/Modal', () => {
  checkAccessibility([<Modal {...defaultProps} />]);
  itSupportsSystemProps({ component: Modal, props: defaultProps });
  itRendersChildren(Modal, defaultProps);

  it('uses the provided id prop on the root element', () => {
    const { container } = render(<Modal {...defaultProps} id="my-modal" />);
    expect(container.querySelectorAll('#my-modal')).toHaveLength(1);
  });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<Modal {...defaultProps} onClose={spy} />);
    userEvent.click(screen.getByLabelText('test-close'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders correct title', () => {
    render(<Modal {...defaultProps} title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('allows to hide close button', () => {
    const { container: withButton } = render(<Modal {...defaultProps} />);
    const { container: withoutButton } = render(
      <Modal {...defaultProps} withCloseButton={false} />
    );
    expect(withButton.querySelectorAll('.mantine-Modal-close')).toHaveLength(1);
    expect(withoutButton.querySelectorAll('.mantine-Modal-close')).toHaveLength(0);
  });

  it('does not render modal header if close button is hidden and title is not passed', () => {
    const { container: withHeader } = render(<Modal {...defaultProps} title="With header" />);
    const { container: withoutHeader } = render(
      <Modal {...defaultProps} title={null} withCloseButton={false} />
    );
    expect(withHeader.querySelectorAll('.mantine-Modal-header')).toHaveLength(1);
    expect(withoutHeader.querySelectorAll('.mantine-Modal-header')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Modal.displayName).toStrictEqual('@mantine/core/Modal');
  });
});
