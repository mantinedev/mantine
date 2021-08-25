import { itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { Thumb } from './Thumb';

const defaultProps = {
  position: { x: 0.4, y: 0.5 },
  size: 'sm' as const,
};

describe('@mantine/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps);
  itSupportsStyle(Thumb, defaultProps);

  it('has correct displayName', () => {
    expect(Thumb.displayName).toEqual('@mantine/core/Thumb');
  });
});
