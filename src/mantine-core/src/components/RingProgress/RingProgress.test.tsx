import { itSupportsStyle, itSupportsOthers, itSupportsClassName } from '@mantine/tests';
import { RingProgress } from './RingProgress';

const defaultProps = {
  sections: [{ value: 50, color: 'blue' }],
};

describe('@mantine/core/RingProgress', () => {
  itSupportsClassName(RingProgress, defaultProps);
  itSupportsStyle(RingProgress, defaultProps);
  itSupportsOthers(RingProgress, defaultProps);

  it('has correct displayName', () => {
    expect(RingProgress.displayName).toEqual('@mantine/core/RingProgress');
  });
});
