import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { MantineModal, Modal, ModalProps } from './Modal';

const defaultProps: ModalProps = {
  opened: true,
  onClose: () => {},
  title: 'test-modal',
  closeButtonLabel: 'test-close',
  children: 'test-modal',
};

describe('@mantine/core/Modal', () => {
  checkAccessibility([<MantineModal {...defaultProps} />]);
  itSupportsSystemProps({ component: MantineModal, props: defaultProps });
  itRendersChildren(MantineModal, defaultProps);

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<MantineModal {...defaultProps} onClose={spy} />);
    userEvent.click(screen.getByLabelText('test-close'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders correct title', () => {
    render(<MantineModal {...defaultProps} title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('allows to hide close button', () => {
    const { container: withButton } = render(<MantineModal {...defaultProps} />);
    const { container: withoutButton } = render(<MantineModal {...defaultProps} hideCloseButton />);
    expect(withButton.querySelectorAll('.mantine-Modal-close')).toHaveLength(1);
    expect(withoutButton.querySelectorAll('.mantine-Modal-close')).toHaveLength(0);
  });

  it('does not render modal header if close button is hidden and title is not passed', () => {
    const { container: withHeader } = render(
      <MantineModal {...defaultProps} title="With header" />
    );
    const { container: withoutHeader } = render(
      <MantineModal {...defaultProps} title={null} hideCloseButton />
    );
    expect(withHeader.querySelectorAll('.mantine-Modal-header')).toHaveLength(1);
    expect(withoutHeader.querySelectorAll('.mantine-Modal-header')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Modal.displayName).toEqual('@mantine/core/Modal');
  });
});
