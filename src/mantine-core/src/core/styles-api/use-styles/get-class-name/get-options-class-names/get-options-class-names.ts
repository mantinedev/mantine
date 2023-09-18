import {
  resolveClassNames,
  ResolveClassNamesInput,
} from '../resolve-class-names/resolve-class-names';
import { GetStylesApiOptions } from '../../../styles-api.types';

interface GetOptionsClassNamesInput extends Omit<ResolveClassNamesInput, 'classNames'> {
  selector: string;
  options: GetStylesApiOptions | undefined;
}

export function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme,
}: GetOptionsClassNamesInput) {
  return resolveClassNames({
    theme,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx,
  })[selector];
}
