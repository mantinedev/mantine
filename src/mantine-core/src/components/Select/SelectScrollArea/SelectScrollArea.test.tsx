import { itRendersChildren, itSupportsStyle, itSupportsOthers } from '@mantine/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@mantine/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toEqual('@mantine/core/SelectScrollArea');
  });
});
