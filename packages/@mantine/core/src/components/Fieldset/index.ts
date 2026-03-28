import type {
  FieldsetFactory,
  FieldsetProps,
  FieldsetStylesNames,
  FieldsetVariant,
} from './Fieldset';

export { Fieldset } from './Fieldset';

export type { FieldsetProps, FieldsetStylesNames, FieldsetFactory, FieldsetVariant };

export namespace Fieldset {
  export type Props = FieldsetProps;
  export type StylesNames = FieldsetStylesNames;
  export type Factory = FieldsetFactory;
  export type Variant = FieldsetVariant;
}
