import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsSx,
  mockResizeObserver,
} from '@mantine/tests';
import { ScrollArea } from './ScrollArea';

mockResizeObserver();

const defaultProps = {};

describe('@mantine/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsClassName(ScrollArea, defaultProps);
  itSupportsMargins(ScrollArea, defaultProps);
  itSupportsOthers(ScrollArea, defaultProps);
  itSupportsStyle(ScrollArea, defaultProps);
  itSupportsSx(ScrollArea, defaultProps);
  itSupportsRef(ScrollArea, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(ScrollArea.displayName).toEqual('@mantine/core/ScrollArea');
  });
});
