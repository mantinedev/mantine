'use client';

import { useEffect, useMemo, useState } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { CodeHighlightTabs, type CodeHighlightTabsCode } from '@mantine/code-highlight';
import { Anchor, Button, DownloadTrigger, List, ScrollArea, Switch, Text } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { useEditorParams } from '@/hooks/use-editor-params';
import { loadPresetSource, type PresetSource } from '@/presets/load-source';
import { type GoogleFont, loadGoogleFonts, type ThemeExport } from '@/preview';
import {
  generateAppCode,
  generateFontsCode,
  generateThemeCode,
  getExportFonts,
  hasPresetStyles,
  hasVariables,
} from './generate-code';
import { createZip } from './zip';
import classes from './ThemeCode.module.css';

const EMPTY_CATALOG: GoogleFont[] = [];
const SOURCE_URL =
  'https://github.com/mantinedev/mantine/tree/master/apps/themes.mantine.dev/src/presets';

export interface ThemeExportState {
  presetId: string;
  value: ThemeExport;
}

function useFontCatalog() {
  const [catalog, setCatalog] = useState(EMPTY_CATALOG);

  useEffect(() => {
    let active = true;
    loadGoogleFonts().then((fonts) => active && setCatalog(fonts));
    return () => {
      active = false;
    };
  }, []);

  return catalog;
}

function usePresetSource(presetId: string) {
  const [source, setSource] = useState<{ presetId: string; value: PresetSource | null } | null>(
    null
  );

  useEffect(() => {
    let active = true;
    loadPresetSource(presetId).then((value) => active && setSource({ presetId, value }));
    return () => {
      active = false;
    };
  }, [presetId]);

  return source?.presetId === presetId ? source.value : null;
}

function listComponents(components: string[]) {
  const shown = components.slice(0, 4).join(', ');
  return components.length > 4 ? `${shown} and ${components.length - 4} more` : shown;
}

interface ThemeCodeProps {
  exportState: ThemeExportState | null;
}

export function ThemeCode({ exportState }: ThemeCodeProps) {
  const { presetId } = useEditorParams();
  const themeExport = exportState?.presetId === presetId ? exportState.value : null;
  const [includeStyles, setIncludeStyles] = useState(true);
  const catalog = useFontCatalog();
  const source = usePresetSource(presetId);
  const presetStyles = hasPresetStyles(source);
  const includedSource = presetStyles && includeStyles ? source : null;

  const fonts = useMemo(
    () => (themeExport ? getExportFonts(themeExport, catalog) : EMPTY_CATALOG),
    [themeExport, catalog]
  );

  const files = useMemo<CodeHighlightTabsCode[]>(() => {
    if (!themeExport) {
      return [];
    }

    const fontsCode = generateFontsCode(fonts);
    return [
      {
        fileName: 'theme.ts',
        language: 'tsx',
        code: generateThemeCode(themeExport, includedSource),
      },
      ...(includedSource?.css
        ? [{ fileName: 'theme.module.css', language: 'scss', code: includedSource.css }]
        : []),
      { fileName: 'App.tsx', language: 'tsx', code: generateAppCode(themeExport) },
      ...(fontsCode ? [{ fileName: 'index.html', language: 'html', code: fontsCode }] : []),
    ];
  }, [themeExport, fonts, includedSource]);

  const withResolver = themeExport ? hasVariables(themeExport) : false;
  const components = themeExport?.components ?? [];

  return (
    <ScrollArea className={classes.root} scrollbarSize={4}>
      <div className={classes.content}>
        <List type="ordered" spacing="sm" size="sm" className={classes.list}>
          {fonts.length > 0 && (
            <List.Item>
              <Text size="sm" className={classes.stepTitle}>
                Load the fonts
              </Text>
              <Text size="sm">
                Add the tags from <span className={classes.file}>index.html</span> to the head of
                your page, or load {fonts.map((font) => font.family).join(' and ')} with your
                framework.
              </Text>
            </List.Item>
          )}
          <List.Item>
            <Text size="sm" className={classes.stepTitle}>
              Create the theme
            </Text>
            <Text size="sm">
              Save <span className={classes.file}>theme.ts</span>
              {includedSource?.css ? (
                <>
                  {' '}
                  and <span className={classes.file}>theme.module.css</span>
                </>
              ) : null}{' '}
              next to your root component. The theme only contains the values that differ from the
              Mantine defaults.
            </Text>
          </List.Item>
          <List.Item>
            <Text size="sm" className={classes.stepTitle}>
              Pass it to MantineProvider
            </Text>
            <Text size="sm">
              {withResolver
                ? 'Pass both theme and cssVariablesResolver, as shown in App.tsx. The resolver sets the color scheme dependent variables that the theme object cannot express.'
                : 'Pass the theme to MantineProvider, as shown in App.tsx.'}
            </Text>
          </List.Item>
        </List>

        {presetStyles && (
          <Switch
            checked={includeStyles}
            onChange={(event) => setIncludeStyles(event.currentTarget.checked)}
            label="Include preset component styles"
            description={`${components.length} components (${listComponents(components)}) styled with theme.module.css`}
            classNames={{ label: classes.switchLabel }}
          />
        )}

        <Text size="sm">
          The full source code of this preset, including the page itself, is available{' '}
          <Anchor href={`${SOURCE_URL}/${presetId}`} target="_blank" size="sm">
            on GitHub
          </Anchor>
          .
        </Text>

        <Text size="sm">
          All theme changes are stored in the URL of this page. Copy the URL to share the theme or
          to continue editing it later on another device.
        </Text>

        <DownloadTrigger
          data={() =>
            createZip(files.map((file) => ({ name: file.fileName!, content: file.code })))
          }
          fileName={`${presetId}-theme.zip`}
        >
          {({ download }) => (
            <Button
              variant="default"
              leftSection={<IconDownload size={18} />}
              onClick={download}
              disabled={files.length === 0}
            >
              Download zip
            </Button>
          )}
        </DownloadTrigger>
      </div>

      {files.length > 0 && (
        <CodeHighlightTabs
          code={files}
          getFileIcon={getCodeFileIcon}
          defaultExpanded
          withExpandButton={false}
          className={classes.code}
        />
      )}
    </ScrollArea>
  );
}
