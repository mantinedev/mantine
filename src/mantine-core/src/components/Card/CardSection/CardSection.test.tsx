import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsSx,
  itIsPolymorphic,
  itSupportsRef,
} from '@mantine/tests';
import { CardSection } from './CardSection';

const defaultProps = {};

describe('@mantine/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itSupportsClassName(CardSection, defaultProps);
  itSupportsOthers(CardSection, defaultProps);
  itSupportsStyle(CardSection, defaultProps);
  itSupportsMargins(CardSection, defaultProps);
  itSupportsSx(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsRef(CardSection, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(CardSection.displayName).toEqual('@mantine/core/CardSection');
  });
});
