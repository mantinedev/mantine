import React from 'react';
import { render, screen } from '@testing-library/react';
import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Text, TextProps } from './Text';

const defaultProps: TextProps<'div'> = {
  children: 'test-text',
};

const expectStyle = (props: TextProps<'div'>, style: Record<string, any>) => {
  render(<Text {...defaultProps} {...props} align="center" />);
  expect(screen.getByText('test-text')).toHaveStyle(style);
};

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, defaultProps);
  itIsPolymorphic(Text, defaultProps);
  itSupportsSystemProps({
    component: Text,
    props: defaultProps,
    displayName: '@mantine/core/Text',
    refType: HTMLDivElement,
  });

  it('sets text-align based on align prop', () => {
    expectStyle({ align: 'center' }, { textAlign: 'center' });
  });

  it('sets text-transform based on transform prop', () => {
    expectStyle({ transform: 'uppercase' }, { textTransform: 'uppercase' });
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
