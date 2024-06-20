import { Card } from './Card';

export default { title: 'Card' };

export function Usage() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: 'auto' }}>
      <Card withBorder>
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
      <Card withBorder component="a" href="https://mantine.dev">
        <Card.Section bg="blue">Card section 1</Card.Section>
        <Card.Section component="button">Card section 2</Card.Section>
        <div>Content</div>
        <Card.Section bg="red">Card section 3</Card.Section>
      </Card>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ maxWidth: 400, padding: 40, margin: 'auto' }}>
      <Card withBorder unstyled>
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
