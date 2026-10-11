import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
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

  it('supports uncontrolled state', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} defaultValue="test-1" />);
    expect(screen.getByRole('combobox')).toHaveValue('test-1');

    await userEvent.type(screen.getByRole('combobox'), '-changed');
    expect(screen.getByRole('combobox')).toHaveValue('test-1-changed');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<Autocomplete data={['test-1', 'test-2']} value="test-1" onChange={spy} />);

    await userEvent.type(screen.getByRole('combobox'), 'x');
    expect(screen.getByRole('combobox')).toHaveValue('test-1');
    expect(spy).toHaveBeenCalledWith('test-1x');
  });

  it('sets input value to the option selected in the dropdown', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));

    expect(screen.getByRole('combobox')).toHaveValue('test-2');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens dropdown on focus by default', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} />);
    await userEvent.tab();
    expect(screen.getByRole('option', { name: 'test-1' })).toBeInTheDocument();
  });

  it('does not open dropdown on focus when openOnFocus is false', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} openOnFocus={false} />);
    await userEvent.tab();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'test-1' })).toBeInTheDocument();
  });

  it('hides the dropdown when readOnly or disabled is set', async () => {
    const { container, rerender } = render(<Autocomplete data={['test-1', 'test-2']} readOnly />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(container.querySelector('.mantine-Autocomplete-dropdown')).toHaveAttribute(
      'data-hidden'
    );

    rerender(<Autocomplete data={['test-1', 'test-2']} disabled />);
    expect(container.querySelector('.mantine-Autocomplete-dropdown')).toHaveAttribute(
      'data-hidden'
    );

    rerender(<Autocomplete data={['test-1', 'test-2']} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(container.querySelector('.mantine-Autocomplete-dropdown')).not.toHaveAttribute(
      'data-hidden'
    );
  });

  it('displays clear button only when clearable is set and the value is not empty', () => {
    const { container, rerender } = render(
      <Autocomplete data={['test-1', 'test-2']} clearable value="" onChange={() => {}} />
    );
    expect(container.querySelector('.mantine-InputClearButton-root')).toBe(null);

    rerender(
      <Autocomplete data={['test-1', 'test-2']} clearable value="test-1" onChange={() => {}} />
    );
    expect(container.querySelector('.mantine-InputClearButton-root')).toBeInTheDocument();

    rerender(
      <Autocomplete
        data={['test-1', 'test-2']}
        clearable
        value="test-1"
        onChange={() => {}}
        disabled
      />
    );
    expect(container.querySelector('.mantine-InputClearButton-root')).toBe(null);
  });

  it('clears the value and calls onClear when the clear button is clicked', async () => {
    const onClear = jest.fn();
    const { container } = render(
      <Autocomplete data={['test-1', 'test-2']} clearable defaultValue="test-1" onClear={onClear} />
    );

    await userEvent.click(container.querySelector('.mantine-InputClearButton-root')!);
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('selects the highlighted option on blur with autoSelectOnBlur', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} autoSelectOnBlur />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('test-1');
  });

  it('forwards aria-label to the dropdown', async () => {
    render(<Autocomplete data={['test-1', 'test-2']} aria-label="test-label" />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-label', 'test-label');
  });

  it('includes the value in FormData when name is set', async () => {
    const spy = jest.fn();
    render(
      <form
        onSubmit={(event) => {
          event.preventDefault();
          spy(new FormData(event.currentTarget).get('test-name'));
        }}
      >
        <Autocomplete data={['test-1', 'test-2']} name="test-name" defaultValue="test-1" />
        <button type="submit">submit</button>
      </form>
    );

    await userEvent.click(screen.getByText('submit'));
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('passes scrollBehavior to scrollIntoView when options are navigated with keyboard', async () => {
    const spy = jest.spyOn(window.HTMLElement.prototype, 'scrollIntoView');
    render(<Autocomplete {...defaultProps} scrollBehavior="smooth" />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}');
    expect(spy).toHaveBeenLastCalledWith({ block: 'nearest', behavior: 'smooth' });
    spy.mockRestore();
  });

  it('links listbox to the rendered label with aria-labelledby', () => {
    const { rerender } = render(
      <Autocomplete label="Test label" data={['test-1', 'test-2']} dropdownOpened />
    );
    expect(screen.getByRole('listbox')).toHaveAccessibleName('Test label');

    rerender(
      <Autocomplete
        label="Test label"
        labelProps={{ id: 'custom-label-id' }}
        data={['test-1', 'test-2']}
        dropdownOpened
      />
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
