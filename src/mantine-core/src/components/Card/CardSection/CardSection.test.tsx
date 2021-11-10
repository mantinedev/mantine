import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { CardSection } from './CardSection';

describe('@mantine/core/CardSection', () => {
  itRendersChildren(CardSection, {});
  itSupportsClassName(CardSection, {});
  itSupportsOthers(CardSection, {});
  itSupportsStyle(CardSection, {});
  itSupportsMargins(CardSection, {});

  it('has correct displayName', () => {
    expect(CardSection.displayName).toEqual('@mantine/core/CardSection');
  });
});
