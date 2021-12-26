import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps, itSupportsFocusEvents } from '@mantine/tests';
import { CloseButton, CloseButtonProps } from './CloseButton';

const defaultProps: CloseButtonProps = {};

describe('@mantine/core/CloseButton', () => {
  itSupportsFocusEvents(CloseButton, defaultProps, '.mantine-ActionIcon-root');
  itSupportsSystemProps({
    component: CloseButton as any,
    props: defaultProps,
    displayName: '@mantine/core/CloseButton',
    refType: HTMLButtonElement,
  });

  checkAccessibility([
    render(<CloseButton aria-label="test" />),
    render(<CloseButton title="test" />),
  ]);

  it('sets width and height on CloseIcon based on iconSize prop', () => {
    const { container } = render(<CloseButton iconSize={45} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('45');
    expect(svg.getAttribute('height')).toBe('45');
  });
});
