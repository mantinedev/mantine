import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Card, CardProps } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps: CardProps = {
  children: 'test-card',
};

describe('@mantine/core/Card', () => {
  itRendersChildren(Card, defaultProps);
  itIsPolymorphic(Card, defaultProps);
  itSupportsSystemProps({
    component: Card,
    props: defaultProps,
    displayName: '@mantine/core/Card',
    refType: HTMLDivElement,
    providerName: 'Card',
  });

  it('exposes CardSection as Card.Section', () => {
    expect(Card.Section).toBe(CardSection);
  });
});
