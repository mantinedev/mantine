import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Hr } from './Hr';

describe('@mantine/core/Hr', () => {
  itSupportsClassName(Hr, {});
  itSupportsStyle(Hr, {});
  itSupportsOthers(Hr, {});

  it('has correct displayName', () => {
    expect(Hr.displayName).toEqual('@mantine/core/Hr');
  });

  it('passes variant to borderTopStyle', () => {
    const solid = shallow(<Hr variant="solid" />).render();
    const dashed = shallow(<Hr variant="dashed" />).render();
    const dotted = shallow(<Hr variant="dotted" />).render();

    expect(solid.css('border-top-style')).toBe('solid');
    expect(dashed.css('border-top-style')).toBe('dashed');
    expect(dotted.css('border-top-style')).toBe('dotted');
  });
});
