import { IconCheck } from '@tabler/icons-react';
import { Tooltip } from '../Tooltip';
import { Chip } from './Chip';

export default { title: 'Chip' };

export function WithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip label="Tooltip" refProp="rootRef" position="bottom-start">
        <Chip icon={null}>With tooltip</Chip>
      </Tooltip>
    </div>
  );
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Chip key={index} variant="filled" color={`red.${index}`} autoContrast defaultChecked>
        Chip
      </Chip>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: 40,
      }}
    >
      {buttons}
    </div>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 4 }}>
      <Chip type="checkbox" variant="light" defaultChecked size="xs">
        Light
      </Chip>
      <Chip type="checkbox" defaultChecked size="xs">
        Filled
      </Chip>
      <Chip type="checkbox" variant="outline" defaultChecked size="xs">
        Outline
      </Chip>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" size="xs">
        XS chip
      </Chip>
      <Chip type="checkbox" size="sm">
        SM chip
      </Chip>
      <Chip type="checkbox" size="md">
        MD chip
      </Chip>
      <Chip type="checkbox" size="lg">
        LG chip
      </Chip>
      <Chip type="checkbox" size="xl">
        XL chip
      </Chip>
    </div>
  );
}

export function CustomIcon() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" size="xs" icon={<IconCheck size={14} />}>
        XS chip
      </Chip>
      <Chip type="checkbox" size="sm" icon={<IconCheck size={20} />}>
        SM chip
      </Chip>
      <Chip type="checkbox" size="md" icon={<IconCheck size={12} />}>
        MD chip
      </Chip>
      <Chip type="checkbox" size="lg" icon={<IconCheck size={12} />}>
        LG chip
      </Chip>
      <Chip type="checkbox" size="xl" icon={<IconCheck size={14} />}>
        XL chip
      </Chip>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" variant="light" unstyled>
        unstyled
      </Chip>
    </div>
  );
}
