import React from 'react';
import { Card } from './Card';

export default { title: 'Card' };

export function Usage() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: 'auto' }}>
      <Card withBorder p="lg">
        <Card.Section inheritPadding py="md" withBorder>
          Card section 1
        </Card.Section>
        <div>Content 1</div>
        <Card.Section inheritPadding withBorder>
          Card section 2
        </Card.Section>
        <div>Content 2</div>
        <Card.Section inheritPadding withBorder>
          Card section 3
        </Card.Section>

        <Card.Section inheritPadding withBorder>
          Card section 4
        </Card.Section>
      </Card>
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: 'auto' }}>
      <Card withBorder p="lg" component="a" href="https://mantine.dev">
        <Card.Section>Card section 1</Card.Section>
        <Card.Section component="button">Card section 2</Card.Section>
        <div>Content</div>
        <Card.Section>Card section 3</Card.Section>
      </Card>
    </div>
  );
}
