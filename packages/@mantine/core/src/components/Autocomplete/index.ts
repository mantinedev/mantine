import type {
  AutocompleteFactory,
  AutocompleteProps,
  AutocompleteStylesNames,
  RenderAutocompleteOption,
} from './Autocomplete';

export { Autocomplete } from './Autocomplete';

export type {
  AutocompleteProps,
  AutocompleteStylesNames,
  RenderAutocompleteOption,
  AutocompleteFactory,
};

export namespace Autocomplete {
  export type Props = AutocompleteProps;
  export type StylesNames = AutocompleteStylesNames;
  export type RenderOption = RenderAutocompleteOption;
  export type Factory = AutocompleteFactory;
}
