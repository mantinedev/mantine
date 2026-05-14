import { useState } from 'react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import type { TreeNodeData } from '../Tree';
import { TreeSelect, TreeSelectProps, TreeSelectStylesNames } from './TreeSelect';

const treeData: TreeNodeData[] = [
  {
    value: 'fruits',
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
    children: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  },
  { value: 'milk', label: 'Milk' },
];

const deepData: TreeNodeData[] = [
  {
    value: 'root',
    label: 'Root',
    children: [
      {
        value: 'branch',
        label: 'Branch',
        children: [{ value: 'leaf', label: 'Leaf' }],
      },
    ],
  },
];

const defaultProps = {
  ...inputDefaultProps,
  data: treeData,
};

describe('@mantine/core/TreeSelect', () => {
  tests.axe([
    <TreeSelect aria-label="test-label" data={treeData} key="1" />,
    <TreeSelect label="test-label" data={treeData} key="3" />,
    <TreeSelect label="test-label" error data={treeData} key="4" />,
    <TreeSelect label="test-label" error="test-error" id="test" data={treeData} key="5" />,
    <TreeSelect label="test-label" description="test-description" data={treeData} key="6" />,
  ]);

  tests.itSupportsSystemProps<TreeSelectProps, TreeSelectStylesNames>({
    component: TreeSelect,
    props: defaultProps,
    displayName: '@mantine/core/TreeSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TreeSelectProps>({
    component: TreeSelect,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<TreeSelectProps>({
    component: TreeSelect,
    props: defaultProps,
    componentName: 'TreeSelect',
  });

  it('opens/closes dropdown on input click', async () => {
    render(<TreeSelect {...defaultProps} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<TreeSelect {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<TreeSelect {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('renders tree nodes when dropdown is opened', async () => {
    render(<TreeSelect {...defaultProps} />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('option', { name: 'Fruits' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Vegetables' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Milk' })).toBeVisible();
  });

  it('shows children when parent is expanded', async () => {
    render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'Carrot' })).toBe(null);
  });

  it('expands all nodes when defaultExpandAll is true', async () => {
    render(<TreeSelect {...defaultProps} defaultExpandAll />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Carrot' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Broccoli' })).toBeVisible();
  });

  it('does not show children when parent is collapsed', async () => {
    render(<TreeSelect {...defaultProps} />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);
    expect(screen.queryByRole('option', { name: 'Banana' })).toBe(null);
  });

  describe('single mode', () => {
    it('supports uncontrolled state', async () => {
      render(<TreeSelect {...defaultProps} />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
    });

    it('supports controlled state', async () => {
      const spy = jest.fn();
      render(<TreeSelect {...defaultProps} value="milk" onChange={spy} />);
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
      expect(spy).toHaveBeenCalledWith('fruits');
    });

    it('allows deselecting option by default', async () => {
      render(<TreeSelect {...defaultProps} defaultValue="milk" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('does not allow to deselect option if allowDeselect is false', async () => {
      render(<TreeSelect {...defaultProps} defaultValue="milk" allowDeselect={false} />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
    });

    it('selects nested child nodes', async () => {
      render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(screen.getByRole('textbox')).toHaveValue('Apple');
    });

    it('sets hidden input value', async () => {
      render(<TreeSelect {...defaultProps} name="test-tree-select" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(document.querySelector('input[name="test-tree-select"]')).toHaveValue('milk');
    });
  });

  describe('multiple mode', () => {
    it('supports uncontrolled state', async () => {
      render(<TreeSelect {...defaultProps} mode="multiple" defaultExpandAll name="test-multi" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test-multi"]')).toHaveValue('apple');

      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test-multi"]')).toHaveValue('apple,banana');
    });

    it('supports controlled state', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultExpandAll
          value={['apple']}
          onChange={spy}
          name="test-multi"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test-multi"]')).toHaveValue('apple');
      expect(spy).toHaveBeenCalledWith(['apple', 'banana']);
    });

    it('deselects value on second click', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultExpandAll
          defaultValue={['apple', 'banana']}
          name="test-multi"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test-multi"]')).toHaveValue('banana');
    });

    it('calls onRemove when pill remove button is clicked', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect {...defaultProps} mode="multiple" defaultValue={['milk']} onRemove={spy} />
      );
      await userEvent.click(document.querySelector('.mantine-Pill-remove')!);
      expect(spy).toHaveBeenCalledWith('milk');
    });

    it('renders pills for selected values', () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultExpandAll
          defaultValue={['apple', 'milk']}
        />
      );
      expect(screen.getByText('Apple', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
      expect(screen.getByText('Milk', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
    });
  });

  describe('checkbox mode', () => {
    it('supports uncontrolled state', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" defaultExpandAll name="test-checkbox" />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('apple');
    });

    it('cascades check to children when parent is clicked', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" defaultExpandAll name="test-checkbox" />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('apple,banana');
    });

    it('does not cascade when checkStrictly is true', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          checkStrictly
          defaultExpandAll
          name="test-checkbox"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('fruits');
    });

    it('unchecks all children when parent is unchecked', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          defaultExpandAll
          defaultValue={['apple', 'banana']}
          name="test-checkbox"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('');
    });

    it('supports checkedStrategy="all"', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          checkedStrategy="all"
          defaultExpandAll
          name="test-checkbox"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      const hiddenValue = document
        .querySelector('input[name="test-checkbox"]')!
        .getAttribute('value')!;
      expect(hiddenValue.split(',').sort()).toEqual(['apple', 'banana', 'fruits']);
    });

    it('supports checkedStrategy="parent"', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          checkedStrategy="parent"
          defaultExpandAll
          name="test-checkbox"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('fruits');
    });

    it('renders pills for checked values', () => {
      render(<TreeSelect {...defaultProps} mode="checkbox" defaultValue={['apple']} />);
      expect(screen.getByText('Apple', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
    });
  });

  describe('expand/collapse', () => {
    it('expands collapsed parent via chevron click', async () => {
      render(<TreeSelect {...defaultProps} dropdownOpened />);

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);

      const expandButtons = screen.getAllByLabelText('Expand');
      await userEvent.click(expandButtons[0]);

      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('expands parent on click when expandOnClick is true', async () => {
      render(<TreeSelect {...defaultProps} expandOnClick dropdownOpened />);

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);

      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));

      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('calls onExpandedChange when expand state changes', async () => {
      const spy = jest.fn();
      render(<TreeSelect {...defaultProps} dropdownOpened onExpandedChange={spy} />);

      const expandButtons = screen.getAllByLabelText('Expand');
      await userEvent.click(expandButtons[0]);
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0]).toContain('fruits');
    });
  });

  describe('search', () => {
    it('filters options with searchable prop', async () => {
      render(<TreeSelect {...defaultProps} searchable defaultExpandAll />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.type(screen.getByRole('textbox'), 'Apple');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
      expect(screen.queryByRole('option', { name: 'Milk' })).toBe(null);
    });

    it('displays nothing found message when no options match', async () => {
      render(<TreeSelect {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.type(screen.getByRole('textbox'), 'xyz');
      expect(screen.getByText('Nothing found')).toBeVisible();
    });

    it('calls onSearchChange when search value changes', async () => {
      const spy = jest.fn();
      render(<TreeSelect {...defaultProps} searchable onSearchChange={spy} />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.type(screen.getByRole('textbox'), 'test');
      expect(spy).toHaveBeenCalledWith('test');
    });

    it('clears search on selection when clearSearchOnChange is true', async () => {
      render(<TreeSelect {...defaultProps} searchable />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.type(screen.getByRole('textbox'), 'Mil');
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
    });

    it('auto-expands parent branches in filtered results', async () => {
      render(<TreeSelect {...defaultProps} searchable />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.type(screen.getByRole('textbox'), 'Apple');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });
  });

  describe('keyboard navigation', () => {
    it('expands node on ArrowRight key', async () => {
      render(<TreeSelect {...defaultProps} />);
      await userEvent.click(screen.getByRole('textbox'));

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);

      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowRight}');

      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('collapses node on ArrowLeft key', async () => {
      render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
      await userEvent.click(screen.getByRole('textbox'));

      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();

      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowLeft}');

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);
    });
  });

  describe('clearable', () => {
    it('clears value when clear button is clicked in single mode', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          defaultValue="milk"
          clearable
          clearButtonProps={{ 'aria-label': 'Clear value' }}
        />
      );
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
      await userEvent.click(screen.getByLabelText('Clear value'));
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('calls onClear when clear button is clicked', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          {...defaultProps}
          defaultValue="milk"
          clearable
          onClear={spy}
          clearButtonProps={{ 'aria-label': 'Clear value' }}
        />
      );
      await userEvent.click(screen.getByLabelText('Clear value'));
      expect(spy).toHaveBeenCalled();
    });
  });

  it('displays nothing found message when data is empty', async () => {
    render(<TreeSelect {...defaultProps} data={[]} nothingFoundMessage="No data" />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('No data')).toBeVisible();
  });

  it('supports custom hidden input divider', () => {
    render(
      <TreeSelect
        {...defaultProps}
        mode="multiple"
        defaultValue={['apple', 'milk']}
        hiddenInputValuesDivider="|"
        name="test"
      />
    );
    expect(document.querySelector('input[name="test"]')).toHaveValue('apple|milk');
  });

  it('supports dynamically changing data', async () => {
    function Wrapper() {
      const [data, setData] = useState<TreeNodeData[]>([{ value: 'a', label: 'Alpha' }]);
      return (
        <>
          <TreeSelect label="Test" data={data} value="a" />
          <button type="button" onClick={() => setData([{ value: 'a', label: 'Updated' }])}>
            Update
          </button>
        </>
      );
    }

    render(<Wrapper />);
    expect(screen.getByRole('textbox')).toHaveValue('Alpha');
    await userEvent.click(screen.getByRole('button', { name: 'Update' }));
    expect(screen.getByRole('textbox')).toHaveValue('Updated');
  });

  it('renders tree lines with withLines prop', async () => {
    const { container } = render(
      <TreeSelect {...defaultProps} dropdownOpened defaultExpandAll withLines />
    );
    expect(container.querySelector('.branchVertical')).toBeInTheDocument();
  });

  it('does not render tree lines when withLines is false', async () => {
    const { container } = render(
      <TreeSelect {...defaultProps} dropdownOpened defaultExpandAll withLines={false} />
    );
    expect(container.querySelector('.branchVertical')).toBe(null);
  });

  it('supports deep nesting', async () => {
    render(<TreeSelect data={deepData} defaultExpandAll dropdownOpened aria-label="test" />);
    expect(screen.getByRole('option', { name: 'Root' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Branch' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Leaf' })).toBeVisible();
  });

  describe('searchable single mode displays selection', () => {
    it('shows defaultValue label on mount', () => {
      render(<TreeSelect {...defaultProps} searchable defaultValue="milk" />);
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
    });

    it('shows controlled value label on mount', () => {
      render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('textbox')).toHaveValue('Milk');
    });

    it('updates displayed label when controlled value changes', () => {
      const { rerender } = render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('textbox')).toHaveValue('Milk');

      rerender(<TreeSelect {...defaultProps} searchable value="fruits" />);
      expect(screen.getByRole('textbox')).toHaveValue('Fruits');
    });

    it('clears displayed label when controlled value becomes null', () => {
      const { rerender } = render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('textbox')).toHaveValue('Milk');

      rerender(<TreeSelect {...defaultProps} searchable value={null} />);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });

  describe('expandOnClick expands parent nodes without selecting', () => {
    it('expands parent without selecting in single mode', async () => {
      render(<TreeSelect {...defaultProps} expandOnClick name="test" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('expands parent without selecting in multiple mode', async () => {
      render(<TreeSelect {...defaultProps} mode="multiple" expandOnClick name="test" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('selects leaf nodes normally in single mode with expandOnClick', async () => {
      render(<TreeSelect {...defaultProps} expandOnClick defaultExpandAll name="test" />);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
    });
  });

  describe('maxValues in checkbox mode', () => {
    it('prevents exceeding maxValues when checking a leaf', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          maxValues={1}
          defaultExpandAll
          defaultValue={['apple']}
          name="test"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
    });

    it('prevents exceeding maxValues when checking a parent that would cascade', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" maxValues={1} defaultExpandAll name="test" />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
    });

    it('allows unchecking even when at maxValues', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          maxValues={1}
          defaultExpandAll
          defaultValue={['apple']}
          name="test"
        />
      );
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
    });

    it('preserves search query when checkbox click is rejected by maxValues', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          maxValues={1}
          searchable
          defaultExpandAll
          defaultValue={['apple']}
          name="test"
        />
      );
      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      await userEvent.type(input, 'Ban');
      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
      expect(input).toHaveValue('Ban');
    });
  });

  describe('maxValues in multiple mode', () => {
    it('preserves search query when click is rejected by maxValues', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          maxValues={1}
          searchable
          defaultExpandAll
          defaultValue={['apple']}
          name="test"
        />
      );
      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      await userEvent.type(input, 'Ban');
      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
      expect(input).toHaveValue('Ban');
    });

    it('clears search after a successful selection', async () => {
      render(
        <TreeSelect {...defaultProps} mode="multiple" searchable defaultExpandAll name="test" />
      );
      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      await userEvent.type(input, 'App');
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
      expect(input).toHaveValue('');
    });
  });
});
