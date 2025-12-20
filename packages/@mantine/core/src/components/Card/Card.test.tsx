import { render, tests } from '@mantine-tests/core';
import { Card, CardProps, CardStylesNames } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps: CardProps = {
  children: <Card.Section />,
};

describe('@mantine/core/Card', () => {
  tests.itSupportsSystemProps<CardProps, CardStylesNames>({
    component: Card,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    displayName: '@mantine/core/Card',
    stylesApiSelectors: ['root', 'section'],
  });

  it('sets data-fist-section and data-last-section props to first and last Card.Section components', () => {
    const { container } = render(
      <Card>
        <Card.Section />
        <div>Content</div>
        <Card.Section />
        <div>Content</div>
        <Card.Section />
      </Card>
    );

    const sections = container.querySelectorAll('.mantine-Card-section');

    expect(sections[0]).toHaveAttribute('data-first-section');
    expect(sections[0]).not.toHaveAttribute('data-last-section');

    expect(sections[1]).not.toHaveAttribute('data-first-section');
    expect(sections[1]).not.toHaveAttribute('data-last-section');

    expect(sections[2]).not.toHaveAttribute('data-first-section');
    expect(sections[2]).toHaveAttribute('data-last-section');
  });

  it('assigns data-orientation attribute based on orientation prop on root and sections', () => {
    const { container } = render(
      <Card orientation="horizontal">
        <Card.Section />
        <div>Content</div>
        <Card.Section />
      </Card>
    );

    const root = container.querySelector('.mantine-Card-root');
    const sections = container.querySelectorAll('.mantine-Card-section');

    expect(root).toHaveAttribute('data-orientation', 'horizontal');
    sections.forEach((section) => {
      expect(section).toHaveAttribute('data-orientation', 'horizontal');
    });
  });

  it('exports Card.Section component', () => {
    expect(Card.Section).toBe(CardSection);
  });
});
