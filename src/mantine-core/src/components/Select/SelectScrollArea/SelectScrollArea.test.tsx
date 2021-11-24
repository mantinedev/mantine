import { itRendersChildren, itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@mantine/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsClassName(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toEqual('@mantine/core/SelectScrollArea');
  });
});
