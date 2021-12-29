import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('@mantine/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@mantine/core/CardSection',
    refType: HTMLDivElement,
  });
});
