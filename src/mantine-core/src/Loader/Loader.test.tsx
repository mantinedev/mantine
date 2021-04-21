import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsStyle, itSupportsOthers } from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/theme';
import { Loader } from './Loader';

describe('@mantine/core/Loader', () => {
  itSupportsOthers(Loader, {});
  itSupportsClassName(Loader, {});
  itSupportsStyle(Loader, {});

  it('has correct displayName', () => {
    expect(Loader.displayName).toEqual('@mantine/core/Loader');
  });

  it('sets svg width based on size prop', () => {
    const element = shallow(<Loader size={41} />);
    expect(element.render().attr('width')).toBe('41px');
  });

  it('sets svg fill based on color prop', () => {
    const element = shallow(<Loader color="yellow" />);
    expect(element.render().attr('fill')).toBe(DEFAULT_THEME.colors.yellow[6]);
  });
});
