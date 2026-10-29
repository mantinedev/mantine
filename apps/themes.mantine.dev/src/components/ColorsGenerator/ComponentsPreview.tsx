'use client';

import { useMemo, useRef } from 'react';
import {
  Alert,
  Badge,
  Button,
  Checkbox,
  Chip,
  createTheme,
  type MantineColorShade,
  type MantineColorsTuple,
  MantineProvider,
  Pagination,
  Progress,
  Radio,
  Slider,
  Switch,
  Table,
  Tabs,
  Text,
  useComputedColorScheme,
  virtualColor,
} from '@mantine/core';
import type { Palette } from './palette';
import classes from './ColorsGenerator.module.css';

const PREVIEW_ID = 'colors-generator-preview';
const VARIANTS = ['filled', 'light', 'outline', 'subtle', 'transparent'];

interface ComponentsPreviewProps {
  name: string;
  light: Palette;
  dark: Palette | null;
}

export function ComponentsPreview({ name, light, dark }: ComponentsPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const theme = useMemo(() => {
    const lightTuple = light.colors as unknown as MantineColorsTuple;
    const darkTuple = dark?.colors as unknown as MantineColorsTuple | undefined;

    return createTheme({
      colors: darkTuple
        ? {
            [`${name}-light`]: lightTuple,
            [`${name}-dark`]: darkTuple,
            [name]: virtualColor({ name, light: `${name}-light`, dark: `${name}-dark` }),
          }
        : { [name]: lightTuple },
      primaryColor: name,
      primaryShade: {
        light: light.baseColorIndex as MantineColorShade,
        dark: (dark ?? light).baseColorIndex as MantineColorShade,
      },
    });
  }, [name, light, dark]);

  return (
    <div ref={ref} id={PREVIEW_ID} className={classes.preview}>
      <MantineProvider
        theme={theme}
        cssVariablesSelector={`#${PREVIEW_ID}`}
        getRootElement={() => ref.current ?? undefined}
        forceColorScheme={scheme}
        withGlobalClasses={false}
      >
        <Table.ScrollContainer minWidth={640}>
          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                {VARIANTS.map((variant) => (
                  <Table.Th key={variant} ta="center" tt="capitalize">
                    {variant}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                {VARIANTS.map((variant) => (
                  <Table.Td key={variant}>
                    <Button variant={variant} fullWidth>
                      Button
                    </Button>
                  </Table.Td>
                ))}
              </Table.Tr>
              <Table.Tr>
                {VARIANTS.map((variant) => (
                  <Table.Td key={variant} ta="center">
                    <Badge variant={variant === 'subtle' ? 'dot' : variant}>Badge</Badge>
                  </Table.Td>
                ))}
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>

        <div className={classes.previewGroup}>
          <div className={classes.previewBlock}>
            <Text size="sm" className={classes.previewTitle}>
              Inputs
            </Text>
            <div className={classes.previewGroup} style={{ marginTop: 0 }}>
              <Checkbox defaultChecked label="Checkbox" />
              <Switch defaultChecked label="Switch" />
              <Radio defaultChecked label="Radio" readOnly />
              <Chip defaultChecked>Chip</Chip>
            </div>
          </div>

          <div className={classes.previewBlock}>
            <Text size="sm" className={classes.previewTitle}>
              Slider and progress
            </Text>
            <Slider defaultValue={40} mb="md" />
            <Progress value={65} />
          </div>

          <div className={classes.previewBlock}>
            <Text size="sm" className={classes.previewTitle}>
              Tabs
            </Text>
            <Tabs defaultValue="first">
              <Tabs.List>
                <Tabs.Tab value="first">Overview</Tabs.Tab>
                <Tabs.Tab value="second">Activity</Tabs.Tab>
                <Tabs.Tab value="third">Settings</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </div>

          <div className={classes.previewBlock}>
            <Text size="sm" className={classes.previewTitle}>
              Pagination
            </Text>
            <Pagination total={5} defaultValue={2} />
          </div>

          <div className={classes.previewBlock}>
            <Alert title="Palette ready" variant="light">
              {dark && dark.baseColorIndex !== light.baseColorIndex
                ? `Shade ${light.baseColorIndex} in light and shade ${dark.baseColorIndex} in dark color scheme are used for filled components.`
                : `Shade ${light.baseColorIndex} is used for filled components in both color schemes.`}
            </Alert>
          </div>
        </div>
      </MantineProvider>
    </div>
  );
}
