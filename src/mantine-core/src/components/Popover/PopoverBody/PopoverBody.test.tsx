import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsOthers,
  itSupportsRef,
  checkAccessibility,
} from '@mantine/tests';
import { PopoverBody, PopoverBodyProps } from './PopoverBody';

const defaultProps: PopoverBodyProps = {
  onClose: () => {},
  withCloseButton: true,
  children: 'test-content',
  closeButtonLabel: 'test-label',
  title: 'test-title',
  shadow: 'sm',
  radius: 'sm',
  spacing: 'sm',
  titleId: 'test-title-id',
  bodyId: 'test-body-id',
};

describe('@mantine/core/PopoverBody', () => {
  checkAccessibility([<PopoverBody {...defaultProps} />]);
  itRendersChildren(PopoverBody, defaultProps);
  itSupportsOthers(PopoverBody, defaultProps);
  itSupportsRef(PopoverBody, defaultProps, HTMLDivElement);

  it('renders close button based on withCloseButton prop', () => {
    const { container: withCloseButton } = render(
      <PopoverBody {...defaultProps} withCloseButton />
    );
    const { container: withoutCloseButton } = render(
      <PopoverBody {...defaultProps} withCloseButton={false} />
    );

    expect(withCloseButton.querySelectorAll('.mantine-Popover-close')).toHaveLength(1);
    expect(withoutCloseButton.querySelectorAll('.mantine-Popover-close')).toHaveLength(0);
  });

  it('renders given title', () => {
    render(<PopoverBody {...defaultProps} title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(PopoverBody.displayName).toEqual('@mantine/core/PopoverBody');
  });
});
