import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Grid } from './Grid';

describe('@mantine/core/Grid', () => {
  itSupportsClassName(Grid, {});
  itSupportsOthers(Grid, {});
  itSupportsStyle(Grid, {});
  itSupportsMargins(Grid, {});
  itSupportsRef(Grid, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Grid.displayName).toEqual('@mantine/core/Grid');
  });
});
