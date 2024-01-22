import { GetStylesApiOptions } from '../../../styles-api.types';

interface GetVariantClassNameInput {
  options: GetStylesApiOptions | undefined;
  classes: Record<string, string>;
  selector: string;
  unstyled: boolean | undefined;
}

/** Returns variant className, variant is always separated from selector with `--`, for example, `tab--default` */
export function getVariantClassName({
  options,
  classes,
  selector,
  unstyled,
}: GetVariantClassNameInput) {
  return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : undefined;
}
