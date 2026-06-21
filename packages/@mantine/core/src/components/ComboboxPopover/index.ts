import type {
  ComboboxPopoverFactory,
  ComboboxPopoverProps,
  ComboboxPopoverStylesNames,
} from './ComboboxPopover';
import type { ComboboxPopoverValue } from './ComboboxPopover.types';
import type { ComboboxPopoverTargetProps } from './ComboboxPopoverTarget';

export { ComboboxPopover } from './ComboboxPopover';
export { ComboboxPopoverTarget } from './ComboboxPopoverTarget';

export type {
  ComboboxPopoverProps,
  ComboboxPopoverStylesNames,
  ComboboxPopoverFactory,
  ComboboxPopoverTargetProps,
  ComboboxPopoverValue,
};

export namespace ComboboxPopover {
  export type Props = ComboboxPopoverProps;
  export type StylesNames = ComboboxPopoverStylesNames;
  export type Factory = ComboboxPopoverFactory;

  export namespace Target {
    export type Props = ComboboxPopoverTargetProps;
  }
}
