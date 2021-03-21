import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsStyle, itSupportsOthers } from '@mantine/tests';
import { InnerHtml } from './InnerHtml';

describe('@mantine/core/InnerHtml', () => {
  itSupportsClassName(InnerHtml, {});
  itSupportsStyle(InnerHtml, {});
  itSupportsOthers(InnerHtml, {});

  it('has correct displayName', () => {
    expect(InnerHtml.displayName).toEqual('@mantine/core/InnerHtml');
  });

  it('renders given innerHtml', () => {
    const element = shallow(
      <InnerHtml dangerouslySetInnerHTML={{ __html: '<span class="test">test</span>' }} />
    );

    expect(element.render().find('.test').text()).toBe('test');
  });
});
