import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { Autocomplete, AutocompleteProps, AutocompleteStylesNames } from './Autocomplete';

const defaultProps: AutocompleteProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/Autocomplete', () => {
  tests.axe([
    <Autocomplete aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <Autocomplete label="test-label" data={['test-1', 'test-2']} key="2" />,
    <Autocomplete label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <Autocomplete
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <Autocomplete
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
  ]);

  tests.itSupportsSystemProps<AutocompleteProps, AutocompleteStylesNames>({
    component: Autocomplete,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/Autocomplete',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<AutocompleteProps>({
    component: Autocomplete,
    props: defaultProps,
    selector: 'input',
  });
});
