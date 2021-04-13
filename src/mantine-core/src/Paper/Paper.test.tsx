import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsOthers,
} from '@mantine/tests';
import { Paper } from './Paper';

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, {});
  itSupportsClassName(Paper, {});
  itSupportsStyle(Paper, {});
  itSupportsRef(Paper, {}, HTMLDivElement, 'elementRef');
  itSupportsOthers(Paper, {});

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@mantine/core/Paper');
  });
});
