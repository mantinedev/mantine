import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Hr } from './Hr';

describe('@mantine/core/Hr', () => {
  itSupportsClassName(Hr, {});
  itSupportsStyle(Hr, {});
  itSupportsOthers(Hr, {});

  it('has correct displayName', () => {
    expect(Hr.displayName).toEqual('@mantine/core/Hr');
  });
});
