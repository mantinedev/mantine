import type { __BaseInputProps } from '../Input';

const WRAPPER_PROPS = [
  'label',
  'description',
  'error',
  'success',
  'withAsterisk',
  'labelProps',
  'descriptionProps',
  'errorProps',
  'successProps',
  'inputContainer',
  'inputWrapperOrder',
  'wrapperProps',
  'variant',
  'mod',
  'radius',
  'leftSection',
  'leftSectionWidth',
  'leftSectionProps',
  'leftSectionPointerEvents',
  'rightSection',
  'rightSectionWidth',
  'rightSectionProps',
  'rightSectionPointerEvents',
  'withErrorStyles',
  'withSuccessStyles',
  'inputSize',
  'pointer',
  'loading',
  'loadingPosition',
] as const satisfies readonly (keyof __BaseInputProps | 'variant' | 'mod')[];

const WRAPPER_PROPS_SET = new Set<string>(WRAPPER_PROPS);

type WrapperPropName = (typeof WRAPPER_PROPS)[number];

export function splitWrapperProps<T extends Record<string, any>>(props: T) {
  const wrapperProps: Record<string, any> = {};
  const controlProps: Record<string, any> = {};

  for (const key of Object.keys(props)) {
    if (WRAPPER_PROPS_SET.has(key)) {
      wrapperProps[key] = props[key];
    } else {
      controlProps[key] = props[key];
    }
  }

  return {
    wrapperProps: wrapperProps as Pick<T, Extract<keyof T, WrapperPropName>>,
    controlProps: controlProps as Omit<T, WrapperPropName>,
  };
}
