import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Center } from './Center';

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, {});
  itSupportsClassName(Center, {});
  itSupportsStyle(Center, {});
  itSupportsOthers(Center, {});
  itSupportsMargins(Center, {});
  itSupportsRef(Center, {}, HTMLDivElement);

  it('supports inline prop', () => {
    const inline = shallow(<Center inline>test</Center>);
    const block = shallow(<Center inline={false}>test</Center>);

    expect(inline.prop('style').display).toBe('inline-flex');
    expect(block.prop('style').display).toBe('flex');
  });

  it('has correct displayName', () => {
    expect(Center.displayName).toEqual('@mantine/core/Center');
  });
});
