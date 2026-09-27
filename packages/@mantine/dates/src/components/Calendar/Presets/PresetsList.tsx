import { useRef, useState } from 'react';
import { Scroller, UnstyledButton } from '@mantine/core';
import { useDatesDropdownContext } from '../../PickerInputBase/DatesDropdown.context';
import classes from './Presets.module.css';

export interface PresetsListPreset {
  value: any;
  label: React.ReactNode;
}

export interface PresetsListProps extends React.ComponentPropsWithoutRef<'div'> {
  presets: PresetsListPreset[];
  onPresetSelect: (value: any) => void;
  buttonProps: { className?: string; style?: React.CSSProperties };
}

export function PresetsList({
  presets,
  onPresetSelect,
  buttonProps,
  className,
  style,
  ...others
}: PresetsListProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const dropdown = useDatesDropdownContext();
  const isSheet = dropdown.layout === 'sheet';
  const nextKey = isSheet ? 'ArrowRight' : 'ArrowDown';
  const previousKey = isSheet ? 'ArrowLeft' : 'ArrowUp';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== nextKey && event.key !== previousKey) {
      return;
    }

    event.preventDefault();
    const nextIndex = event.key === nextKey ? index + 1 : index - 1;
    buttonsRef.current[nextIndex]?.focus();
  };

  const buttons = presets.map((preset, index) => (
    <UnstyledButton
      key={index}
      {...buttonProps}
      data-preset
      data-layout={dropdown.layout}
      ref={(node) => {
        buttonsRef.current[index] = node;
      }}
      tabIndex={index === Math.min(tabIndex, presets.length - 1) ? 0 : -1}
      onClick={() => onPresetSelect(preset.value)}
      onFocus={() => setTabIndex(index)}
      onKeyDown={(event) => handleKeyDown(event, index)}
      onMouseDown={(event) => event.preventDefault()}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
    >
      {preset.label}
    </UnstyledButton>
  ));

  if (isSheet) {
    return (
      <Scroller
        className={className}
        style={style}
        data-layout="sheet"
        withControls={false}
        classNames={{ content: classes.presetsRow }}
      >
        {buttons}
      </Scroller>
    );
  }

  return (
    <div className={className} style={style} {...others} data-layout={dropdown.layout}>
      {buttons}
    </div>
  );
}

PresetsList.displayName = '@mantine/dates/PresetsList';
