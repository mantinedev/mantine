import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itRendersChildren,
} from '@mantine/tests';
import { TimelineItem } from './TimelineItem';

const defaultProps = {};

describe('@mantine/core/TimelineItem', () => {
  itSupportsClassName(TimelineItem, defaultProps);
  itSupportsOthers(TimelineItem, defaultProps);
  itRendersChildren(TimelineItem, defaultProps);
  itSupportsStyle(TimelineItem, defaultProps);

  it('renders given bullet', () => {
    const element = shallow(<TimelineItem bullet="test-bullet" />);
    expect(element.find('.mantine-Timeline-itemBullet').text()).toBe('test-bullet');
  });

  it('renders given title', () => {
    const element = shallow(<TimelineItem title="test-title" />);
    expect(element.render().find('.mantine-Timeline-itemTitle').text()).toBe('test-title');
  });

  it('has correct displayName', () => {
    expect(TimelineItem.displayName).toEqual('@mantine/core/TimelineItem');
  });
});
