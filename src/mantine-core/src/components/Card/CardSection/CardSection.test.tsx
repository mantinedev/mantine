import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { CardSection } from './CardSection';

describe('@mantine/core/CardSection', () => {
  itRendersChildren(CardSection, {});
  itSupportsClassName(CardSection, {});
  itSupportsOthers(CardSection, {});
  itSupportsStyle(CardSection, {});

  it('has correct displayName', () => {
    expect(CardSection.displayName).toEqual('@mantine/core/CardSection');
  });
});
