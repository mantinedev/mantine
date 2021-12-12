import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Center } from './Center';

const defaultProps = {};

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itSupportsClassName(Center, defaultProps);
  itSupportsStyle(Center, defaultProps);
  itSupportsSx(Center, defaultProps);
  itSupportsOthers(Center, defaultProps);
  itSupportsMargins(Center, defaultProps);
  itSupportsRef(Center, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Center.displayName).toEqual('@mantine/core/Center');
  });
});
