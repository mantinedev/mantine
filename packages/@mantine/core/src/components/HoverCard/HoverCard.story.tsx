import { Button } from '../Button';
import { Switch } from '../Switch';
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
