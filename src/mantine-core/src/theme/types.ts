import type { CSSProperties } from 'react';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type _TupleOf<T, N extends number, R extends readonly unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, readonly [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? readonly T[]
    : _TupleOf<T, N, []>
  : never;

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineNumberSize = MantineSize | number;

type HeadingStyle = {
  readonly fontSize: CSSProperties['fontSize'];
  readonly lineHeight: CSSProperties['lineHeight'];
};

export type MantineSizes = Record<MantineSize, number>;

export interface MantineTheme {
  readonly colorScheme: 'light' | 'dark';
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly lineHeight: CSSProperties['lineHeight'];
  readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;

  readonly fontSizes: MantineSizes;
  readonly radius: MantineSizes;
  readonly spacing: MantineSizes;
  readonly shadows: Record<MantineSize, string>;

  readonly headings: {
    readonly fontFamily: CSSProperties['fontFamily'];
    readonly fontWeight: CSSProperties['fontWeight'];
    readonly sizes: {
      readonly h1: HeadingStyle;
      readonly h2: HeadingStyle;
      readonly h3: HeadingStyle;
      readonly h4: HeadingStyle;
      readonly h5: HeadingStyle;
      readonly h6: HeadingStyle;
    };
  };
}

export interface InternalMantineTheme extends MantineTheme {
  __mantine_theme: boolean;
}

export type MantineThemeOverride = DeepPartial<MantineTheme>;

export interface DefaultProps<T = any> {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: MantineThemeOverride;
  classNames?: T extends (...args: any) => any ? Partial<ReturnType<T>> : never;
  styles?: T extends (...args: any) => any
    ? Partial<Record<keyof ReturnType<T>, React.CSSProperties>>
    : never;
}
