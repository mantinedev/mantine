import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { TimelineItem } from './TimelineItem';

const defaultProps = {};

describe('@mantine/core/TimelineItem', () => {
  itSupportsClassName(TimelineItem, defaultProps);
  itSupportsOthers(TimelineItem, defaultProps);
  itSupportsStyle(TimelineItem, defaultProps);

  it('has correct displayName', () => {
    expect(TimelineItem.displayName).toEqual('@mantine/core/TimelineItem');
  });
});
