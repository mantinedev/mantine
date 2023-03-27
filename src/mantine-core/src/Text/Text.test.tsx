import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { Text, TextProps } from './Text';

const defaultProps: TextProps = {
  children: 'test-text',
};

const expectStyle = (props: TextProps, style: Record<string, any>) => {
  render(<Text {...defaultProps} {...props} align="center" />);
  expect(screen.getByText('test-text')).toHaveStyle(style);
  document.body.innerHTML = '';
};

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, defaultProps);
  itIsPolymorphic(Text, defaultProps);
  itSupportsProviderVariant(Text, defaultProps, 'Text');
  itSupportsProviderSize(Text, defaultProps, 'Text');
  itSupportsSystemProps({
    component: Text,
    props: defaultProps,
    displayName: '@mantine/core/Text',
    refType: HTMLDivElement,
    providerName: 'Text',
  });

  it('renders as span when span prop is set', () => {
    const { container } = render(<Text span>test</Text>);
    expect((container.firstChild as HTMLElement).tagName).toBe('SPAN');
  });

  it('sets text-align based on align prop', () => {
    expectStyle({ align: 'center' }, { textAlign: 'center' });
  });

  it('sets text-transform based on transform prop', () => {
    expectStyle({ transform: 'uppercase' }, { textTransform: 'uppercase' });
  });

  it('sets font-style based on italic prop', () => {
    expectStyle({ italic: true }, { fontStyle: 'italic' });
  });

  it('sets text-decoration based on strikethrough and underline props', () => {
    expectStyle({ underline: true }, { textDecoration: 'underline' });
    expectStyle({ strikethrough: true }, { textDecoration: 'line-through' });
    expectStyle(
      { strikethrough: true, underline: true },
      { textDecoration: 'underline line-through' }
    );
  });

  it('sets line-height based on inline prop', () => {
    expectStyle({ inline: true }, { lineHeight: 1 });
  });

  it('sets font-weight based on weight prop', () => {
    expectStyle({ weight: 'bolder' }, { fontWeight: 'bolder' });
  });

  it('inherits text styles if inherit prop is true', () => {
    expectStyle(
      { inherit: true },
      { fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }
    );
  });
});
