'use client';

import { Combobox, InputBase, ScrollArea, Text, useCombobox } from '@mantine/core';
import { type Preset, type PresetCategory, presets } from '@/presets';
import classes from './PresetPicker.module.css';

const CATEGORIES: PresetCategory[] = [
  'Generic',
  'Tools',
  'Content',
  'Marketing',
  'Scheduling',
  'Chat',
  'AI',
];

interface PresetThumbnailProps {
  preset: Preset;
  className?: string;
}

function PresetThumbnail({ preset, className }: PresetThumbnailProps) {
  return (
    <span className={`${classes.thumbnail} ${className ?? ''}`}>
      <img
        src={`/previews/${preset.id}-light.webp`}
        alt=""
        loading="lazy"
        decoding="async"
        className={classes.light}
      />
      <img
        src={`/previews/${preset.id}-dark.webp`}
        alt=""
        loading="lazy"
        decoding="async"
        className={classes.dark}
      />
    </span>
  );
}

interface PresetPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export function PresetPicker({ value, onChange }: PresetPickerProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const current = presets.find((preset) => preset.id === value) ?? presets[0];

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(next) => {
        onChange(next);
        combobox.closeDropdown();
      }}
      floatingStrategy="fixed"
      position="bottom-start"
      width="min(640px, calc(100vw - 32px))"
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          aria-label="Preview page"
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          className={classes.target}
          classNames={{ input: classes.targetInput }}
        >
          <PresetThumbnail preset={current} className={classes.targetThumbnail} />
          <span className={classes.targetText}>
            <span className={classes.targetLabel}>{current.label}</span>
            <span className={classes.targetDescription}>{current.description}</span>
          </span>
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown className={classes.dropdown}>
        <Combobox.Options>
          <ScrollArea.Autosize mah="min(640px, calc(100dvh - 120px))" type="scroll">
            <div className={classes.groups}>
              {CATEGORIES.map((category) => (
                <Combobox.Group key={category} label={category}>
                  <div className={classes.grid}>
                    {presets
                      .filter((preset) => preset.category === category)
                      .map((preset) => (
                        <Combobox.Option
                          key={preset.id}
                          value={preset.id}
                          active={preset.id === value}
                          aria-label={preset.label}
                          className={classes.option}
                        >
                          <PresetThumbnail preset={preset} />
                          <span className={classes.optionText}>
                            <Text component="span" size="sm" className={classes.optionLabel}>
                              {preset.label}
                            </Text>
                            <Text component="span" size="xs">
                              {preset.description}
                            </Text>
                          </span>
                        </Combobox.Option>
                      ))}
                  </div>
                </Combobox.Group>
              ))}
            </div>
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
