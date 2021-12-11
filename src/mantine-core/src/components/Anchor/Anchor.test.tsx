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
} from '@mantine/tests';
import { Anchor } from './Anchor';

describe('@mantine/core/Anchor', () => {
  itSupportsClassName(Anchor, {});
  itRendersChildren(Anchor, {});
  itSupportsOthers(Anchor, {});
  itSupportsStyle(Anchor, {});
  itSupportsMargins(Anchor, {});
  itIsPolymorphic(Anchor, {}, { dive: 2 });
  itSupportsRef(Anchor, {}, HTMLAnchorElement);

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
