import { fireEvent } from '@testing-library/react';
import {
  externalInputFill,
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
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
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('option', { name: 'Asia' })).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
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
    expect(screen.getByRole('textbox')).toHaveValue('Asia / Japan / Tokyo');
  });

  it('supports custom formatValue', () => {
    render(
      <Cascader
        {...defaultProps}
        defaultValue={['asia', 'jp', 'tokyo']}
        formatValue={({ options }) => options.map((option) => option.label).join(' > ')}
      />
    );
    expect(screen.getByRole('textbox')).toHaveValue('Asia > Japan > Tokyo');
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
    expect(screen.getByRole('textbox')).toHaveValue('Asia / Japan / Tokyo');
    await userEvent.click(screen.getByLabelText('Clear value'));
    expect(spy).toHaveBeenCalledWith(null, []);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('flattens paths into a searchable list and commits the picked path', async () => {
    const spy = jest.fn();
    render(<Cascader {...defaultProps} searchable onChange={spy} />);
    await userEvent.type(screen.getByRole('textbox'), 'Paris');
    const option = await screen.findByRole('option', { name: /Paris/ });
    await userEvent.click(option);
    expect(spy).toHaveBeenCalledWith(['europe', 'fr', 'paris'], expect.any(Array));
  });

  it('shows nothingFoundMessage when no search result matches', async () => {
    render(<Cascader {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.type(screen.getByRole('textbox'), 'zzzzz');
    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });

  it('collapses an expanded column with ArrowLeft', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    screen.getByRole('textbox').focus();
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
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
    expect(onDropdownOpen).not.toHaveBeenCalled();
  });

  it('opens the dropdown and highlights the first option on ArrowDown', async () => {
    render(<Cascader {...defaultProps} />);
    screen.getByRole('textbox').focus();
    await userEvent.keyboard('{ArrowDown}');
    const asia = screen.getByRole('option', { name: 'Asia' });
    expect(asia).toBeVisible();
    expect(asia).toHaveAttribute('data-active', 'true');
  });

  it('keeps the parent highlighted when collapsing back to the first column', async () => {
    render(<Cascader {...defaultProps} dropdownOpened />);
    const input = screen.getByRole('textbox');
    input.focus();

    // Down highlights Asia, Right enters its children (Japan highlighted)
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    expect(screen.getByRole('option', { name: 'Japan' })).toHaveAttribute('data-active', 'true');

    // Left collapses back to a single column with Asia still highlighted
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.queryByRole('option', { name: 'Japan' })).toBe(null);
    expect(screen.getByRole('option', { name: 'Asia' })).toHaveAttribute('data-active', 'true');
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

  it('closes the dropdown on a changeOnSelect parent selection when closeOnSelect is set', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        changeOnSelect
        closeOnSelect
        defaultDropdownOpened
        onChange={spy}
      />
    );
    await userEvent.click(screen.getByRole('option', { name: 'Asia' }));
    expect(spy).toHaveBeenCalledWith(['asia'], expect.any(Array));
    expect(screen.queryByRole('option', { name: 'Asia' })).toBe(null);
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
    screen.getByRole('textbox').focus();
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

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();

    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));
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

      fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
      expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();

      armSafeArea();
      fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));
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

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));
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

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));
    leaveOption('Europe');
    fireEvent.mouseMove(document, { clientX: 20, clientY: 250 });

    expect(screen.getByRole('option', { name: 'Japan' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'France' })).toBe(null);
  });

  it('expands immediately when safeAreaPolygon is false', () => {
    render(
      <Cascader {...defaultProps} dropdownOpened expandTrigger="hover" safeAreaPolygon={false} />
    );

    fireEvent.mouseOver(screen.getByRole('option', { name: 'Asia' }));
    armSafeArea();
    fireEvent.mouseOver(screen.getByRole('option', { name: 'Europe' }));

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
      await externalInputFill(screen.getByRole('textbox'), 'Paris');
      expect(screen.getByRole('textbox')).toHaveValue('Asia / Japan / Tokyo');
    });

    it('does not open the dropdown', async () => {
      render(<Cascader {...defaultProps} searchable />);
      await externalInputFill(screen.getByRole('textbox'), 'Paris');
      expect(screen.queryByRole('option')).toBe(null);
    });

    it('does not interfere with typing', async () => {
      render(<Cascader {...defaultProps} searchable />);
      await userEvent.type(screen.getByRole('textbox'), 'Paris');
      expect(screen.getByRole('textbox')).toHaveValue('Paris');
      expect(screen.getByRole('option', { name: 'Europe / France / Paris' })).toBeVisible();
    });
  });
});
