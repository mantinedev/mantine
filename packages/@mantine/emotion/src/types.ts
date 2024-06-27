import * as CSSType from 'csstype';
import type { MantineTheme } from '@mantine/core';
import type { EmotionHelpers } from './create-styles';

export type EmotionSx = CSSObject | ((theme: MantineTheme, u: EmotionHelpers) => CSSObject);
export type EmotionStyles =
  | Record<string, CSSObject>
  | ((
      theme: MantineTheme,
      props: Record<string, any>,
      u: EmotionHelpers
    ) => Record<string, CSSObject>);

export interface CSS {
  (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
  (...args: CSSInterpolation[]): string;
}

export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudos,
    CSSOthersObject,
    CSSTssSpecials {}

export type CSSTssSpecials = {
  ref?: string;
};

export type CSSProperties = CSSType.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K] | Array<Extract<CSSProperties[K], string>>;
};

export type CSSPseudos = { [K in CSSType.Pseudos]?: CSSObject };

export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {}

export interface ComponentSelector {
  __emotion_styles: any;
}

export type Keyframes = {
  name: string;
  styles: string;
  anim: number;
  toString: () => string;
} & string;

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | SerializedStyles
  | CSSObject;

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export interface CSSOthersObject {
  [propertiesName: string]: CSSInterpolation;
}
