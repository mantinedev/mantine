import { useState } from 'react';
import {
  externalInputFill,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { TreeNodeData } from '../Tree';
import {
  TreeSelect,
  TreeSelectProps,
  TreeSelectRenderPillPayload,
  TreeSelectStylesNames,
} from './TreeSelect';

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
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<TreeSelect {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<TreeSelect {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('renders tree nodes when dropdown is opened', async () => {
    render(<TreeSelect {...defaultProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Fruits' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Vegetables' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Milk' })).toBeVisible();
  });

  it('shows children when parent is expanded', async () => {
    render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'Carrot' })).toBe(null);
  });

  it('expands all nodes when defaultExpandAll is true', async () => {
    render(<TreeSelect {...defaultProps} defaultExpandAll />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Carrot' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Broccoli' })).toBeVisible();
  });

  it('does not show children when parent is collapsed', async () => {
    render(<TreeSelect {...defaultProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);
    expect(screen.queryByRole('option', { name: 'Banana' })).toBe(null);
  });

  describe('single mode', () => {
    it('supports uncontrolled state', async () => {
      render(<TreeSelect {...defaultProps} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('supports controlled state', async () => {
      const spy = jest.fn();
      render(<TreeSelect {...defaultProps} value="milk" onChange={spy} />);
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
      expect(spy).toHaveBeenCalledWith('fruits');
    });

    it('allows deselecting option by default', async () => {
      render(<TreeSelect {...defaultProps} defaultValue="milk" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('combobox')).toHaveValue('');
    });

    it('does not allow to deselect option if allowDeselect is false', async () => {
      render(<TreeSelect {...defaultProps} defaultValue="milk" allowDeselect={false} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('selects nested child nodes', async () => {
      render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(screen.getByRole('combobox')).toHaveValue('Apple');
    });

    it('sets hidden input value', async () => {
      render(<TreeSelect {...defaultProps} name="test-tree-select" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(document.querySelector('input[name="test-tree-select"]')).toHaveValue('milk');
    });
  });

  describe('multiple mode', () => {
    it('supports uncontrolled state', async () => {
      render(<TreeSelect {...defaultProps} mode="multiple" defaultExpandAll name="test-multi" />);
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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

    it('removes last value when backspace is pressed with empty search', async () => {
      render(
        <TreeSelect {...defaultProps} mode="multiple" defaultValue={['apple', 'milk']} searchable />
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.keyboard('{Backspace}');
      expect(
        screen.queryByText('Milk', { selector: '.mantine-Pill-label' })
      ).not.toBeInTheDocument();
      expect(screen.getByText('Apple', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
    });

    it('does not remove last value when backspace is pressed and readOnly is set', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['apple', 'milk']}
          searchable
          readOnly
        />
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.keyboard('{Backspace}');
      expect(screen.getByText('Apple', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
      expect(screen.getByText('Milk', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
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

  describe('renderPill', () => {
    const customPill = ({ value, onRemove }: TreeSelectRenderPillPayload) => (
      <button type="button" onClick={onRemove} data-testid={`custom-${value}`}>
        {`custom-${value}`}
      </button>
    );

    it('calls renderPill with node, value, onRemove, disabled and readOnly', () => {
      const renderPill = jest.fn(customPill);
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['apple', 'milk']}
          disabled
          readOnly
          renderPill={renderPill}
        />
      );

      expect(renderPill).toHaveBeenCalledWith(
        expect.objectContaining({
          node: expect.objectContaining({ value: 'apple', label: 'Apple' }),
          value: 'apple',
          onRemove: expect.any(Function),
          disabled: true,
          readOnly: true,
        })
      );
      expect(renderPill).toHaveBeenCalledWith(
        expect.objectContaining({
          node: expect.objectContaining({ value: 'milk', label: 'Milk' }),
          value: 'milk',
        })
      );
    });

    it('renders renderPill output instead of the default pill', () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['apple', 'milk']}
          renderPill={customPill}
        />
      );

      expect(screen.getByTestId('custom-apple')).toBeInTheDocument();
      expect(screen.getByTestId('custom-milk')).toBeInTheDocument();
      expect(document.querySelector('.mantine-Pill-root')).toBe(null);
    });

    it('removes the value when onRemove from the payload is called in multiple mode', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['apple', 'milk']}
          name="test-multiple"
          onRemove={spy}
          renderPill={customPill}
        />
      );

      await userEvent.click(screen.getByTestId('custom-apple'));

      expect(document.querySelector('input[name="test-multiple"]')).toHaveValue('milk');
      expect(spy).toHaveBeenCalledWith('apple');
      expect(screen.queryByTestId('custom-apple')).toBe(null);
    });

    it('unchecks the whole subtree when onRemove is called for a parent pill in checkbox mode', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          checkedStrategy="parent"
          defaultValue={['fruits']}
          name="test-checkbox"
          onRemove={spy}
          renderPill={customPill}
        />
      );

      await userEvent.click(screen.getByTestId('custom-fruits'));

      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('');
      expect(spy).toHaveBeenCalledWith('fruits');
    });

    it('unchecks only the node itself when checkStrictly is set', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          mode="checkbox"
          checkStrictly
          defaultValue={['fruits', 'apple']}
          name="test-checkbox"
          renderPill={customPill}
        />
      );

      await userEvent.click(screen.getByTestId('custom-fruits'));

      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('apple');
    });

    it('passes a placeholder node when the value is not present in data', () => {
      const renderPill = jest.fn(customPill);
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['unknown']}
          renderPill={renderPill}
        />
      );

      expect(renderPill).toHaveBeenCalledWith(
        expect.objectContaining({ node: { value: 'unknown', label: 'unknown' }, value: 'unknown' })
      );
    });

    it('does not call renderPill for the overflow pill', () => {
      const renderPill = jest.fn(customPill);
      render(
        <TreeSelect
          {...defaultProps}
          mode="multiple"
          defaultValue={['apple', 'milk']}
          maxDisplayedValues={1}
          renderPill={renderPill}
        />
      );

      expect(renderPill).toHaveBeenCalledWith(expect.objectContaining({ value: 'apple' }));
      expect(renderPill).not.toHaveBeenCalledWith(expect.objectContaining({ value: 'milk' }));
      expect(screen.getByText('+1 more', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
    });
  });

  describe('checkbox mode', () => {
    it('supports uncontrolled state', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" defaultExpandAll name="test-checkbox" />
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test-checkbox"]')).toHaveValue('apple');
    });

    it('cascades check to children when parent is clicked', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" defaultExpandAll name="test-checkbox" />
      );
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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

    it('exposes expand handler in renderNode payload to toggle expanded state', async () => {
      render(
        <TreeSelect
          {...defaultProps}
          dropdownOpened
          renderNode={({ node, hasChildren, expand }) => (
            <span>
              {hasChildren && (
                <button type="button" aria-label={`toggle-${node.value}`} onClick={expand} />
              )}
              {node.label}
            </span>
          )}
        />
      );

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);

      await userEvent.click(screen.getByLabelText('toggle-fruits'));
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();

      await userEvent.click(screen.getByLabelText('toggle-fruits'));
      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);
    });

    it('renderNode expand handler is a no-op without side effects for leaf nodes', async () => {
      const onExpandedChange = jest.fn();
      const onChange = jest.fn();
      render(
        <TreeSelect
          {...defaultProps}
          dropdownOpened
          onExpandedChange={onExpandedChange}
          onChange={onChange}
          renderNode={({ node, expand }) => (
            <button type="button" aria-label={`toggle-${node.value}`} onClick={expand}>
              {node.label}
            </button>
          )}
        />
      );

      await userEvent.click(screen.getByLabelText('toggle-milk'));
      expect(onExpandedChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('search', () => {
    it('filters options with searchable prop', async () => {
      render(<TreeSelect {...defaultProps} searchable defaultExpandAll />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'Apple');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
      expect(screen.queryByRole('option', { name: 'Milk' })).toBe(null);
    });

    it('displays nothing found message when no options match', async () => {
      render(<TreeSelect {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'xyz');
      expect(screen.getByText('Nothing found')).toBeVisible();
    });

    it('calls onSearchChange when search value changes', async () => {
      const spy = jest.fn();
      render(<TreeSelect {...defaultProps} searchable onSearchChange={spy} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'test');
      expect(spy).toHaveBeenCalledWith('test');
    });

    it('clears search on selection when clearSearchOnChange is true', async () => {
      render(<TreeSelect {...defaultProps} searchable />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'Mil');
      await userEvent.click(screen.getByRole('option', { name: 'Milk' }));
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('auto-expands parent branches in filtered results', async () => {
      render(<TreeSelect {...defaultProps} searchable />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'Apple');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });
  });

  describe('keyboard navigation', () => {
    it('expands node on ArrowRight key', async () => {
      render(<TreeSelect {...defaultProps} />);
      await userEvent.click(screen.getByRole('combobox'));

      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);

      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowRight}');

      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('collapses node on ArrowLeft key', async () => {
      render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
      await userEvent.click(screen.getByRole('combobox'));

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
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
      await userEvent.click(screen.getByLabelText('Clear value'));
      expect(screen.getByRole('combobox')).toHaveValue('');
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
    await userEvent.click(screen.getByRole('combobox'));
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
    expect(screen.getByRole('combobox')).toHaveValue('Alpha');
    await userEvent.click(screen.getByRole('button', { name: 'Update' }));
    expect(screen.getByRole('combobox')).toHaveValue('Updated');
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
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('shows controlled value label on mount', () => {
      render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('updates displayed label when controlled value changes', () => {
      const { rerender } = render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('combobox')).toHaveValue('Milk');

      rerender(<TreeSelect {...defaultProps} searchable value="fruits" />);
      expect(screen.getByRole('combobox')).toHaveValue('Fruits');
    });

    it('clears displayed label when controlled value becomes null', () => {
      const { rerender } = render(<TreeSelect {...defaultProps} searchable value="milk" />);
      expect(screen.getByRole('combobox')).toHaveValue('Milk');

      rerender(<TreeSelect {...defaultProps} searchable value={null} />);
      expect(screen.getByRole('combobox')).toHaveValue('');
    });
  });

  describe('expandOnClick expands parent nodes without selecting', () => {
    it('expands parent without selecting in single mode', async () => {
      render(<TreeSelect {...defaultProps} expandOnClick name="test" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('expands parent without selecting in multiple mode', async () => {
      render(<TreeSelect {...defaultProps} mode="multiple" expandOnClick name="test" />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('');
      expect(screen.getByRole('option', { name: 'Apple' })).toBeVisible();
    });

    it('selects leaf nodes normally in single mode with expandOnClick', async () => {
      render(<TreeSelect {...defaultProps} expandOnClick defaultExpandAll name="test" />);
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Banana' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
    });

    it('prevents exceeding maxValues when checking a parent that would cascade', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" maxValues={1} defaultExpandAll name="test" />
      );
      await userEvent.click(screen.getByRole('combobox'));
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
      await userEvent.click(screen.getByRole('combobox'));
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
      const input = screen.getByRole('combobox');
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
      const input = screen.getByRole('combobox');
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
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      await userEvent.type(input, 'App');
      await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
      expect(document.querySelector('input[name="test"]')).toHaveValue('apple');
      expect(input).toHaveValue('');
    });
  });

  describe('external input changes (autofill)', () => {
    const getHiddenInput = () => document.querySelector('input[name="test"]');

    it('does not display phantom text in single mode', async () => {
      render(
        <TreeSelect {...defaultProps} searchable name="test" defaultValue="apple" data={treeData} />
      );

      await externalInputFill(screen.getByRole('combobox'), 'Broccoli');
      expect(screen.getByRole('combobox')).toHaveValue('Apple');
      expect(getHiddenInput()).toHaveValue('apple');
    });

    it('does not display phantom text in multiple mode', async () => {
      render(
        <TreeSelect {...defaultProps} searchable mode="multiple" name="test" data={treeData} />
      );

      await externalInputFill(screen.getByRole('combobox'), 'Broccoli');
      expect(screen.getByRole('combobox')).toHaveValue('');
      expect(getHiddenInput()).toHaveValue('');
    });

    it('does not open the dropdown', async () => {
      render(<TreeSelect {...defaultProps} searchable name="test" data={treeData} />);
      await externalInputFill(screen.getByRole('combobox'), 'Broccoli');
      expect(screen.queryByRole('option')).toBe(null);
    });

    it('does not interfere with typing', async () => {
      render(<TreeSelect {...defaultProps} searchable name="test" data={treeData} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.type(screen.getByRole('combobox'), 'Broc');
      expect(screen.getByRole('combobox')).toHaveValue('Broc');
      expect(screen.getByRole('option', { name: 'Broccoli' })).toBeVisible();
      expect(screen.queryByRole('option', { name: 'Apple' })).toBe(null);
    });
  });

  describe('accessibility attributes', () => {
    it('sets role="combobox" and aria-expanded on the single mode input', async () => {
      render(<TreeSelect {...defaultProps} />);
      const input = screen.getByRole('combobox');
      expect(input).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(input);
      expect(input).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets role="combobox" and aria-expanded on the multiple mode input', async () => {
      render(<TreeSelect {...defaultProps} mode="multiple" />);
      const input = screen.getByRole('combobox');
      expect(input).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(input);
      expect(input).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets aria-checked="mixed" on partially checked parent', async () => {
      render(
        <TreeSelect {...defaultProps} mode="checkbox" defaultExpandAll defaultValue={['apple']} />
      );
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'Fruits' })).toHaveAttribute(
        'aria-checked',
        'mixed'
      );
      expect(screen.getByRole('option', { name: 'Apple' })).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByRole('option', { name: 'Vegetables' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
    });
  });

  it('moves highlight from a leaf to its parent on ArrowLeft', async () => {
    render(<TreeSelect {...defaultProps} defaultExpandedValues={['fruits']} />);
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    const apple = screen.getByRole('option', { name: 'Apple' });
    expect(apple).toHaveAttribute('data-combobox-selected');

    await userEvent.keyboard('{ArrowLeft}');
    const fruits = screen.getByRole('option', { name: 'Fruits' });
    expect(fruits).toHaveAttribute('data-combobox-selected');
    expect(input).toHaveAttribute('aria-activedescendant', fruits.id);
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
  });

  describe('disabled nodes in checkbox mode', () => {
    const disabledData: TreeNodeData[] = [
      {
        value: 'fruits',
        label: 'Fruits',
        children: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana', nodeProps: { disabled: true } },
        ],
      },
    ];

    it('does not check disabled leaves when parent is checked', async () => {
      const spy = jest.fn();
      render(<TreeSelect data={disabledData} mode="checkbox" defaultExpandAll onChange={spy} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(spy).toHaveBeenLastCalledWith(['apple']);
    });

    it('does not uncheck disabled leaves when parent is unchecked', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          data={disabledData}
          mode="checkbox"
          defaultExpandAll
          defaultValue={['apple', 'banana']}
          checkedStrategy="child"
          onChange={spy}
        />
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(spy).toHaveBeenLastCalledWith(['banana']);
    });

    it('unchecks enabled leaves when parent has unchecked disabled leaf', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          data={disabledData}
          mode="checkbox"
          defaultExpandAll
          defaultValue={['apple']}
          onChange={spy}
        />
      );
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(spy).toHaveBeenLastCalledWith([]);
    });

    it('expands parent with only disabled leaves on click when expandOnClick is set', async () => {
      const spy = jest.fn();
      const allDisabledData: TreeNodeData[] = [
        {
          value: 'fruits',
          label: 'Fruits',
          children: [
            { value: 'apple', label: 'Apple', nodeProps: { disabled: true } },
            { value: 'banana', label: 'Banana', nodeProps: { disabled: true } },
          ],
        },
      ];

      render(<TreeSelect data={allDisabledData} mode="checkbox" expandOnClick onChange={spy} />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.queryByRole('option', { name: 'Apple' })).not.toBeInTheDocument();
      await userEvent.click(screen.getByRole('option', { name: 'Fruits' }));
      expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
      expect(spy).not.toHaveBeenCalled();
    });

    it('does not remove disabled values with Backspace and hides their pill remove button', async () => {
      const spy = jest.fn();
      render(
        <TreeSelect
          data={disabledData}
          mode="multiple"
          defaultValue={['apple', 'banana']}
          searchable
          onChange={spy}
        />
      );
      expect(document.querySelectorAll('.mantine-Pill-remove')).toHaveLength(1);
      await userEvent.type(screen.getByRole('combobox'), '{Backspace}');
      expect(spy).toHaveBeenLastCalledWith(['banana']);
      await userEvent.type(screen.getByRole('combobox'), '{Backspace}');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('late data', () => {
    it('applies defaultExpandAll when data arrives after mount', async () => {
      const { rerender } = render(<TreeSelect data={[]} defaultExpandAll />);
      rerender(<TreeSelect data={treeData} defaultExpandAll />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Carrot' })).toBeInTheDocument();
    });

    it('applies defaultExpandedValues when data arrives after mount', async () => {
      const { rerender } = render(<TreeSelect data={[]} defaultExpandedValues={['fruits']} />);
      rerender(<TreeSelect data={treeData} defaultExpandedValues={['fruits']} />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
      expect(screen.queryByRole('option', { name: 'Carrot' })).not.toBeInTheDocument();
    });

    it('shows defaultValue label in searchable mode when data arrives after mount', () => {
      const { rerender } = render(<TreeSelect data={[]} searchable defaultValue="milk" />);
      rerender(<TreeSelect data={treeData} searchable defaultValue="milk" />);
      expect(screen.getByRole('combobox')).toHaveValue('Milk');
    });

    it('does not restore defaultValue label when value was cleared before data arrived', async () => {
      const clearProps = {
        searchable: true,
        clearable: true,
        defaultValue: 'milk',
        clearButtonProps: { 'aria-label': 'Clear value' },
      };
      const { rerender } = render(<TreeSelect data={[]} {...clearProps} />);
      await userEvent.click(screen.getByLabelText('Clear value'));
      rerender(<TreeSelect data={treeData} {...clearProps} />);
      expect(screen.getByRole('combobox')).toHaveValue('');
    });
  });
});
