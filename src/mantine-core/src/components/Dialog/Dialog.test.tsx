import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsRef, itSupportsSystemProps } from '@mantine/tests';
import { Dialog, MantineDialog, DialogProps } from './Dialog';

const defaultProps: DialogProps = {
  opened: true,
  transitionDuration: 0,
  withCloseButton: true,
};

describe('@mantine/core/Dialog', () => {
  itRendersChildren(MantineDialog, defaultProps);
  itSupportsRef(Dialog, defaultProps, HTMLDivElement);
  itSupportsSystemProps({ component: MantineDialog, props: defaultProps });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<MantineDialog opened withCloseButton onClose={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Dialog.displayName).toEqual('@mantine/core/Dialog');
  });
});
