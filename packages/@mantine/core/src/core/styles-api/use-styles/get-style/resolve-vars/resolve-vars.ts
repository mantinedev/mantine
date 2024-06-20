import { CSSProperties } from 'react';
import { CssVariable } from '../../../../Box';
import { MantineTheme } from '../../../../MantineProvider';
import { mergeVars } from './merge-vars';

type ResolvedVars = Partial<Record<string, Record<CssVariable, string>>>;

export type VarsResolver = (
  theme: MantineTheme,
  props: Record<string, any>,
  stylesCtx: Record<string, any> | undefined
) => ResolvedVars;

interface ResolveVarsInput {
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
  theme: MantineTheme;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  selector: string;
  themeName: string[];
  headless?: boolean;
}

export function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
  headless,
}: ResolveVarsInput) {
  return mergeVars([
    headless ? {} : varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx),
  ])?.[selector] as CSSProperties;
}
