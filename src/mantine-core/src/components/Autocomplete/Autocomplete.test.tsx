import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { itSupportsSystemProps, checkAccessibility } from '@mantine/tests';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { Autocomplete, AutocompleteProps } from './Autocomplete';

const defaultProps: AutocompleteProps = {
  withinPortal: false,
  initiallyOpened: true,
  label: 'Test',
  data: [{ value: 'test-1' }, { value: 'test-2' }],
};

const largeDataSet: AutocompleteProps['data'] = Array(50)
  .fill(0)
  .map((_, index) => ({ value: index.toString() }));

const queries = {
  getDropdown: (container: HTMLElement) =>
    container.querySelector('.mantine-Autocomplete-dropdown'),
  getItems: (container: HTMLElement) => container.querySelectorAll('.mantine-Autocomplete-item'),
};

describe('@mantine/core/Autocomplete', () => {
  checkAccessibility([render(<Autocomplete {...defaultProps} />)]);
  itSupportsSystemProps({
    component: Autocomplete,
    props: defaultProps,
    displayName: '@mantine/core/Autocomplete',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders dropdown when value has both full match and partial match', () => {
    const { container } = render(
      <Autocomplete {...defaultProps} data={[{ value: 'AAA' }, { value: 'AA' }]} value="AA" />
    );

    expect(queries.getDropdown(container)).toBeInTheDocument();
  });

  it('renders correct amount of items based on data prop', () => {
    const { container } = render(
      <Autocomplete {...defaultProps} data={largeDataSet.slice(0, 5)} limit={10} />
    );

    expect(queries.getItems(container)).toHaveLength(5);
  });

  it('renders correct amount of items based on filter prop', () => {
    const { container } = render(
      <Autocomplete
        {...defaultProps}
        data={largeDataSet}
        limit={10}
        filter={(_query, item) => item.value.includes('2')}
      />
    );

    // Numbers 0-50 which include 2, e.g. 12, 22, 42
    expect(queries.getItems(container)).toHaveLength(10);
  });

  it('limits amount of shown items based on limit prop', () => {
    const { container } = render(
      <Autocomplete {...defaultProps} data={largeDataSet} initiallyOpened limit={10} />
    );
    expect(queries.getItems(container)).toHaveLength(10);
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(
      <Autocomplete {...defaultProps} wrapperProps={{ 'aria-label': 'test' }} />
    );
    expect(element.render().attr('aria-label')).toBe('test');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <Autocomplete
        {...defaultProps}
        id="test-id"
        required
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(element.find(InputWrapper).prop('id')).toBe('test-id');
    expect(element.find(InputWrapper).prop('required')).toBe(true);
    expect(element.find(InputWrapper).prop('label')).toBe('test-label');
    expect(element.find(InputWrapper).prop('error')).toBe('test-error');
    expect(element.find(InputWrapper).prop('description')).toBe('test-description');
  });

  it('passes required, id, invalid, icon and radius props to Input component', () => {
    const element = shallow(
      <Autocomplete
        {...defaultProps}
        required
        id="test-id"
        type="number"
        error="test-error"
        icon="$"
        radius="sm"
      />
    );

    expect(element.find(Input).prop('id')).toBe('test-id');
    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('has correct displayName', () => {
    expect(Autocomplete.displayName).toEqual('@mantine/core/Autocomplete');
  });
});
