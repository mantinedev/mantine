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

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, {});
  itSupportsClassName(Paper, {});
  itSupportsStyle(Paper, {});
  itSupportsRef(Paper, {}, HTMLDivElement);
  itSupportsOthers(Paper, {});
  itSupportsMargins(Paper, {});
  itIsPolymorphic(Paper, {});

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@mantine/core/Paper');
  });
});
