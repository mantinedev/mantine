import { tests } from '@mantine/tests';
import { NumberFormatter } from './NumberFormatter';

describe('@mantine/core/NumberFormatter', () => {
  tests.itHasExtend({ component: NumberFormatter });

  it('has correct displayName', () => {
    expect(NumberFormatter.displayName).toEqual('@mantine/core/NumberFormatter');
  });
});
