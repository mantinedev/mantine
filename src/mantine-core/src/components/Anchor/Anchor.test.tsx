import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Anchor } from './Anchor';

const defaultProps = {};

describe('@mantine/core/Anchor', () => {
  itSupportsClassName(Anchor, defaultProps);
  itRendersChildren(Anchor, defaultProps);
  itSupportsOthers(Anchor, defaultProps);
  itSupportsStyle(Anchor, defaultProps);
  itSupportsMargins(Anchor, defaultProps);
  itSupportsSx(Anchor, defaultProps, { dive: 1 });
  itIsPolymorphic(Anchor, defaultProps);
  itSupportsRef(Anchor, defaultProps, HTMLAnchorElement);

  it('adds type="button" attribute if component prop is button', () => {
    const link = shallow(<Anchor component="a" />);
    const button = shallow(<Anchor component="button" />);
    const buttonReset = shallow(<Anchor component="button" type="reset" />);

    expect(link.render().attr('type')).toBe(undefined);
    expect(button.render().attr('type')).toBe('button');
    expect(buttonReset.render().attr('type')).toBe('reset');
  });

  it('has correct displayName', () => {
    expect(Anchor.displayName).toEqual('@mantine/core/Anchor');
  });
});
