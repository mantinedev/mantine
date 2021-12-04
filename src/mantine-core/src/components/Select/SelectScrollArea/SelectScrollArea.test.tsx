import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  mockResizeObserver,
} from '@mantine/tests';
import { SelectScrollArea } from './SelectScrollArea';

mockResizeObserver();

describe('@mantine/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toEqual('@mantine/core/SelectScrollArea');
  });
});
