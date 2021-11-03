import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Text } from './Text';

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, {});
  itSupportsStyle(Text, {});
  itSupportsClassName(Text, {});
  itSupportsOthers(Text, {});
  itSupportsMargins(Text, {});
  itIsPolymorphic(Text, {});
  itSupportsRef(Text, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Text.displayName).toEqual('@mantine/core/Text');
  });

  it('sets font-weight, test-transform and text-align based on props', () => {
    const withWeight = shallow(<Text weight={600} />);
    const withTransform = shallow(<Text transform="uppercase" />);
    const withAlign = shallow(<Text align="right" />);

    expect(withWeight.render().css('font-weight')).toBe('600');
    expect(withTransform.render().css('text-transform')).toBe('uppercase');
    expect(withAlign.render().css('text-align')).toBe('right');
  });
});
