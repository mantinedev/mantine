import { useState } from 'react';
import { fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
  externalInputFill,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { DirectionProvider } from '../../core';
import { Cascader, CascaderOption, CascaderProps, CascaderStylesNames } from './Cascader';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
        ],
      },
      {
        value: 'kr',
        label: 'South Korea',
        children: [{ value: 'seoul', label: 'Seoul' }],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'fr',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
      {
        value: 'de',
        label: 'Germany',
        disabled: true,
        children: [{ value: 'berlin', label: 'Berlin' }],
      },
    ],
  },
];

const defaultProps: CascaderProps = {
  ...inputDefaultProps,
  data,
};

function mockRect(
  element: Element,
  rect: { left: number; top: number; right: number; bottom: number }
) {
  element.getBoundingClientRect = () =>
    ({
      ...rect,
      x: rect.left,
      y: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top,
      toJSON: () => ({}),
    }) as DOMRect;
}

function getColumns() {
  return Array.from(document.querySelectorAll<HTMLElement>('.mantine-Cascader-column'));
}

function getColumnsList() {
  return document.querySelector<HTMLElement>('.mantine-Cascader-columnsList')!;
}

function leaveOption(name: string, coords?: { clientX: number; clientY: number }) {
  fireEvent.mouseOut(screen.getByRole('option', { name }), {
    ...coords,
    relatedTarget: getColumnsList(),
  });
}

function armSafeArea() {
  const asia = screen.getByRole('option', { name: 'Asia' });
  mockRect(asia, { left: 0, top: 0, right: 200, bottom: 30 });
  mockRect(getColumns()[1], { left: 200, top: 0, right: 400, bottom: 300 });
  leaveOption('Asia', { clientX: 195, clientY: 15 });
}

