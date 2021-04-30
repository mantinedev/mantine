import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { CardsGrid } from './CardsGrid';

describe('@mantine/core/CardsGrid', () => {
  itRendersChildren(CardsGrid, {});
  itSupportsClassName(CardsGrid, {});
  itSupportsOthers(CardsGrid, {});
  itSupportsStyle(CardsGrid, {});

  it('has correct displayName', () => {
    expect(CardsGrid.displayName).toEqual('@mantine/core/CardsGrid');
  });
});
