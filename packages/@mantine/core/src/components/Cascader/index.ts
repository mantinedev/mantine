import type {
  CascaderFactory,
  CascaderFormatValue,
  CascaderFormatValueInput,
  CascaderOption,
  CascaderProps,
  CascaderStylesNames,
} from './Cascader';

export { Cascader } from './Cascader';
export type { CascaderFlatPath } from './flatten-cascader-paths';
export { flattenCascaderPaths } from './flatten-cascader-paths';
export { getCascaderPathOptions } from './get-cascader-path-options';
export type {
  CascaderProps,
  CascaderStylesNames,
  CascaderFactory,
  CascaderOption,
  CascaderFormatValue,
  CascaderFormatValueInput,
};

export namespace Cascader {
  export type Props = CascaderProps;
  export type StylesNames = CascaderStylesNames;
  export type Factory = CascaderFactory;
  export type Option = CascaderOption;
}