describe('@mantine/core/Cascader', () => {
  tests.axe([
    <Cascader aria-label="test-label" data={data} key="1" />,
    <Cascader label="test-label" data={data} key="2" />,
    <Cascader label="test-label" error data={data} key="3" />,
    <Cascader label="test-label" error="test-error" id="test" data={data} key="4" />,
    <Cascader label="test-label" description="test-description" data={data} key="5" />,
  ]);

  tests.itSupportsSystemProps<CascaderProps, CascaderStylesNames>({
    component: Cascader,
    props: defaultProps,
    displayName: '@mantine/core/Cascader',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<CascaderProps>({
    component: Cascader,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<CascaderProps>({
    component: Cascader,
    props: defaultProps,
    componentName: 'Cascader',
  });

  it('opens/closes dropdown on input click', async () => {
    render(<Cascader {...defaultProps} />);
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
  });

  it('sets aria-expanded and aria-controls on the target when columns are displayed', async () => {
    render(<Cascader {...defaultProps} />);
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    expect(input).toHaveAttribute('aria-expanded', 'true');
    const popup = document.getElementById(input.getAttribute('aria-controls')!);
    expect(popup).toHaveAttribute('role', 'listbox');
    expect(getColumns()[0]).toContainElement(popup);
    await userEvent.click(input);
    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(input).not.toHaveAttribute('aria-controls');
  });

  it('points aria-controls at the displayed popup when search starts and is cleared', async () => {
    render(<Cascader {...defaultProps} searchable />);
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    const firstColumn = document.getElementById(input.getAttribute('aria-controls')!);
    expect(firstColumn).toHaveAttribute('role', 'listbox');
    expect(getColumns()[0]).toContainElement(firstColumn);
    await userEvent.type(input, 'par');
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById(input.getAttribute('aria-controls')!)).toBe(
      screen.getByRole('listbox')
    );
    await userEvent.clear(input);
    expect(input).toHaveAttribute('aria-expanded', 'true');
    const clearedPopup = document.getElementById(input.getAttribute('aria-controls')!);
    expect(clearedPopup).toHaveAttribute('role', 'listbox');
    expect(getColumns()[0]).toContainElement(clearedPopup);
  });

  it('controls dropdown state with dropdownOpened prop', () => {
    const { rerender } = render(<Cascader {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
    rerender(<Cascader {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
  });

  it('reveals the next column when a parent option is clicked', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'South Korea' })).toBeVisible();
  });

  it('commits the path and calls onChange when a leaf is selected', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} dropdownOpened onChange={spy} />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    await userEvent.click(screen.getByRole('option', { name: 'Japan' }));
    await userEvent.click(screen.getByRole('option', { name: 'Tokyo' }));
    expect(spy).toHaveBeenCalledTimes(1);
    const [pathArg, optionsArg] = spy.mock.calls[0];
    expect(pathArg).toStrictEqual(['asia', 'jp', 'tokyo']);
    expect(optionsArg.map((option: CascaderOption) => option.value)).toStrictEqual([
      'asia',
      'jp',
      'tokyo',
    ]);
  });

  it('does not call onChange for a parent option unless changeOnSelect is set', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} dropdownOpened onChange={spy} />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('commits intermediate paths when changeOnSelect is set', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} changeOnSelect dropdownOpened onChange={spy} />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(spy).toHaveBeenCalledWith(['asia'], expect.any(Array));
  });

  it('displays the selected path in the input using the separator', () => {
    render(<Cascader {...defaultProps} defaultValue={['asia', 'jp', 'tokyo']} />);
    expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Tokyo');
  });

  it('supports custom formatValue', () => {
    render(
      <Cascader
        {...defaultProps}
        defaultValue={['asia', 'jp', 'tokyo']}
        formatValue={({ options }) => options.map((option) => option.label).join(' > ')}
      />
    );
    expect(screen.getByRole('combobox')).toHaveValue('Asia > Japan > Tokyo');
  });

  it('does not expand or select disabled options', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} dropdownOpened onChange={spy} />);
    await userEvent.click(screen.getByRole('option', { name: 'Europe' }));
    await userEvent.click(screen.getByRole('option', { name: 'Germany' }));
    expect(screen.queryByRole('option', { name: 'Berlin' })).toBe(null);
    expect(spy).not.toHaveBeenCalled();
  });

  it('clears the value with the clear button', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        clearable
        defaultValue={['asia', 'jp', 'tokyo']}
        onChange={spy}
        clearButtonProps={{ 'aria-label': 'Clear value' }}
      />
    );
    expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Tokyo');
    await userEvent.click(screen.getByLabelText('Clear value'));
    expect(spy).toHaveBeenCalledWith(null, []);
    expect(screen.getByRole('combobox')).toHaveValue('');
  });

  it('flattens paths into a searchable list and commits the picked path', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} searchable onChange={spy} />);
    await userEvent.type(screen.getByRole('combobox'), 'Paris');
    const option = await screen.findByRole('option', { name: /Paris/ });
    await userEvent.click(option);
    expect(spy).toHaveBeenCalledWith(['europe', 'fr', 'paris'], expect.any(Array));
  });

  it('shows nothingFoundMessage when no search result matches', async () => {
    render(<Cascader {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.type(screen.getByRole('combobox'), 'zzzzz');
    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });

  it('collapses an expanded column with ArrowLeft', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
  });

  it('limits the number of displayed columns with maxDisplayedLevels', async () => {
    render(
      <Cascader
        {...defaultProps}
        maxDisplayedLevels={2}
        defaultValue={['asia', 'jp', 'tokyo']}
        dropdownOpened
      />
    );
    // Columns are [root, Asia children, Japan children] – with 2 levels the root column is hidden
    expect(screen.queryByRole('option', { name: 'Europe' })).toBe(null);
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Tokyo' })).toBeVisible();

    // The overflow control reveals the hidden previous level on click
    const showPrevious = screen.getByLabelText('Show previous levels');
    expect(showPrevious).toBeInTheDocument();
    await userEvent.click(showPrevious);
    expect(screen.getByRole('option', { name: 'Europe' })).toBeVisible();
    expect(screen.getByLabelText('Show next levels')).toBeInTheDocument();
  });

  it('supports custom overflow control labels', () => {
    render(
      <Cascader
        {...defaultProps}
        maxDisplayedLevels={2}
        defaultValue={['asia', 'jp', 'tokyo']}
        dropdownOpened
        previousLevelsControlLabel="Niveaux précédents"
      />
    );
    expect(screen.getByLabelText('Niveaux précédents')).toBeInTheDocument();
  });

  it('does not open the dropdown when readOnly is set', async () => {
    const onDropdownOpen = jest.fn();
    render(<Cascader {...defaultProps} searchable readOnly onDropdownOpen={onDropdownOpen} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
    expect(onDropdownOpen).not.toHaveBeenCalled();
  });

  it('opens the dropdown and highlights the first option on ArrowDown', async () => {
    render(<Cascader {...defaultProps} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}');
    const asia = screen.getByRole('option', { name: 'Asia' });
    expect(asia).toBeVisible();
    expect(asia).toHaveAttribute('data-current', 'true');
  });

  it('keeps the parent highlighted when collapsing back to the first column', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);
    const input = screen.getByRole('combobox');
    input.focus();

    // Down highlights Asia, Right enters its children (Japan highlighted)
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    expect(screen.getByRole('option', { name: 'Japan' })).toHaveAttribute('data-current', 'true');

    // Left collapses back to a single column with Asia still highlighted
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
    expect(screen.getByRole('option', { name: 'Asia' })).toHaveAttribute('data-current', 'true');
  });

  it('keeps the dropdown open on select when closeOnSelect is false', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} closeOnSelect={false} dropdownOpened onChange={spy} />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    await userEvent.click(screen.getByRole('option', { name: 'Japan' }));
    await userEvent.click(screen.getByRole('option', { name: 'Tokyo' }));
    expect(spy).toHaveBeenCalledWith(['asia', 'jp', 'tokyo'], expect.any(Array));
    // Dropdown stays open
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
  });

  it('renders a flat list of paths when withColumns is false', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} withColumns={false} dropdownOpened onChange={spy} />);
    const option = screen.getByRole('option', { name: /Tokyo/ });
    expect(option).toBeVisible();
    await userEvent.click(option);
    expect(spy).toHaveBeenCalledWith(['asia', 'jp', 'tokyo'], expect.any(Array));
  });

  it.each([{ closeOnSelect: true }, { allowDeselect: false }])(
    'keeps the dropdown open on a changeOnSelect parent selection with %o',
    async (props) => {
      const spy = jest.fn();
      render(<Cascader {...defaultProps} {...props} changeOnSelect onChange={spy} />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
      expect(spy).toHaveBeenLastCalledWith(['asia'], expect.any(Array));
      await userEvent.click(screen.getByRole('option', { name: 'Japan' }));
      expect(spy).toHaveBeenLastCalledWith(['asia', 'jp'], expect.any(Array));
      await userEvent.click(screen.getByRole('option', { name: 'Tokyo' }));
      expect(spy).toHaveBeenLastCalledWith(['asia', 'jp', 'tokyo'], expect.any(Array));
      expect(spy).toHaveBeenCalledTimes(3);
      expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
    }
  );

  it('does not call onChange again for an unchanged path when allowDeselect is false', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        changeOnSelect
        allowDeselect={false}
        defaultValue={['asia']}
        dropdownOpened
        onChange={spy}
      />
    );
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    await userEvent.click(screen.getByRole('option', { name: 'Japan' }));
    await userEvent.click(screen.getByRole('option', { name: 'Tokyo' }));
    await userEvent.click(screen.getByRole('option', { name: 'Tokyo' }));
    expect(spy.mock.calls.map((call) => call[0])).toEqual([
      ['asia', 'jp'],
      ['asia', 'jp', 'tokyo'],
    ]);
  });

  it('prevents Enter while the dropdown is open and no option is current', async () => {
    render(<Cascader {...defaultProps} />);
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
    expect(fireEvent.keyDown(input, { key: 'Enter' })).toBe(false);
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
  });

  describe('closeOnSelect', () => {
    it('closes on a leaf picked with the mouse, with Enter and in the flat list', async () => {
      const { unmount } = render(<Cascader {...defaultProps} closeOnSelect />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      await userEvent.click(screen.getByRole('option', { name: 'Europe' }));
      await userEvent.click(screen.getByRole('option', { name: 'France' }));
      await userEvent.click(screen.getByRole('option', { name: 'Paris' }));
      expect(screen.queryByRole('option', { name: 'Europe' })).toBe(null);
      expect(input).toHaveValue('Europe / France / Paris');

      input.focus();
      await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
      expect(screen.queryByRole('option', { name: 'Lyon' })).toBe(null);
      expect(input).toHaveValue('Europe / France / Lyon');
      unmount();

      render(<Cascader {...defaultProps} withColumns={false} closeOnSelect />);
      await userEvent.click(screen.getByRole('combobox'));
      await userEvent.click(screen.getByRole('option', { name: /Osaka/ }));
      expect(screen.queryByRole('option', { name: /Osaka/ })).toBe(null);
      expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Osaka');
    });

    it('stays open while a parent is expanded without changeOnSelect', async () => {
      const spy = jest.fn();
      render(<Cascader {...defaultProps} closeOnSelect onChange={spy} />);
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowDown}{Enter}');
      expect(screen.getByRole('option', { name: 'Japan' })).toHaveAttribute('data-current');
      await userEvent.click(screen.getByRole('option', { name: 'Japan' }));
      expect(screen.getByRole('option', { name: 'Tokyo' })).toBeVisible();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('deselects the current value with the keyboard when allowDeselect is set', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        defaultValue={['asia', 'jp', 'tokyo']}
        dropdownOpened
        onChange={spy}
      />
    );
    screen.getByRole('combobox').focus();
    // The selected leaf is focused on open – pressing Enter toggles it off
    await userEvent.keyboard('{Enter}');
    expect(spy).toHaveBeenCalledWith(null, []);
  });

  it('deselects the current value in flat list mode', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        withColumns={false}
        defaultValue={['asia', 'jp', 'tokyo']}
        dropdownOpened
        onChange={spy}
      />
    );
    await userEvent.click(screen.getByRole('option', { name: /Tokyo/ }));
    expect(spy).toHaveBeenCalledWith(null, []);
  });

  it('keeps the expanded column while the cursor travels toward it inside the safe area', () => {
    render(
      <Cascader
        {...defaultProps}
        dropdownOpened
        expandTrigger="hover"
        safeAreaPolygon={{ requireIntent: false }}
      />
    );

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
      clientX: 100,
      clientY: 15,
    });
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();

    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }), {
      clientX: 100,
      clientY: 45,
    });
    // Computed from armSafeArea's mocked rects (Asia: 0,0-200,30; next column: 200,0-400,300)
    // and floating-ui's default buffer (0.5): at y=100 the safe-area polygon spans
    // x≈196.29-200.5, so (198, 100) sits ~1.7px inside its left boundary. A future edit to
    // the mocked rects or to floating-ui's default buffer can silently flip this assertion.
    fireEvent.mouseMove(document, { clientX: 198, clientY: 100 });

    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'France' })).toBe(null);
  });

  it('keeps the expanded column with the default safeAreaPolygon config', () => {
    // With the default `requireIntent: true`, a matched mousemove schedules a 40ms
    // setTimeout inside floating-ui's safePolygon. Fake timers keep it from firing for
    // real and flushing a state update outside `act()` after this test finishes.
    jest.useFakeTimers();

    try {
      render(<Cascader {...defaultProps} dropdownOpened expandTrigger="hover" />);

      fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
        clientX: 100,
        clientY: 15,
      });
      expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();

      armSafeArea();
      fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }), {
        clientX: 100,
        clientY: 45,
      });
      fireEvent.mouseMove(document, { clientX: 198, clientY: 100 });

      expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
      expect(screen.queryByRole('option', { name: 'France' })).toBe(null);
    } finally {
      jest.useRealTimers();
    }
  });

  it('applies the suppressed option once the cursor leaves the safe area', () => {
    render(
      <Cascader
        {...defaultProps}
        dropdownOpened
        expandTrigger="hover"
        safeAreaPolygon={{ requireIntent: false }}
      />
    );

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
      clientX: 100,
      clientY: 15,
    });
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }), {
      clientX: 100,
      clientY: 45,
    });
    fireEvent.mouseMove(document, { clientX: 20, clientY: 250 });

    expect(screen.getByRole('option', { name: 'France' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
  });

  it('does not apply a suppressed option the cursor has already left', () => {
    render(
      <Cascader
        {...defaultProps}
        dropdownOpened
        expandTrigger="hover"
        safeAreaPolygon={{ requireIntent: false }}
      />
    );

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
      clientX: 100,
      clientY: 15,
    });
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }), {
      clientX: 100,
      clientY: 45,
    });
    leaveOption('Europe');
    fireEvent.mouseMove(document, { clientX: 20, clientY: 250 });

    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'France' })).toBe(null);
  });

  it('expands immediately when safeAreaPolygon is false', () => {
    render(
      <Cascader {...defaultProps} dropdownOpened expandTrigger="hover" safeAreaPolygon={false} />
    );

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
      clientX: 100,
      clientY: 15,
    });
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }), {
      clientX: 100,
      clientY: 45,
    });

    expect(screen.getByRole('option', { name: 'France' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
  });

  it('does not arm the safe area when expandTrigger is click', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);

    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();

    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    try {
      armSafeArea();
      expect(addEventListenerSpy).not.toHaveBeenCalledWith('mousemove', expect.anything());
    } finally {
      addEventListenerSpy.mockRestore();
    }
  });

  describe('external input changes (autofill)', () => {
    it('does not display phantom text', async () => {
      render(<Cascader {...defaultProps} searchable defaultValue={['asia', 'jp', 'tokyo']} />);
      await externalInputFill(screen.getByRole('combobox'), 'Paris');
      expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Tokyo');
    });

    it('does not open the dropdown', async () => {
      render(<Cascader {...defaultProps} searchable />);
      await externalInputFill(screen.getByRole('combobox'), 'Paris');
      expect(screen.queryByRole('option')).toBe(null);
    });

    it('does not interfere with typing', async () => {
      render(<Cascader {...defaultProps} searchable />);
      await userEvent.type(screen.getByRole('combobox'), 'Paris');
      expect(screen.getByRole('combobox')).toHaveValue('Paris');
      expect(screen.getByRole('option', { name: 'Europe / France / Paris' })).toBeVisible();
    });
  });
  describe('column mode accessibility', () => {
    it('points aria-activedescendant at the keyboard-current option', async () => {
      render(<Cascader {...defaultProps} label="Location" />);
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowDown}');
      const asia = screen.getByRole('option', { name: 'Asia' });
      expect(input).toHaveAttribute('aria-activedescendant', asia.id);
      expect(asia).toHaveAttribute('data-current', 'true');
      await userEvent.keyboard('{ArrowRight}');
      expect(input).toHaveAttribute(
        'aria-activedescendant',
        screen.getByRole('option', { name: 'Japan' }).id
      );
    });

    it('does not set aria-activedescendant during pointer navigation', async () => {
      render(<Cascader {...defaultProps} />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      expect(input).not.toHaveAttribute('aria-activedescendant');
    });

    it('marks the committed value with aria-selected', async () => {
      render(<Cascader {...defaultProps} defaultValue={['asia', 'jp', 'tokyo']} dropdownOpened />);
      expect(screen.getByRole('option', { name: 'Tokyo' })).toHaveAttribute(
        'aria-selected',
        'true'
      );
      expect(screen.getByRole('option', { name: 'Osaka' })).not.toHaveAttribute(
        'aria-selected',
        'true'
      );
      expect(screen.getByRole('option', { name: 'Asia' })).not.toHaveAttribute(
        'aria-selected',
        'true'
      );
    });

    it('labels every column and lists all visible columns in aria-controls', () => {
      render(
        <Cascader
          {...defaultProps}
          label="Location"
          defaultValue={['asia', 'jp', 'tokyo']}
          dropdownOpened
        />
      );
      const listboxes = screen.getAllByRole('listbox');
      expect(listboxes).toHaveLength(3);
      expect(listboxes[0]).toHaveAccessibleName('Location');
      expect(listboxes[1]).toHaveAccessibleName('Asia');
      expect(listboxes[2]).toHaveAccessibleName('Japan');
      const ids = listboxes.map((listbox) => listbox.id);
      expect(new Set(ids).size).toBe(3);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-controls', ids.join(' '));
    });

    it('builds valid option ids for values with spaces', async () => {
      const spacedData: CascaderOption[] = [
        { value: 'north america', children: [{ value: 'new york' }, { value: 'los "angeles"' }] },
        { value: 'south america', children: [{ value: 'lima' }] },
      ];
      render(<Cascader data={spacedData} label="Location" />);
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowDown}{ArrowRight}{ArrowDown}');
      const activeId = input.getAttribute('aria-activedescendant')!;
      expect(activeId).not.toMatch(/[\s"]/);
      expect(document.getElementById(activeId)).toHaveTextContent('los "angeles"');
      const ids = screen.getAllByRole('option').map((option) => option.id);
      expect(ids.every((optionId) => !/[\s"]/.test(optionId))).toBe(true);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('gives options with the same position under different parents different ids', async () => {
      render(<Cascader {...defaultProps} />);
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowDown}{ArrowRight}');
      const japanId = input.getAttribute('aria-activedescendant');
      await userEvent.keyboard('{ArrowLeft}{ArrowDown}{ArrowRight}');
      expect(screen.getByRole('option', { name: 'France' })).toHaveAttribute('data-current');
      expect(input.getAttribute('aria-activedescendant')).not.toBe(japanId);
    });

    it('has no axe violations with open columns', async () => {
      const { container } = render(
        <Cascader
          {...defaultProps}
          label="Location"
          defaultValue={['asia', 'jp', 'tokyo']}
          dropdownOpened
        />
      );
      expect.extend(toHaveNoViolations);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('column mode keyboard', () => {
    function getCurrent() {
      return document.querySelector('[data-current]')?.textContent;
    }

    it('swaps ArrowLeft and ArrowRight in RTL', async () => {
      render(
        <DirectionProvider initialDirection="rtl">
          <Cascader {...defaultProps} />
        </DirectionProvider>
      );
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowDown}{ArrowRight}');
      expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
      await userEvent.keyboard('{ArrowLeft}');
      expect(getCurrent()).toBe('Japan');
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
      expect(getCurrent()).toBe('Asia');
    });

    it('opens the dropdown with the forward arrow key in RTL', async () => {
      render(
        <DirectionProvider initialDirection="rtl">
          <Cascader {...defaultProps} />
        </DirectionProvider>
      );
      const input = screen.getByRole('combobox');
      input.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
    });

    it('moves to the first and last enabled options with Home and End', async () => {
      render(<Cascader {...defaultProps} />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowRight}');
      expect(getCurrent()).toBe('France');
      await userEvent.keyboard('{End}');
      expect(getCurrent()).toBe('France');
      await userEvent.keyboard('{ArrowUp}{Home}');
      expect(getCurrent()).toBe('France');
      await userEvent.keyboard('{ArrowLeft}{Home}');
      expect(getCurrent()).toBe('Asia');
      await userEvent.keyboard('{End}');
      expect(getCurrent()).toBe('Europe');
    });

    it('supports typeahead in the current column', async () => {
      render(<Cascader {...defaultProps} />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('e');
      expect(getCurrent()).toBe('Europe');
      await userEvent.keyboard('{ArrowLeft}{ArrowRight}');
      expect(getCurrent()).toBe('France');
    });

    it('selects the current option with Space', async () => {
      const spy = jest.fn();
      render(<Cascader {...defaultProps} defaultValue={['asia', 'jp', 'tokyo']} onChange={spy} />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{Enter}{ArrowDown}');
      expect(getCurrent()).toBe('Osaka');
      await userEvent.keyboard(' ');
      expect(spy).toHaveBeenCalledWith(['asia', 'jp', 'osaka'], expect.any(Array));
    });

    it('types a space in searchable mode', async () => {
      render(<Cascader {...defaultProps} searchable />);
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'south korea');
      expect(input).toHaveValue('south korea');
    });

    it('scrolls the current option into view on keyboard moves', async () => {
      const scrollIntoView = jest.fn();
      const original = HTMLElement.prototype.scrollIntoView;
      HTMLElement.prototype.scrollIntoView = scrollIntoView;
      render(<Cascader {...defaultProps} />);
      screen.getByRole('combobox').focus();
      await userEvent.keyboard('{ArrowDown}{ArrowDown}');
      const europe = screen.getByRole('option', { name: 'Europe' });
      expect(scrollIntoView.mock.contexts.at(-1)).toBe(europe);
      expect(scrollIntoView).toHaveBeenLastCalledWith({ block: 'nearest' });
      HTMLElement.prototype.scrollIntoView = original;
    });
  });

  it('ignores hover caused by a layout shift under a resting pointer', () => {
    render(
      <Cascader {...defaultProps} expandTrigger="hover" safeAreaPolygon={false} dropdownOpened />
    );
    fireEvent.mouseMove(document, { clientX: 180, clientY: 15 });
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }), {
      clientX: 180,
      clientY: 15,
    });
    expect(screen.getByRole('option', { name: 'Japan' })).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Japan' }), {
      clientX: 180,
      clientY: 15,
    });
    expect(screen.queryByRole('option', { name: 'Tokyo' })).toBe(null);

    fireEvent.mouseMove(document, { clientX: 181, clientY: 15 });
    expect(screen.getByRole('option', { name: 'Tokyo' })).toBeInTheDocument();
  });

  it('expands every hovered option when hover events have no coordinates', async () => {
    const { unmount } = render(
      <Cascader {...defaultProps} expandTrigger="hover" safeAreaPolygon={false} dropdownOpened />
    );
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));
    expect(screen.getByRole('option', { name: 'France' })).toBeInTheDocument();
    unmount();

    render(
      <Cascader {...defaultProps} expandTrigger="hover" safeAreaPolygon={false} dropdownOpened />
    );
    await userEvent.hover(screen.getByRole('option', { name: 'Asia' }));
    await userEvent.hover(screen.getByRole('option', { name: 'Europe' }));
    expect(screen.getByRole('option', { name: 'France' })).toBeInTheDocument();
  });

  it.each(['click', 'hover'] as const)(
    'keeps keyboard navigation when a column opens under a resting pointer (%s)',
    async (expandTrigger) => {
      render(<Cascader {...defaultProps} expandTrigger={expandTrigger} safeAreaPolygon={false} />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      fireEvent.mouseMove(document, { clientX: 300, clientY: 50 });
      await userEvent.keyboard('{ArrowDown}{ArrowRight}');
      fireEvent.mouseOver(screen.getByRole('option', { name: 'South Korea' }), {
        clientX: 300,
        clientY: 50,
      });
      const japan = screen.getByRole('option', { name: 'Japan' });
      expect(japan).toHaveAttribute('data-current');
      expect(input).toHaveAttribute('aria-activedescendant', japan.id);
      expect(screen.queryByRole('option', { name: 'Seoul' })).toBe(null);

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('option', { name: 'South Korea' })).toHaveAttribute('data-current');
    }
  );

  it.each(['click', 'hover'] as const)(
    'ignores a mousemove that does not change the pointer position (%s)',
    async (expandTrigger) => {
      render(<Cascader {...defaultProps} expandTrigger={expandTrigger} safeAreaPolygon={false} />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      fireEvent.mouseMove(document, { clientX: 300, clientY: 50 });
      await userEvent.keyboard('{ArrowDown}{ArrowRight}');
      const southKorea = screen.getByRole('option', { name: 'South Korea' });
      fireEvent.mouseOver(southKorea, { clientX: 300, clientY: 50 });
      fireEvent.mouseMove(southKorea, { clientX: 300, clientY: 50 });

      const japan = screen.getByRole('option', { name: 'Japan' });
      expect(japan).toHaveAttribute('data-current');
      expect(input).toHaveAttribute('aria-activedescendant', japan.id);
      expect(screen.queryByRole('option', { name: 'Seoul' })).toBe(null);

      fireEvent.mouseMove(southKorea, { clientX: 301, clientY: 50 });
      expect(japan).not.toHaveAttribute('data-current');
      expect(input).not.toHaveAttribute('aria-activedescendant');
    }
  );

  it('keeps the keyboard path when the columns shrink away from a resting pointer', async () => {
    render(<Cascader {...defaultProps} expandTrigger="hover" safeAreaPolygon={false} />);
    await userEvent.click(screen.getByRole('combobox'));
    fireEvent.mouseMove(document, { clientX: 300, clientY: 50 });
    await userEvent.keyboard('{ArrowDown}{ArrowRight}{ArrowLeft}');
    const asia = screen.getByRole('option', { name: 'Asia' });
    fireEvent.mouseLeave(asia.closest('.mantine-Cascader-columnsList')!, {
      clientX: 300,
      clientY: 50,
    });
    expect(asia).toHaveAttribute('data-current');
  });

  it('does not show the dropdown when there are no options', async () => {
    const { rerender } = render(<Cascader {...defaultProps} data={[]} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(document.querySelector('.mantine-Cascader-dropdown')).toHaveAttribute('data-hidden');

    rerender(<Cascader {...defaultProps} data={[]} nothingFoundMessage="No locations" />);
    expect(document.querySelector('.mantine-Cascader-dropdown')).not.toHaveAttribute('data-hidden');
    expect(screen.getByText('No locations')).toBeInTheDocument();

    rerender(<Cascader {...defaultProps} data={data} />);
    expect(document.querySelector('.mantine-Cascader-dropdown')).not.toHaveAttribute('data-hidden');
  });

  it('does not show the dropdown when a search has no results', async () => {
    render(<Cascader {...defaultProps} searchable />);
    await userEvent.type(screen.getByRole('combobox'), 'zzz');
    expect(document.querySelector('.mantine-Cascader-dropdown')).toHaveAttribute('data-hidden');
  });

  describe('search', () => {
    it('resets the highlighted result when the query changes', async () => {
      const spy = jest.fn();
      render(<Cascader {...defaultProps} searchable onChange={spy} />);
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'o');
      await userEvent.keyboard('{ArrowDown}{ArrowDown}');
      await userEvent.type(input, 's');
      expect(document.querySelector('[data-combobox-selected]')).toBe(null);
      await userEvent.keyboard('{ArrowDown}{Enter}');
      expect(spy).toHaveBeenCalledWith(['asia', 'jp', 'osaka'], expect.any(Array));
    });

    it('keeps the query when a controlled value is rebuilt on every render', async () => {
      function Wrapper() {
        const [stored, setStored] = useState('asia/jp/tokyo');
        const [search, setSearch] = useState('');
        return (
          <Cascader
            {...defaultProps}
            searchable
            value={stored ? stored.split('/') : null}
            onChange={(val) => setStored(val ? val.join('/') : '')}
            searchValue={search}
            onSearchChange={setSearch}
          />
        );
      }

      render(<Wrapper />);
      const input = screen.getByRole('combobox');
      await userEvent.clear(input);
      await userEvent.type(input, 'fra');
      expect(input).toHaveValue('fra');
    });

    it('does not call onSearchChange on mount', () => {
      const spy = jest.fn();
      render(<Cascader {...defaultProps} searchable searchValue="eur" onSearchChange={spy} />);
      expect(spy).not.toHaveBeenCalled();
      expect(screen.getByRole('combobox')).toHaveValue('eur');
    });

    it('displays a controlled initial value in the search input', () => {
      render(<Cascader {...defaultProps} searchable value={['asia', 'jp', 'tokyo']} />);
      expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Tokyo');
    });

    it('displays the value when data arrives after it', () => {
      const spy = jest.fn();
      const { rerender } = render(
        <Cascader
          {...defaultProps}
          data={[]}
          searchable
          defaultValue={['asia', 'jp', 'tokyo']}
          onSearchChange={spy}
        />
      );
      expect(spy).not.toHaveBeenCalled();
      rerender(
        <Cascader
          {...defaultProps}
          searchable
          defaultValue={['asia', 'jp', 'tokyo']}
          onSearchChange={spy}
        />
      );
      expect(screen.getByRole('combobox')).toHaveValue('Asia / Japan / Tokyo');
    });

    it('keeps the typed query when data changes while the dropdown is open', async () => {
      const { rerender } = render(
        <Cascader {...defaultProps} searchable defaultValue={['asia', 'jp', 'tokyo']} />
      );
      const input = screen.getByRole('combobox');
      await userEvent.clear(input);
      await userEvent.type(input, 'fra');
      rerender(
        <Cascader
          {...defaultProps}
          data={[...data]}
          searchable
          defaultValue={['asia', 'jp', 'tokyo']}
          formatValue={({ options }) => options.map((option) => option.label).join(' > ')}
        />
      );
      expect(input).toHaveValue('fra');
    });

    it('leaves Home and End to the input in column mode', async () => {
      render(<Cascader {...defaultProps} searchable />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      await userEvent.keyboard('{ArrowDown}{ArrowDown}');
      expect(screen.getByRole('option', { name: 'Europe' })).toHaveAttribute('data-current');
      expect(fireEvent.keyDown(input, { key: 'Home' })).toBe(true);
      expect(fireEvent.keyDown(input, { key: 'End' })).toBe(true);
      expect(screen.getByRole('option', { name: 'Europe' })).toHaveAttribute('data-current');
    });

    it('syncs the query when the value changes', async () => {
      const { rerender } = render(<Cascader {...defaultProps} searchable value={null} />);
      rerender(<Cascader {...defaultProps} searchable value={['europe', 'fr', 'paris']} />);
      expect(screen.getByRole('combobox')).toHaveValue('Europe / France / Paris');
      rerender(<Cascader {...defaultProps} searchable value={null} />);
      expect(screen.getByRole('combobox')).toHaveValue('');
    });
  });
});
