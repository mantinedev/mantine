import {
  Button,
  Card,
  Code,
  Kbd,
  Menu,
  Notification,
  Paper,
  Popover,
  ScrollArea,
  SegmentedControl,
  Slider,
  Text,
  TextInput,
} from '../../index';

export default { title: 'Surface/NeutralGallery' };

export function Gallery() {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24, alignItems: 'flex-start' }}
    >
      <Paper withBorder p="md" w={260}>
        <Text fw={700}>Paper</Text>
        <Text c="dimmed" size="sm">
          Sits on body
        </Text>
      </Paper>

      <Card withBorder shadow="sm" w={260}>
        <Text fw={700}>Card title</Text>
        <Text c="dimmed" size="sm">
          Card description text
        </Text>
        <Button fullWidth mt="md">
          Book now
        </Button>
      </Card>

      <div style={{ width: 260 }}>
        <TextInput label="Email" placeholder="you@mantine.dev" />
        <Button variant="default" mt="md">
          Default button
        </Button>
      </div>

      <div style={{ width: 260, display: 'flex', justifyContent: 'center' }}>
        <Popover opened withinPortal={false} transitionProps={{ duration: 0 }}>
          <Popover.Target>
            <Button>Popover target</Button>
          </Popover.Target>
          <Popover.Dropdown>Popover dropdown content</Popover.Dropdown>
        </Popover>
      </div>

      <div style={{ width: 260, display: 'flex', justifyContent: 'center' }}>
        <Menu opened withinPortal={false} transitionProps={{ duration: 0 }}>
          <Menu.Target>
            <Button variant="default">Menu target</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>First item</Menu.Item>
            <Menu.Item>Second item</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

      <Notification title="Notification" withCloseButton={false} w={260}>
        Notification body
      </Notification>

      <div style={{ width: 260 }}>
        <SegmentedControl data={['Preview', 'Code', 'Export']} fullWidth />
        <Slider defaultValue={40} mt="md" />
        <Code block mt="md">
          npm install @mantine/core
        </Code>
        <Text size="sm" mt="xs">
          Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> and <Code>inline code</Code>
        </Text>
      </div>

      <ScrollArea h={120} w={260} type="always" offsetScrollbars>
        <div style={{ height: 400 }}>Scrollable content</div>
      </ScrollArea>
    </div>
  );
}
