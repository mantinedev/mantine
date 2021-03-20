import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
} from '@mantine/tests';
import { ElementsGroup } from './ElementsGroup';

describe('@mantine/core/ElementsGroup', () => {
  itSupportsOthers(ElementsGroup, {});
  itSupportsClassName(ElementsGroup, {});
  itSupportsStyle(ElementsGroup, {});
  itRendersChildren(ElementsGroup, {});

  it('has correct displayName', () => {
    expect(ElementsGroup.displayName).toEqual('@mantine/core/ElementsGroup');
  });
});
