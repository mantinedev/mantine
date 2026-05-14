import { useState } from 'react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { MultiSelect, MultiSelectProps, MultiSelectStylesNames } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/MultiSelect', () => {
  tests.axe([
    <MultiSelect aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} key="2" />,
    <MultiSelect label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <MultiSelect
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <MultiSelect
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} dropdownOpened key="6" />,
  ]);

  tests.itSupportsSystemProps<MultiSelectProps, MultiSelectStylesNames>({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@mantine/core/MultiSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MultiSelectProps>({
    component: MultiSelect,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<MultiSelectProps>({
    component: MultiSelect,
    props: defaultProps,
    componentName: 'MultiSelect',
  });

  it('supports uncontrolled state', async () => {
    render(<MultiSelect {...defaultProps} name="test-multi-select" />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');

    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1,test-2');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <MultiSelect {...defaultProps} value={['test-1']} onChange={spy} name="test-multi-select" />
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
    expect(spy).toHaveBeenLastCalledWith(['test-1', 'test-2']);
  });

  it('supports defaultValue', () => {
    render(<MultiSelect {...defaultProps} defaultValue={['test-1']} name="test-multi-select" />);
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<MultiSelect {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<MultiSelect {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('displays the nothing found message if no options matched the search query', async () => {
    render(<MultiSelect {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.type(screen.getByRole('combobox'), 'test-3');
    expect(screen.getByText('Nothing found')).toBeVisible();
  });

  it('displays the nothing found message if there is no data', async () => {
    render(<MultiSelect {...defaultProps} data={[]} nothingFoundMessage="No data" />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('No data')).toBeVisible();
  });

  it('retains labels of selected values when data changes', async () => {
    function Demo() {
      const [data, setData] = useState([
        { value: '1', label: 'React' },
        { value: '2', label: 'Angular' },
        { value: '3', label: 'Svelte' },
      ]);

      return (
        <div>
          <button
            type="button"
            onClick={() =>
              setData([
                { value: '4', label: 'Vue' },
                { value: '5', label: 'Ember' },
                { value: '6', label: 'Backbone' },
              ])
            }
          >
            Update data
          </button>
          <MultiSelect data={data} defaultValue={['1', '2']} searchable />
        </div>
      );
    }

    render(<Demo />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Angular').length).toBeGreaterThan(0);

    await userEvent.click(screen.getByRole('button', { name: 'Update data' }));

    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Angular').length).toBeGreaterThan(0);
  });

  it('calls onRemove when pill remove button is clicked', async () => {
    const spy = jest.fn();
    render(<MultiSelect {...defaultProps} defaultValue={['test-1']} onRemove={spy} />);
    await userEvent.click(document.querySelector('.mantine-Pill-remove')!);
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('calls onClear when clear button is clicked', async () => {
    const spy = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        defaultValue={['test-1']}
        clearable
        onClear={spy}
        clearButtonProps={{ 'aria-label': 'Clear value' }}
      />
    );
    await userEvent.click(screen.getByLabelText('Clear value'));
    expect(spy).toHaveBeenCalled();
  });

  it('removes last value when backspace is pressed with empty search', async () => {
    render(<MultiSelect {...defaultProps} defaultValue={['test-1', 'test-2']} searchable />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{Backspace}');
    expect(
      screen.queryByText('test-2', { selector: '.mantine-Pill-label' })
    ).not.toBeInTheDocument();
    expect(screen.getByText('test-1', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
  });

  it('toggles dropdown when space is pressed and searchable is false', async () => {
    render(<MultiSelect {...defaultProps} searchable={false} />);
    // Use focus instead of click to avoid triggering onClick handler
    screen.getByRole('combobox').focus();
    await userEvent.keyboard(' ');
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.keyboard(' ');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('maxValues prevents additional selections', async () => {
    const onMaxValues = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        maxValues={1}
        data={['test-1', 'test-2']}
        onMaxValues={onMaxValues}
        defaultValue={['test-1']}
      />
    );
    await userEvent.click(screen.getByRole('combobox'));

    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(
      screen.queryByText('test-2', { selector: '.mantine-Pill-label' })
    ).not.toBeInTheDocument();
    expect(onMaxValues).toHaveBeenCalled();
  });

  it('clears search on change when clearSearchOnChange is true', async () => {
    render(<MultiSelect {...defaultProps} searchable clearSearchOnChange data={['test-1']} />);
    await userEvent.type(screen.getByRole('combobox'), 'test');
    expect(screen.getByRole('combobox')).toHaveValue('test');
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('combobox')).toHaveValue('');
  });

  it('does not clear search on change when clearSearchOnChange is false', async () => {
    render(
      <MultiSelect {...defaultProps} searchable clearSearchOnChange={false} data={['test-1']} />
    );
    await userEvent.type(screen.getByRole('combobox'), 'test');
    expect(screen.getByRole('combobox')).toHaveValue('test');
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('combobox')).toHaveValue('test');
  });

  it('opens dropdown on focus when openOnFocus is true', async () => {
    render(<MultiSelect {...defaultProps} openOnFocus />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('does not open dropdown on focus when openOnFocus is false', async () => {
    render(<MultiSelect {...defaultProps} openOnFocus={false} />);
    screen.getByRole('combobox').focus();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('hides picked options when hidePickedOptions is true', async () => {
    render(
      <MultiSelect
        {...defaultProps}
        hidePickedOptions
        data={['test-1', 'test-2']}
        defaultValue={['test-1']}
      />
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('option', { name: 'test-1' })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'test-2' })).toBeVisible();
  });

  it('does not allow removing disabled option', async () => {
    const onRemove = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        data={[{ value: 'test-1', label: 'test-1', disabled: true }, 'test-2']}
        defaultValue={['test-1', 'test-2']}
        onRemove={onRemove}
      />
    );

    const pill1 = screen
      .getByText('test-1', { selector: '.mantine-Pill-label' })
      .closest('.mantine-Pill-root');
    expect(pill1?.querySelector('button')).toBeNull();
  });

  it('supports custom hidden input divider', () => {
    render(
      <MultiSelect
        {...defaultProps}
        defaultValue={['test-1', 'test-2']}
        hiddenInputValuesDivider="|"
        name="test"
      />
    );
    expect(document.querySelector('input[name="test"]')).toHaveValue('test-1|test-2');
  });

  describe('withPillsReorder', () => {
    const reorderProps: MultiSelectProps = {
      ...defaultProps,
      data: ['a', 'b', 'c'],
      defaultValue: ['a', 'b', 'c'],
      withPillsReorder: true,
    };

    const getPills = (root: ParentNode = document) =>
      Array.from(root.querySelectorAll<HTMLElement>('[data-mantine-pill-index]'));

    function Controlled({ onChangeSpy }: { onChangeSpy?: (value: string[]) => void }) {
      const [value, setValue] = useState(['a', 'b', 'c']);
      return (
        <MultiSelect
          {...defaultProps}
          data={['a', 'b', 'c']}
          withPillsReorder
          value={value}
          onChange={(next) => {
            setValue(next);
            onChangeSpy?.(next);
          }}
        />
      );
    }

    it('exposes the index attribute and keeps pills out of the tab order', () => {
      render(<MultiSelect {...reorderProps} />);
      const pills = getPills();
      expect(pills).toHaveLength(3);
      pills.forEach((pill, index) => {
        expect(pill).toHaveAttribute('tabindex', '-1');
        expect(pill).toHaveAttribute('data-mantine-pill-index', String(index));
        expect(pill).toHaveAttribute('draggable', 'true');
        expect(pill).toHaveAttribute('aria-keyshortcuts', 'Alt+ArrowLeft Alt+ArrowRight');
      });
    });

    it('focuses the last pill when ArrowLeft is pressed in the empty input', async () => {
      render(<Controlled />);
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowLeft}');
      const pills = getPills();
      expect(pills[pills.length - 1]).toHaveFocus();
    });

    it('navigates between pills with bare ArrowLeft / ArrowRight', async () => {
      render(<Controlled />);
      const pills = getPills();
      pills[2].focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(pills[1]).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(pills[0]).toHaveFocus();
      await userEvent.keyboard('{ArrowRight}');
      expect(pills[1]).toHaveFocus();
    });

    it('does not move focus past the first pill on ArrowLeft', async () => {
      render(<Controlled />);
      const pills = getPills();
      pills[0].focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(pills[0]).toHaveFocus();
    });

    it('returns focus to the input on ArrowRight from the last pill', async () => {
      render(<Controlled />);
      const pills = getPills();
      pills[pills.length - 1].focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('returns focus to the search input even when renderPill contains another input', async () => {
      function CustomRenderPill() {
        const [value, setValue] = useState(['a', 'b', 'c']);
        return (
          <MultiSelect
            {...defaultProps}
            data={['a', 'b', 'c']}
            withPillsReorder
            value={value}
            onChange={setValue}
            renderPill={({ value: pillValue, reorderProps }) => (
              <span {...reorderProps} data-testid={`custom-${pillValue}`}>
                <input aria-label={`pill-${pillValue}`} />
              </span>
            )}
          />
        );
      }
      render(<CustomRenderPill />);
      const pills = getPills();
      pills[pills.length - 1].focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('flips bare arrow navigation in RTL layouts', async () => {
      const original = window.getComputedStyle.bind(window);
      const computedSpy = jest
        .spyOn(window, 'getComputedStyle')
        .mockImplementation((el, pseudo) => {
          const style = original(el as Element, pseudo ?? null);
          Object.defineProperty(style, 'direction', { value: 'rtl', configurable: true });
          return style;
        });
      try {
        render(<Controlled />);
        const pills = getPills();
        pills[2].focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(pills[1]).toHaveFocus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(pills[2]).toHaveFocus();
      } finally {
        computedSpy.mockRestore();
      }
    });

    it('does not steal ArrowLeft when the caret is not at the start', async () => {
      function WithSearch() {
        const [value, setValue] = useState(['a', 'b', 'c']);
        return (
          <MultiSelect
            {...defaultProps}
            data={['a', 'b', 'c', 'd']}
            withPillsReorder
            searchable
            value={value}
            onChange={setValue}
          />
        );
      }
      render(<WithSearch />);
      const input = screen.getByRole('combobox') as HTMLInputElement;
      await userEvent.type(input, 'ab');
      input.setSelectionRange(2, 2);
      await userEvent.keyboard('{ArrowLeft}');
      expect(input).toHaveFocus();
      expect(input.selectionStart).toBe(1);
    });

    it('does not enable reorder when disabled or readOnly', () => {
      const { rerender } = render(<MultiSelect {...reorderProps} disabled />);
      expect(getPills()).toHaveLength(0);

      rerender(<MultiSelect {...reorderProps} disabled={false} readOnly />);
      expect(getPills()).toHaveLength(0);
    });

    it('moves the focused pill forward with Alt+ArrowRight and focus follows', async () => {
      const spy = jest.fn();
      render(<Controlled onChangeSpy={spy} />);
      getPills()[0].focus();
      await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
      expect(spy).toHaveBeenLastCalledWith(['b', 'a', 'c']);
      expect(getPills()[1]).toHaveFocus();
    });

    it('moves the focused pill backward with Alt+ArrowLeft and focus follows', async () => {
      const spy = jest.fn();
      render(<Controlled onChangeSpy={spy} />);
      getPills()[2].focus();
      await userEvent.keyboard('{Alt>}{ArrowLeft}{/Alt}');
      expect(spy).toHaveBeenLastCalledWith(['a', 'c', 'b']);
      expect(getPills()[1]).toHaveFocus();
    });

    it('chains multiple moves keeping focus on the same item', async () => {
      const spy = jest.fn();
      render(<Controlled onChangeSpy={spy} />);
      getPills()[0].focus();
      await userEvent.keyboard('{Alt>}{ArrowRight}{ArrowRight}{/Alt}');
      expect(spy).toHaveBeenLastCalledWith(['b', 'c', 'a']);
      expect(getPills()[2]).toHaveFocus();
    });

    it('does not move past the boundary', async () => {
      const spy = jest.fn();
      render(<Controlled onChangeSpy={spy} />);
      getPills()[0].focus();
      await userEvent.keyboard('{Alt>}{ArrowLeft}{/Alt}');
      getPills()[2].focus();
      await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
      expect(spy).not.toHaveBeenCalled();
    });

    it('ignores arrow keys without the Alt modifier', async () => {
      const spy = jest.fn();
      render(<Controlled onChangeSpy={spy} />);
      getPills()[0].focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(spy).not.toHaveBeenCalled();
    });

    it('does not restore focus when a controlled parent rejects the change', async () => {
      const spy = jest.fn();
      render(
        <MultiSelect
          {...defaultProps}
          data={['a', 'b', 'c']}
          value={['a', 'b', 'c']}
          onChange={spy}
          withPillsReorder
        />
      );
      const startingPill = getPills()[0];
      startingPill.focus();
      await userEvent.keyboard('{Alt>}{ArrowRight}{/Alt}');
      expect(spy).toHaveBeenLastCalledWith(['b', 'a', 'c']);
      expect(startingPill).toHaveFocus();
    });

    it('flips horizontal direction in RTL layouts', async () => {
      const original = window.getComputedStyle.bind(window);
      const computedSpy = jest
        .spyOn(window, 'getComputedStyle')
        .mockImplementation((el, pseudo) => {
          const style = original(el as Element, pseudo ?? null);
          Object.defineProperty(style, 'direction', { value: 'rtl', configurable: true });
          return style;
        });

      try {
        const spy = jest.fn();
        render(<Controlled onChangeSpy={spy} />);
        getPills()[0].focus();
        await userEvent.keyboard('{Alt>}{ArrowLeft}{/Alt}');
        expect(spy).toHaveBeenLastCalledWith(['b', 'a', 'c']);
        expect(getPills()[1]).toHaveFocus();
      } finally {
        computedSpy.mockRestore();
      }
    });
  });
});
