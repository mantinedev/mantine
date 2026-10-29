'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { Switch, Text, Title, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { suggestColorName } from '@/preview';
import { CodeOutput } from './CodeOutput';
import type { ColorPreset } from './color-presets';
import { ColorsInput } from './ColorsInput';
import { ComponentsPreview } from './ComponentsPreview';
import { DarkColorInput } from './DarkColorInput';
import { GeneratorHeader } from './GeneratorHeader';
import { OptionsControls } from './OptionsControls';
import { buildPalette } from './palette';
import {
  DEFAULT_NAME,
  getSchemeParams,
  SCHEME_DEFAULTS,
  toGeneratorOptions,
  toSchemeUpdate,
  useGeneratorParams,
} from './params';
import { Presets } from './Presets';
import { ShadesList } from './ShadesList';
import classes from './ColorsGenerator.module.css';

const EMPTY_NAMES = new Set<string>();

function useSuggestedName(color: string) {
  const [suggestion, setSuggestion] = useState<{ color: string; name: string } | null>(null);

  useEffect(() => {
    let active = true;
    suggestColorName(color, EMPTY_NAMES).then(
      (result) => active && result && setSuggestion({ color, name: result.name })
    );
    return () => {
      active = false;
    };
  }, [color]);

  return suggestion?.name ?? DEFAULT_NAME;
}

function GeneratorContent() {
  const { params, setParams, setScheme } = useGeneratorParams();
  const [displayInfo, setDisplayInfo] = useLocalStorage({
    key: 'colors-generator-display-info',
    defaultValue: true,
    getInitialValueInEffect: false,
  });

  const suggestedName = useSuggestedName(params.color);
  const name = params.name ?? suggestedName;

  const lightParams = getSchemeParams(params, 'light');
  const darkParams = getSchemeParams(params, 'dark');

  const light = useMemo(
    () => buildPalette(params.color, toGeneratorOptions(lightParams), params.format),
    [params.color, params.format, JSON.stringify(lightParams)]
  );
  const darkColor = params.darkColor ?? params.color;
  const dark = useMemo(
    () =>
      params.virtual
        ? buildPalette(darkColor, toGeneratorOptions(darkParams), params.format)
        : null,
    [darkColor, params.format, params.virtual, JSON.stringify(darkParams)]
  );

  const applyPreset = (preset: ColorPreset) =>
    setParams({
      color: preset.color,
      darkColor: preset.darkColor ?? null,
      name: null,
      virtual: Boolean(preset.dark),
      ...toSchemeUpdate('light', { ...SCHEME_DEFAULTS, ...preset.light }),
      ...toSchemeUpdate('dark', { ...SCHEME_DEFAULTS, ...preset.dark }),
    });

  return (
    <main className={classes.main}>
      <Title order={1} className={classes.title}>
        Mantine colors generator
      </Title>
      <Text size="sm" className={classes.description}>
        Generate 10 shades for theme.colors from a single color. The base color is kept as is, the
        other shades are built around it. Every change is stored in the URL, copy it to share the
        palette or to continue later.
      </Text>

      <div className={classes.section}>
        <Presets onSelect={applyPreset} />
      </div>

      <div className={classes.top}>
        <ColorsInput
          color={params.color}
          onColorChange={(color) => setParams({ color })}
          name={name}
          nameOverride={params.name}
          onNameChange={(value) => setParams({ name: value })}
          format={params.format}
          onFormatChange={(format) => setParams({ format })}
          displayInfo={displayInfo}
          onDisplayInfoChange={setDisplayInfo}
        />

        <div className={classes.column}>
          <OptionsControls
            title={params.virtual ? 'Light color scheme shades' : 'Shades'}
            values={lightParams}
            resolvedShade={light?.baseColorIndex ?? 6}
            onChange={(update) => setScheme('light', update)}
          />

          <Switch
            label="Different shades in dark color scheme"
            description="The palette is exported as a virtual color with separate light and dark shades"
            checked={params.virtual}
            onChange={(event) => setParams({ virtual: event.currentTarget.checked })}
            classNames={{ label: classes.label }}
            mt="xs"
          />

          {params.virtual && (
            <DarkColorInput
              color={params.darkColor}
              fallback={params.color}
              onChange={(value) => setParams({ darkColor: value })}
            />
          )}

          {params.virtual && (
            <OptionsControls
              title="Dark color scheme shades"
              values={darkParams}
              resolvedShade={dark?.baseColorIndex ?? 7}
              onChange={(update) => setScheme('dark', update)}
            />
          )}
        </div>
      </div>

      {light && (
        <>
          <div className={classes.section}>
            <div className={classes.schemeShades}>
              <div>
                {dark && (
                  <Text size="sm" className={classes.sectionLabel} mb="sm">
                    Light color scheme
                  </Text>
                )}
                <ShadesList palette={light} displayInfo={displayInfo} />
              </div>
              {dark && (
                <div>
                  <Text size="sm" className={classes.sectionLabel} mb="sm">
                    Dark color scheme
                  </Text>
                  <ShadesList palette={dark} displayInfo={displayInfo} />
                </div>
              )}
            </div>
          </div>

          <div className={classes.section}>
            <Text size="sm" className={classes.sectionLabel} mb="sm">
              Components preview
            </Text>
            <ComponentsPreview name={name} light={light} dark={dark} />
          </div>

          <div className={classes.section}>
            <CodeOutput name={name} light={light} dark={dark} />
          </div>
        </>
      )}
    </main>
  );
}

export function ColorsGenerator() {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <>
      <GeneratorHeader />
      <Suspense>
        <GeneratorContent />
      </Suspense>
    </>
  );
}
