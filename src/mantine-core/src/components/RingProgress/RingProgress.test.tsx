import { itSupportsStyle, itSupportsOthers, itSupportsClassName } from '@mantine/tests';
import { RingProgress } from './RingProgress';

describe('@mantine/core/RingProgress', () => {
  itSupportsClassName(RingProgress, {});
  itSupportsStyle(RingProgress, {});
  itSupportsOthers(RingProgress, {});

  it('has correct displayName', () => {
    expect(RingProgress.displayName).toEqual('@mantine/core/RingProgress');
  });
});
