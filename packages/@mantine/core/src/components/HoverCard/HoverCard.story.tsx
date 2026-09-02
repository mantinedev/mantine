import { Button } from '../Button';
import { Switch } from '../Switch';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { HoverCard } from './HoverCard';

export default { title: 'HoverCard' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard>
        <HoverCard.Target>
          <Button>Hover to reveal</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>Hello</HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard unstyled>
        <HoverCard.Target>
          <Button>Hover to reveal</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>Hello</HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function TargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard>
        <Tooltip label="Tooltip first">
          <HoverCard.Target>
            <Button>Tooltip first</Button>
          </HoverCard.Target>
        </Tooltip>

        <HoverCard.Dropdown>Dropdown</HoverCard.Dropdown>
      </HoverCard>

      <HoverCard>
        <HoverCard.Target>
          <Tooltip label="Tooltip last">
            <Button ml="xl">Tooltip last</Button>
          </Tooltip>
        </HoverCard.Target>

        <HoverCard.Dropdown>Dropdown</HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function WithSwitch() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard width={280} shadow="md">
        <HoverCard.Target refProp="rootRef" eventPropsWrapperName="wrapperProps">
          <Switch label="Switch label" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <p>
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </p>
        </HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function Group() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard.Group openDelay={500} closeDelay={100}>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <HoverCard shadow="md">
            <HoverCard.Target>
              <Button>HoverCard 1</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <p>First hover card content with group delay</p>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Button>HoverCard 2</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <p>Second hover card content with group delay</p>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Button>HoverCard 3</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <p>Third hover card content with group delay</p>
            </HoverCard.Dropdown>
          </HoverCard>
        </div>
      </HoverCard.Group>
    </div>
  );
}

export function KeyboardAndFocus() {
  return (
    <div style={{ padding: 40 }}>
      <Button variant="default" mr="md">
        Focus me first, then press Tab
      </Button>

      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover or focus me</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          Opens on hover and on keyboard focus, closes on Escape. Clicking the target with a mouse
          must not open the dropdown.
        </HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function Interactive() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <HoverCard width={280} shadow="md" interactive position="bottom-end" offset={60}>
        <HoverCard.Target>
          <Button>Interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          Move the pointer diagonally to this dropdown, it must stay open
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={280} shadow="md" position="bottom-end" offset={60}>
        <HoverCard.Target>
          <Button variant="default">Not interactive</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          This dropdown closes when the pointer leaves the target
        </HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function TooltipRole() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard width={280} shadow="md" role="tooltip">
        <HoverCard.Target>
          <Text component="span" tabIndex={0} td="underline dotted">
            Hydration
          </Text>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          Attaching React event handlers to the HTML that was rendered on the server
        </HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function TouchEvents() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard width={280} shadow="md" events={{ touch: true }}>
        <HoverCard.Target>
          <Button>Tap me on a touch device</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>Opened with a tap</HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}
