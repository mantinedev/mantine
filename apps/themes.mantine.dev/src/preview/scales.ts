export type ScaleGroup =
  | 'spacing'
  | 'radius'
  | 'fontSizes'
  | 'lineHeights'
  | 'headingSizes'
  | 'headingLineHeights';

export interface ScaleGroupConfig {
  label: string;
  unit: 'px' | '';
  min: number;
  max: number;
  step: number;
  scaleMin: number;
  scaleMax: number;
}

export const SCALE_GROUPS: Record<ScaleGroup, ScaleGroupConfig> = {
  spacing: { label: 'Spacing', unit: 'px', min: 0, max: 160, step: 1, scaleMin: 50, scaleMax: 150 },
  radius: { label: 'Radius', unit: 'px', min: 0, max: 64, step: 1, scaleMin: 0, scaleMax: 250 },
  fontSizes: {
    label: 'Font sizes',
    unit: 'px',
    min: 8,
    max: 48,
    step: 1,
    scaleMin: 80,
    scaleMax: 130,
  },
  lineHeights: {
    label: 'Line heights',
    unit: '',
    min: 1,
    max: 2.4,
    step: 0.05,
    scaleMin: 80,
    scaleMax: 130,
  },
  headingSizes: {
    label: 'Heading sizes',
    unit: 'px',
    min: 10,
    max: 120,
    step: 1,
    scaleMin: 70,
    scaleMax: 140,
  },
  headingLineHeights: {
    label: 'Heading line heights',
    unit: '',
    min: 0.9,
    max: 2,
    step: 0.05,
    scaleMin: 80,
    scaleMax: 130,
  },
};

export const SCALE_GROUP_NAMES = Object.keys(SCALE_GROUPS) as ScaleGroup[];

export interface ScaleValue {
  key: string;
  value: number;
}

export type PresetScales = Record<ScaleGroup, ScaleValue[]>;
