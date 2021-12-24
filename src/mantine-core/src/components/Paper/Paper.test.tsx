import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsOthers,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Paper } from './Paper';

const defaultProps = {};

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itSupportsClassName(Paper, defaultProps);
  itSupportsStyle(Paper, defaultProps);
  itSupportsRef(Paper, defaultProps, HTMLDivElement);
  itSupportsOthers(Paper, defaultProps);
  itSupportsMargins(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@mantine/core/Paper');
  });
});
