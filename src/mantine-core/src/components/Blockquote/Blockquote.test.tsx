import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Blockquote } from './Blockquote';
import { Blockquote as BlockquoteStylesApi } from './styles.api';

const defaultProps = {};

describe('@mantine/core/Blockquote', () => {
  itRendersChildren(Blockquote, defaultProps);
  itSupportsClassName(Blockquote, defaultProps);
  itSupportsOthers(Blockquote, defaultProps);
  itSupportsStyle(Blockquote, defaultProps);
  itSupportsMargins(Blockquote, defaultProps);
  itSupportsSx(Blockquote, defaultProps);
  itSupportsRef(Blockquote, defaultProps, HTMLQuoteElement);
  itSupportsStylesApi(
    Blockquote,
    { cite: 'test-cite', children: 'test-quote' },
    Object.keys(BlockquoteStylesApi),
    'Blockquote'
  );

  checkAccessibility([
    render(<Blockquote>test-quote</Blockquote>),
    render(<Blockquote cite="test-cite">test-quote</Blockquote>),
  ]);

  it('renders given icon based on icon prop', () => {
    const withIcon = shallow(<Blockquote icon="$" />);
    const withoutIcon = shallow(<Blockquote icon={null} />);

    expect(withIcon.render().find('.mantine-Blockquote-icon').text()).toBe('$');
    expect(withoutIcon.render().find('.mantine-Blockquote-icon')).toHaveLength(0);
  });

  it('renders given cite based on cite prop', () => {
    const withCite = shallow(<Blockquote cite="test-cite" />);
    const withoutCite = shallow(<Blockquote />);

    expect(withCite.render().find('cite').text()).toBe('test-cite');
    expect(withoutCite.render().find('cite')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Blockquote.displayName).toEqual('@mantine/core/Blockquote');
  });
});
