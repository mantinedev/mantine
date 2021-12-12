import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Grid } from './Grid';

const defualtProps = {};

describe('@mantine/core/Grid', () => {
  itSupportsClassName(Grid, defualtProps);
  itSupportsSx(Grid, defualtProps);
  itSupportsOthers(Grid, defualtProps);
  itSupportsStyle(Grid, defualtProps);
  itSupportsMargins(Grid, defualtProps);
  itSupportsRef(Grid, defualtProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Grid.displayName).toEqual('@mantine/core/Grid');
  });
});
