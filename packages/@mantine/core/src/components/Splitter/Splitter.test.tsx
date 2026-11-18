import { createRef } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { UseSplitterReturnValue } from '@mantine/hooks';
import { render, screen, tests } from '@mantine-tests/core';
import { Splitter, SplitterProps, SplitterStylesNames } from './Splitter';

const defaultProps: SplitterProps = {
  children: [
    <Splitter.Pane defaultSize={50} min={10} key="1">
      Left pane
    </Splitter.Pane>,
    <Splitter.Pane defaultSize={50} min={10} key="2">
      Right pane
    </Splitter.Pane>,
  ],
};

describe('@mantine/core/Splitter', () => {
  tests.axe([<Splitter {...defaultProps} key="1" />]);
  tests.itSupportsSystemProps<SplitterProps, SplitterStylesNames>({
    component: Splitter,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Splitter',
    stylesApiSelectors: ['root', 'pane', 'handle', 'thumb'],
  });

  it('renders panes with correct content', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByText('Left pane')).toBeInTheDocument();
    expect(screen.getByText('Right pane')).toBeInTheDocument();
  });

  it('renders separator handles between panes', () => {
    render(<Splitter {...defaultProps} />);
    const handles = screen.getAllByRole('separator');
    expect(handles).toHaveLength(1);
  });

  it('renders correct number of handles for 3 panes', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={33} min={10}>
          First
        </Splitter.Pane>
        <Splitter.Pane defaultSize={34} min={10}>
          Second
        </Splitter.Pane>
        <Splitter.Pane defaultSize={33} min={10}>
          Third
        </Splitter.Pane>
      </Splitter>
    );
    expect(screen.getAllByRole('separator')).toHaveLength(2);
  });

  it('sets data-orientation on handles', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('merges per-handle styles and props and overrides thumb visibility independently', () => {
    const onKeyDown = jest.fn();
    const onDoubleClick = jest.fn();
    render(
      <Splitter
        withHandle={false}
        classNames={{ handle: 'shared-handle' }}
        styles={{ handle: { color: 'red' } }}
        getHandleProps={(index) => ({
          className: `handle-${index}`,
          style: { backgroundColor: 'blue' },
          mod: { locked: index === 0 },
          withHandle: index === 1,
          disabled: index === 0,
          tabIndex: 2,
          'aria-label': `Resize pane ${index + 1}`,
          onKeyDown,
          onDoubleClick,
        })}
      >
        <Splitter.Pane defaultSize={20}>A</Splitter.Pane>
        <Splitter.Pane defaultSize={30}>B</Splitter.Pane>
        <Splitter.Pane defaultSize={50}>C</Splitter.Pane>
      </Splitter>
    );

    const [first, second] = screen.getAllByRole('separator');
    expect(first).toHaveClass('shared-handle', 'handle-0');
    expect(first).toHaveStyle({ color: 'rgb(255, 0, 0)', backgroundColor: 'rgb(0, 0, 255)' });
    expect(first).toHaveAttribute('data-locked');
    expect(first).toHaveAttribute('data-disabled');
    expect(first).toHaveAttribute('aria-disabled', 'true');
    expect(first).toHaveAttribute('aria-label', 'Resize pane 1');
    expect(first).toHaveAttribute('tabindex', '-1');
    expect(first).toHaveAttribute('data-index', '0');
    expect(first.children).toHaveLength(0);
    expect(second).toHaveAttribute('data-index', '1');
    expect(second).toHaveAttribute('tabindex', '2');
    expect(second.children).toHaveLength(1);

    fireEvent.keyDown(first, { key: 'ArrowRight' });
    expect(first).toHaveAttribute('aria-valuenow', '20');
    fireEvent.keyDown(second, { key: 'ArrowRight' });
    expect(second).toHaveAttribute('aria-valuenow', '31');
    expect(onKeyDown).toHaveBeenCalledTimes(2);
    fireEvent.doubleClick(second);
    expect(second).toHaveAttribute('aria-valuenow', '30');
    expect(onDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('uses the root thumb visibility unless a handle overrides it', () => {
    const { rerender } = render(<Splitter {...defaultProps} getHandleProps={() => ({})} />);
    expect(screen.getByRole('separator').children).toHaveLength(1);
    rerender(<Splitter {...defaultProps} getHandleProps={() => ({ withHandle: false })} />);
    expect(screen.getByRole('separator').children).toHaveLength(0);
  });

  it('preserves keyed pane content when an earlier pane is removed', () => {
    const panes = [
      <Splitter.Pane key="first" defaultSize={20}>
        First
      </Splitter.Pane>,
      <Splitter.Pane key="second" defaultSize={30}>
        Second
      </Splitter.Pane>,
      <Splitter.Pane key="transcript" defaultSize={50}>
        <input aria-label="Transcript" defaultValue="Initial transcript" />
      </Splitter.Pane>,
    ];
    const { rerender } = render(<Splitter sizes={[20, 30, 50]}>{panes}</Splitter>);
    const transcript = screen.getByRole('textbox');
    fireEvent.change(transcript, { target: { value: 'Updated transcript' } });

    rerender(
      <>
        <Splitter sizes={[40, 60]}>{panes.slice(1)}</Splitter>
      </>
    );
    expect(screen.getByRole('textbox')).toBe(transcript);
    expect(transcript).toHaveValue('Updated transcript');
  });

  it('sets vertical orientation on handles', () => {
    render(<Splitter {...defaultProps} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('sets aria-orientation on handles', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders percentage panes with percent flex-basis', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={30}>Left</Splitter.Pane>
        <Splitter.Pane defaultSize={70}>Right</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Left')).toHaveStyle({ flexBasis: '30%' });
    expect(screen.getByText('Right')).toHaveStyle({ flexBasis: '70%' });
  });

  it('renders fixed pixel pane with pixel flex-basis and flexible neighbor with flex-grow', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize="240px">Sidebar</Splitter.Pane>
        <Splitter.Pane defaultSize={60}>Content</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Sidebar')).toHaveStyle({ flexGrow: '0', flexBasis: '240px' });
    expect(screen.getByText('Content')).toHaveStyle({ flexGrow: '60' });
  });

  it('renders fixed rem pane with rem flex-basis', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize="15rem">Sidebar</Splitter.Pane>
        <Splitter.Pane defaultSize={60}>Content</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Sidebar')).toHaveStyle({ flexGrow: '0', flexBasis: '15rem' });
  });

  it('uses pixel-mode flex styles when only the step uses a fixed unit (matches the hook)', () => {
    render(
      <Splitter step="10px">
        <Splitter.Pane defaultSize={1}>Left</Splitter.Pane>
        <Splitter.Pane defaultSize={1}>Right</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Left')).toHaveStyle({ flexGrow: '1' });
    expect(screen.getByText('Right')).toHaveStyle({ flexGrow: '1' });
  });

  it('uses pixel-mode flex styles when only a min uses a fixed unit (matches the hook)', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={1} min="100px">
          Left
        </Splitter.Pane>
        <Splitter.Pane defaultSize={1}>Right</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Left')).toHaveStyle({ flexGrow: '1' });
    expect(screen.getByText('Right')).toHaveStyle({ flexGrow: '1' });
  });

  it('resets adjacent panes to their default ratio when their handle is double-clicked', () => {
    const ref = createRef<UseSplitterReturnValue>();
    render(
      <Splitter splitterRef={ref}>
        <Splitter.Pane defaultSize={20} key="1">
          A
        </Splitter.Pane>
        <Splitter.Pane defaultSize={30} key="2">
          B
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} key="3">
          C
        </Splitter.Pane>
      </Splitter>
    );

    act(() => ref.current!.setSizes([10, 20, 70]));

    fireEvent.doubleClick(screen.getAllByRole('separator')[0]);

    expect(ref.current!.sizes).toEqual([12, 18, 70]);
  });

  it('does not reset on double click when resetOnDoubleClick is false', () => {
    const ref = createRef<UseSplitterReturnValue>();
    render(
      <Splitter splitterRef={ref} resetOnDoubleClick={false}>
        <Splitter.Pane defaultSize={20} key="1">
          A
        </Splitter.Pane>
        <Splitter.Pane defaultSize={30} key="2">
          B
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} key="3">
          C
        </Splitter.Pane>
      </Splitter>
    );

    act(() => ref.current!.setSizes([10, 20, 70]));

    fireEvent.doubleClick(screen.getAllByRole('separator')[0]);

    expect(ref.current!.sizes).toEqual([10, 20, 70]);
  });
});
