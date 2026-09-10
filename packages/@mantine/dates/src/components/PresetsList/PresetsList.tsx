import { useRef, useState } from 'react';
import { UnstyledButton } from '@mantine/core';

export interface PresetsListPreset {
  value: any;
  label: React.ReactNode;
}

export interface PresetsListProps extends React.ComponentPropsWithoutRef<'div'> {
  presets: PresetsListPreset[];
  onPresetSelect: (value: any) => void;
  buttonProps: { className?: string; style?: React.CSSProperties };
  stopPropagation?: boolean;
}

export function PresetsList({
  presets,
  onPresetSelect,
  buttonProps,
  stopPropagation,
  ...others
}: PresetsListProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return;
    }

    event.preventDefault();
    const nextIndex = event.key === 'ArrowDown' ? index + 1 : index - 1;
    buttonsRef.current[nextIndex]?.focus();
  };

  const buttons = presets.map((preset, index) => (
    <UnstyledButton
      key={index}
      {...buttonProps}
      data-preset
      ref={(node) => {
        buttonsRef.current[index] = node;
      }}
      tabIndex={index === Math.min(tabIndex, presets.length - 1) ? 0 : -1}
      onClick={() => onPresetSelect(preset.value)}
      onFocus={() => setTabIndex(index)}
      onKeyDown={(event) => handleKeyDown(event, index)}
      onMouseDown={(event) => event.preventDefault()}
      data-mantine-stop-propagation={stopPropagation || undefined}
    >
      {preset.label}
    </UnstyledButton>
  ));

  return <div {...others}>{buttons}</div>;
}

PresetsList.displayName = '@mantine/dates/PresetsList';
