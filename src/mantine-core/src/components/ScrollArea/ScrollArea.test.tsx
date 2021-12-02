import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  mockResizeObserver,
} from '@mantine/tests';
import { ScrollArea } from './ScrollArea';

mockResizeObserver();

describe('@mantine/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, {});
  itSupportsClassName(ScrollArea, {});
  itSupportsMargins(ScrollArea, {});
  itSupportsOthers(ScrollArea, {});
  itSupportsStyle(ScrollArea, {});
  itSupportsRef(ScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(ScrollArea.displayName).toEqual('@mantine/core/ScrollArea');
  });
});
