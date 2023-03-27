import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps = {};

describe('@mantine/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsProviderVariant(CardSection, defaultProps, 'Card', 'cardSection');
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@mantine/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  });
});
