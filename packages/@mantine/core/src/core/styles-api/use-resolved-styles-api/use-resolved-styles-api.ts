import { FactoryPayload } from '../../factory';
import { useMantineTheme } from '../../MantineProvider';
import { ClassNames, Styles } from '../styles-api.types';
import { resolveClassNames } from '../use-styles/get-class-name/resolve-class-names/resolve-class-names';
import { resolveStyles } from '../use-styles/get-style/resolve-styles/resolve-styles';

export interface UseResolvedStylesApiInput<Payload extends FactoryPayload> {
  classNames: ClassNames<Payload> | undefined;
  styles: Styles<Payload> | undefined;
  props: Record<string, any>;
  stylesCtx?: Record<string, any>;
}

export function useResolvedStylesApi<Payload extends FactoryPayload>({
  classNames,
  styles,
  props,
  stylesCtx,
}: UseResolvedStylesApiInput<Payload>) {
  const theme = useMantineTheme();

  return {
    resolvedClassNames: resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || undefined,
    }),

    resolvedStyles: resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || undefined,
    }),
  };
}
