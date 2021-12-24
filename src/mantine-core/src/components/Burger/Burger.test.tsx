import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { Burger } from './Burger';

const defaultProps = {
  opened: true,
  title: 'Close navigation',
};

describe('@mantine/core/Burger', () => {
  checkAccessibility([render(<Burger {...defaultProps} />)]);
  itSupportsOthers(Burger, defaultProps);
  itSupportsClassName(Burger, defaultProps);
  itSupportsStyle(Burger, defaultProps);
  itSupportsMargins(Burger, defaultProps);
  itSupportsSx(Burger, defaultProps);
  itSupportsRef(Burger, defaultProps, HTMLButtonElement);

  it('renders cross when opened prop is true', () => {
    const opened = shallow(<Burger opened />);
    const closed = shallow(<Burger opened={false} />);
    expect(opened.find('.mantine-Burger-opened')).toHaveLength(1);
    expect(closed.find('.mantine-Burger-opened')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Burger.displayName).toEqual('@mantine/core/Burger');
  });
});
