import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Blockquote, BlockquoteProps } from './Blockquote';

const defaultProps: BlockquoteProps = {
  children: 'test-quote',
  cite: 'test-cite',
};

describe('@mantine/core/Blockquote', () => {
  checkAccessibility([<Blockquote {...defaultProps} />]);
  itRendersChildren(Blockquote, defaultProps);
  itSupportsProviderVariant(Blockquote, defaultProps, 'Blockquote');
  itSupportsSystemProps({
    component: Blockquote,
    props: defaultProps,
    displayName: '@mantine/core/Blockquote',
    refType: HTMLQuoteElement,
    providerName: 'Blockquote',
  });

  it('renders given icon based on icon prop', () => {
    render(<Blockquote icon="test-icon" />);
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });

  it('hides icon if icon prop set to null', () => {
    const { container } = render(<Blockquote icon={null} />);
    expect(container.querySelectorAll('.mantine-Blockquote-icon')).toHaveLength(0);
  });

  it('renders given cite based on cite prop', () => {
    render(<Blockquote cite="test-cite" />);
    expect(screen.getByText('test-cite')).toBeInTheDocument();
  });
});
