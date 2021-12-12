import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/styles';
import { Loader } from './Loader';

const defaultProps = {};

describe('@mantine/core/Loader', () => {
  itSupportsOthers(Loader, defaultProps);
  itSupportsClassName(Loader, defaultProps);
  itSupportsStyle(Loader, defaultProps);
  itSupportsMargins(Loader, defaultProps);
  itSupportsSx(Loader, defaultProps);

  it('sets svg width based on size prop', () => {
    const element = shallow(<Loader size={41} variant="bars" />);
    expect(element.render().attr('width')).toBe('41px');
  });

  it('sets svg fill based on color prop', () => {
    const element = shallow(<Loader color="yellow" variant="bars" />);
    expect(element.render().attr('fill')).toBe(DEFAULT_THEME.colors.yellow[6]);
  });

  it('has correct displayName', () => {
    expect(Loader.displayName).toEqual('@mantine/core/Loader');
  });
});
