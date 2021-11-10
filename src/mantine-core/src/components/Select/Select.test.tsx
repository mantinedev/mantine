import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { SelectRightSection } from './SelectRightSection/SelectRightSection';
import { Input } from '../Input/Input';
import { Select } from './Select';
// import { Select as SelectStylesApi } from './styles.api';

const defaultProps = {
  initiallyOpened: true,
  label: 'Test',
  data: [
    { value: 'test-1', label: 'Test 1' },
    { value: 'test-2', label: 'Test 2' },
  ],
};

const data = Array(50)
  .fill(0)
  .map((_, index) => ({ value: index.toString(), label: index.toString() }));

describe('@mantine/core/Select', () => {
  itSupportsClassName(Select, defaultProps);
  itSupportsStyle(Select, defaultProps);
  itSupportsMargins(Select, defaultProps);
  itSupportsRef(Select, defaultProps, HTMLInputElement);

  // checkAccessibility([
  //   mount(<Select {...defaultProps} />),
  //   mount(<Select {...defaultProps} initiallyOpened={false} />),
  //   mount(<Select {...defaultProps} value="test-1" clearable clearButtonLabel="test-clear" />),
  // ]);

  // itSupportsStylesApi(
  //   Select,
  //   {
  //     ...defaultProps,
  //     icon: '$',
  //     rightSection: '$',
  //     label: 'test-label',
  //     error: 'test-error',
  //     description: 'test-description',
  //     required: true,
  //   },
  //   Object.keys(SelectStylesApi).filter(
  //     (key) =>
  //       key !== 'hovered' &&
  //       key !== 'selected' &&
  //       key !== 'nothingFound' &&
  //       key !== 'disabled' &&
  //       key !== 'separator' &&
  //       key !== 'separatorLabel'
  //   ),
  //   'Select'
  // );

  it('renders correct amount of items based on data prop', async () => {
    const element = shallow(<Select {...defaultProps} data={data.slice(0, 5)} initiallyOpened />);

    setTimeout(() => {
      expect(element.find('.mantine-Select-item')).toHaveLength(5);
    });
  });

  it('renders correct amount of items based on filter prop', () => {
    const element = shallow(
      <Select
        data={data}
        initiallyOpened
        searchable
        filter={(query, item) => item.value.includes('2')}
      />
    );

    // Numbers 0-50 which include 2
    setTimeout(() => {
      expect(element.render().find('.mantine-Select-item')).toHaveLength(14);
    });
  });

  it('renders correct amount of disabled items', () => {
    const element = shallow(
      <Select
        data={Array(50)
          .fill(0)
          .map((_, index) => ({
            value: index.toString(),
            label: index.toString(),
            disabled: index % 2 === 0,
          }))}
        initiallyOpened
        searchable
      />
    );

    setTimeout(() => {
      expect(element.render().find('.mantine-Select-item[disabled]')).toHaveLength(25);
    });
  });

  it('renders correct grouped items', () => {
    const element = shallow(
      <Select
        data={Array(50)
          .fill(0)
          .map((_, index) => ({
            value: index.toString(),
            label: index.toString(),
            disabled: index % 2 === 0,
            group: `${index % 2}`,
          }))}
        initiallyOpened
        searchable
      />
    );

    setTimeout(() => {
      expect(element.render().find('.mantine-Select-item')).toHaveLength(50);
      expect(element.render().find('.mantine-Select-item[disabled]')).toHaveLength(25);
      expect(element.render().find('.mantine-Divider-horizontal')).toHaveLength(2);
    });
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<Select {...defaultProps} wrapperProps={{ 'aria-label': 'test' }} />);
    expect(element.render().attr('aria-label')).toBe('test');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <Select
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
      <Select
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

  it('clears value when clear button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(
      <Select {...defaultProps} initiallyOpened clearable value="test-1" onChange={spy} />
    );
    const clearButton = element
      .find(Input)
      .dive()
      .find(SelectRightSection)
      .dive()
      .find(CloseButton);
    expect(clearButton).toHaveLength(1);
    clearButton.simulate('click');
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('has correct displayName', () => {
    expect(Select.displayName).toEqual('@mantine/core/Select');
  });
});
