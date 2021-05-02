import React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { ColorSwatch, DEFAULT_THEME } from '@mantine/core';
import { TagEdit, TagEditProps } from './TagEdit';
import { CheckIcon } from './CheckIcon';

const defaultProps: TagEditProps = {
  initialValues: { name: 'test-edit', color: 'red', id: 'test-red' },
  colors: [
    { color: 'red', name: 'test-red' },
    { color: 'blue', name: 'test-blue' },
  ],
  deleteLabel: 'test-delete',
  saveLabel: 'test-save',
  tagNameEditLabel: 'test-name-label',
  onTagUpdate: jest.fn(),
  onTagDelete: jest.fn(),
  onClose: jest.fn(),
  id: 'test-id',
  enableDelete: true,
  enableColorChange: true,
};

const fillData = (element: ShallowWrapper) => {
  element.find('[data-mantine-tag-color]').at(1).simulate('click');

  element
    .find('[data-mantine-tag-input]')
    .simulate('change', { currentTarget: { value: 'test-edit' } });

  return {
    color: defaultProps.colors[1].color,
    name: 'test-edit',
  };
};

describe('@mantine/core/TagEdit', () => {
  checkAccessibility([mount(<TagEdit {...defaultProps} />)]);

  it('renders colors list with given colors from theme', () => {
    const element = shallow(<TagEdit {...defaultProps} enableColorChange />);
    expect(element.find(ColorSwatch)).toHaveLength(defaultProps.colors.length);
    expect(element.find(ColorSwatch).first().prop('color')).toBe(
      DEFAULT_THEME.colors[defaultProps.colors[0].color][5]
    );
    expect(element.find('[data-mantine-tag-color-label]').first().text()).toBe(
      defaultProps.colors[0].name
    );
  });

  it('renders colors list based on enableColorChange prop', () => {
    const withColors = shallow(<TagEdit {...defaultProps} enableColorChange />);
    const withoutColors = shallow(<TagEdit {...defaultProps} enableColorChange={false} />);

    expect(withColors.find('[data-mantine-tag-colors]')).toHaveLength(1);
    expect(withoutColors.find('[data-mantine-tag-colors]')).toHaveLength(0);
  });

  it('renders check icon at selected color', () => {
    const element = mount(
      <TagEdit
        {...defaultProps}
        initialValues={{ name: 'test-edit', color: 'blue', id: 'test-red' }}
      />
    );

    expect(element.find('[data-mantine-tag-color]').at(0).find(CheckIcon)).toHaveLength(0);
    expect(element.find('[data-mantine-tag-color]').at(1).find(CheckIcon)).toHaveLength(1);
  });

  it('renders delete button based on enableDelete prop', () => {
    const withDelete = shallow(<TagEdit {...defaultProps} enableDelete />);
    const withoutDelete = shallow(<TagEdit {...defaultProps} enableDelete={false} />);

    expect(withDelete.find('[data-mantine-tag-delete]')).toHaveLength(1);
    expect(withoutDelete.find('[data-mantine-tag-delete]')).toHaveLength(0);
  });

  it('calls onTagDelete and onClose when delete button is clicked', () => {
    const deleteSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const element = shallow(
      <TagEdit {...defaultProps} id="will-delete" onTagDelete={deleteSpy} onClose={onCloseSpy} />
    );
    element.find('[data-mantine-tag-delete]').simulate('click');
    expect(deleteSpy).toHaveBeenCalledTimes(1);
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
    expect(deleteSpy).toHaveBeenCalledWith('will-delete');
  });

  it('submits new tag data when Enter key is pressed inside name edit input', () => {
    const spy = jest.fn();
    const element = shallow(<TagEdit {...defaultProps} id="will-update" onTagUpdate={spy} />);
    const editResults = fillData(element);

    element
      .find('[data-mantine-tag-input]')
      .simulate('keydown', { nativeEvent: { code: 'Enter' } });

    expect(spy).toHaveBeenCalledWith('will-update', editResults);
  });

  it('submits new tag data when save button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<TagEdit {...defaultProps} id="will-update" onTagUpdate={spy} />);
    const editResults = fillData(element);

    element.find('[data-mantine-tag-save]').simulate('click');
    expect(spy).toHaveBeenCalledWith('will-update', editResults);
  });

  it('has correct displayName', () => {
    expect(TagEdit.displayName).toEqual('@mantine/tag-picker/TagEdit');
  });
});
