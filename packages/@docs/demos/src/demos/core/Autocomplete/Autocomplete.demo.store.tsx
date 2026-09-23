import { Autocomplete, AutocompleteProps, useAutocomplete } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Autocomplete, AutocompleteProps, useAutocomplete } from '@mantine/core';

function TabCompleteAutocomplete({
  value,
  defaultValue,
  onChange,
  onKeyDown,
  ...others
}: Omit<AutocompleteProps, 'store'>) {
  const store = useAutocomplete({ value, defaultValue, onChange });

  return (
    <Autocomplete
      {...others}
      store={store}
      onKeyDown={(event) => {
        if (event.key === 'Tab' && !event.shiftKey && store.isDropdownOpened()) {
          if (store.getSelectedOptionIndex() === -1) {
            store.selectFirstOption();
          }

          if (store.getSelectedOptionIndex() !== -1) {
            event.preventDefault();
            store.clickSelectedOption();
          }
        }

        onKeyDown?.(event);
      }}
    />
  );
}

function Demo() {
  return (
    <TabCompleteAutocomplete
      label="Your favorite library"
      description="Press Tab to complete the highlighted or first option"
      placeholder="Start typing"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact', 'Qwik']}
    />
  );
}
`;

function TabCompleteAutocomplete({
  value,
  defaultValue,
  onChange,
  onKeyDown,
  ...others
}: Omit<AutocompleteProps, 'store'>) {
  const store = useAutocomplete({ value, defaultValue, onChange });

  return (
    <Autocomplete
      {...others}
      store={store}
      onKeyDown={(event) => {
        if (event.key === 'Tab' && !event.shiftKey && store.isDropdownOpened()) {
          if (store.getSelectedOptionIndex() === -1) {
            store.selectFirstOption();
          }

          if (store.getSelectedOptionIndex() !== -1) {
            event.preventDefault();
            store.clickSelectedOption();
          }
        }

        onKeyDown?.(event);
      }}
    />
  );
}

function Demo() {
  return (
    <TabCompleteAutocomplete
      label="Your favorite library"
      description="Press Tab to complete the highlighted or first option"
      placeholder="Start typing"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact', 'Qwik']}
    />
  );
}

export const store: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
