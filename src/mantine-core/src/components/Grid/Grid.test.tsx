import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Grid } from './Grid';
import { Col } from './Col/Col';

const defaultProps = {};

describe('@mantine/core/Grid', () => {
  itSupportsClassName(Grid, defaultProps);
  itSupportsSx(Grid, defaultProps);
  itSupportsOthers(Grid, defaultProps);
  itSupportsStyle(Grid, defaultProps);
  itSupportsMargins(Grid, defaultProps);
  itSupportsRef(Grid, defaultProps, HTMLDivElement);

  it('exposes Col as Grid.Col', () => {
    expect(Grid.Col).toBe(Col);
  });

  it('has correct displayName', () => {
    expect(Grid.displayName).toEqual('@mantine/core/Grid');
  });
});
