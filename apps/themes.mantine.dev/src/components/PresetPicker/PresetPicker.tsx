'use client';

import { useEffect } from 'react';
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

const SCHEMES = ['light', 'dark'] as const;

function getPreviewUrl(presetId: string, scheme: (typeof SCHEMES)[number]) {
  return `/previews/${presetId}-${scheme}.webp`;
}

function usePreviewsWarmup() {
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    const warm = () => {
      presets.forEach((preset) => {
        SCHEMES.forEach((scheme) => {
          const image = new Image();
          image.decoding = 'async';
          image.fetchPriority = 'low';
          image.src = getPreviewUrl(preset.id, scheme);
          images.push(image);
        });
      });
    };

    const timeout = window.setTimeout(warm, 1000);
    return () => {
      window.clearTimeout(timeout);
      images.length = 0;
    };
  }, []);
}

interface PresetThumbnailProps {
  preset: Preset;
  eager?: boolean;
  className?: string;
}

function PresetThumbnail({ preset, eager, className }: PresetThumbnailProps) {
  return (
    <span className={`${classes.thumbnail} ${className ?? ''}`}>
      {SCHEMES.map((scheme) => (
        <img
          key={scheme}
          src={getPreviewUrl(preset.id, scheme)}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={classes[scheme]}
        />
      ))}
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
  usePreviewsWarmup();

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
      middlewares={{ shift: { padding: 16 } }}
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
          <PresetThumbnail preset={current} eager className={classes.targetThumbnail} />
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
