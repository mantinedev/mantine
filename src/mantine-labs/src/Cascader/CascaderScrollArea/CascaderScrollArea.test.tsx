import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@mantine/tests';
import { CascaderScrollArea } from './CascaderScrollArea';

describe('@mantine/core/CascaderScrollArea', () => {
  itRendersChildren(CascaderScrollArea, {});
  itSupportsStyle(CascaderScrollArea, {});
  itSupportsOthers(CascaderScrollArea, {});
  itSupportsRef(CascaderScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(CascaderScrollArea.displayName).toStrictEqual('@mantine/core/CascaderScrollArea');
  });
});
