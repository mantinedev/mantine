import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { Grid } from './Grid';

describe('@mantine/core/Grid', () => {
  itSupportsClassName(Grid, {});
  itSupportsOthers(Grid, {});
  itSupportsStyle(Grid, {});
  itSupportsMargins(Grid, {});

  it('has correct displayName', () => {
    expect(Grid.displayName).toEqual('@mantine/core/Grid');
  });
});
