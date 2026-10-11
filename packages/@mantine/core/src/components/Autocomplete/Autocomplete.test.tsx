import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
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
    displayName: '@mantine/core/Autocomplete',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<AutocompleteProps>({
    component: Autocomplete,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<AutocompleteProps>({
    component: Autocomplete,
    props: defaultProps,
    componentName: 'Autocomplete',
  });

  it('links listbox to the rendered label with aria-labelledby', () => {
    const { rerender } = render(
      <Autocomplete label="Test label" data={['test-1', 'test-2']} dropdownOpened />
    );
    expect(screen.getByRole('listbox')).toHaveAccessibleName('Test label');

    rerender(
      <>
        <Autocomplete
          label="Test label"
          labelProps={{ id: 'custom-label-id' }}
          data={['test-1', 'test-2']}
          dropdownOpened
        />
      </>
    );
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-labelledby', 'custom-label-id');
    expect(screen.getByRole('listbox')).toHaveAccessibleName('Test label');
  });

  it('does not reference label in aria-labelledby when label is excluded from inputWrapperOrder', () => {
    render(
      <Autocomplete
        label="Test label"
        aria-label="Test aria-label"
        inputWrapperOrder={['input']}
        data={['test-1', 'test-2']}
        dropdownOpened
      />
    );
    expect(screen.getByRole('listbox')).not.toHaveAttribute('aria-labelledby');
    expect(screen.getByRole('listbox')).toHaveAccessibleName('Test aria-label');
  });
});
