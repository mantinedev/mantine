import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { MantineDrawer, Drawer, DrawerProps } from './Drawer';

const defaultProps: DrawerProps = {
  opened: true,
  onClose: () => {},
};

describe('@mantine/core/Drawer', () => {
  itSupportsSystemProps({ component: MantineDrawer, props: defaultProps });
  checkAccessibility([
    <MantineDrawer
      {...defaultProps}
      aria-labelledby="drawer-title"
      aria-describedby="drawer-body"
      closeButtonLabel="Close drawer"
    >
      <h1 id="drawer-title">Title</h1>
      <div id="drawer-body">Body</div>
    </MantineDrawer>,
  ]);

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<MantineDrawer {...defaultProps} onClose={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders correct title', () => {
    render(<MantineDrawer {...defaultProps} title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('allows to hide close button with hideCloseButton prop', () => {
    const { container: withCloseButton } = render(<MantineDrawer {...defaultProps} />);
    const { container: withoutCloseButton } = render(
      <MantineDrawer {...defaultProps} hideCloseButton />
    );

    expect(withoutCloseButton.querySelectorAll('.mantine-Drawer-closeButton')).toHaveLength(0);
    expect(withCloseButton.querySelectorAll('.mantine-Drawer-closeButton')).toHaveLength(1);
  });

  it('has correct displayName', () => {
    expect(Drawer.displayName).toEqual('@mantine/core/Drawer');
  });
});
