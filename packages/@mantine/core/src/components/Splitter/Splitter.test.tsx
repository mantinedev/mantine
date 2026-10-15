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

  it('sets vertical orientation on handles', () => {
    render(<Splitter {...defaultProps} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('sets aria-orientation of the separator itself on handles', () => {
    const { rerender } = render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');

    rerender(<Splitter {...defaultProps} orientation="vertical" />);
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

  it('points handle aria-controls at the preceding pane', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={33}>First</Splitter.Pane>
        <Splitter.Pane defaultSize={34} id="custom-pane-id">
          Second
        </Splitter.Pane>
        <Splitter.Pane defaultSize={33}>Third</Splitter.Pane>
      </Splitter>
    );

    const handles = screen.getAllByRole('separator');
    const first = screen.getByText('First');
    expect(first.id).not.toBe('');
    expect(handles[0]).toHaveAttribute('aria-controls', first.id);
    expect(handles[1]).toHaveAttribute('aria-controls', 'custom-pane-id');
    expect(screen.getByText('Second')).toHaveAttribute('id', 'custom-pane-id');
  });

  it('passes props returned from getHandleProps to handles', () => {
    render(
      <Splitter
        {...defaultProps}
        getHandleProps={(index) => ({
          'aria-label': `Resize pane ${index + 1}`,
          className: 'custom-handle',
          role: 'button',
        })}
      />
    );
    const handle = screen.getByRole('separator', { name: 'Resize pane 1' });
    expect(handle).toHaveClass('custom-handle');
    expect(handle).toHaveClass('mantine-Splitter-handle');
  });

  it('resizes panes with keyboard on a handle', () => {
    const ref = createRef<UseSplitterReturnValue>();
    render(
      <Splitter splitterRef={ref}>
        <Splitter.Pane defaultSize={50} min={20} max={70}>
          Left
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50}>Right</Splitter.Pane>
      </Splitter>
    );

    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(ref.current!.sizes).toEqual([51, 49]);

    fireEvent.keyDown(handle, { key: 'ArrowLeft', shiftKey: true });
    expect(ref.current!.sizes).toEqual([41, 59]);

    fireEvent.keyDown(handle, { key: 'ArrowDown' });
    expect(ref.current!.sizes).toEqual([41, 59]);

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(ref.current!.sizes).toEqual([20, 80]);

    fireEvent.keyDown(handle, { key: 'End' });
    expect(ref.current!.sizes).toEqual([70, 30]);
    expect(handle).toHaveAttribute('aria-valuenow', '70');
  });

  it('collapses collapsible pane with Enter and hides its content', () => {
    const onCollapseChange = jest.fn();
    render(
      <Splitter onCollapseChange={onCollapseChange}>
        <Splitter.Pane defaultSize={30} min={10} collapsible>
          Sidebar
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70}>Content</Splitter.Pane>
      </Splitter>
    );

    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'Enter' });

    expect(onCollapseChange).toHaveBeenLastCalledWith(0, true);
    expect(screen.getByText('Sidebar')).toHaveAttribute('data-collapsed');
    expect(screen.getByText('Sidebar')).toHaveAttribute('inert');
    expect(screen.getByText('Content')).not.toHaveAttribute('inert');

    fireEvent.keyDown(handle, { key: 'Enter' });
    expect(onCollapseChange).toHaveBeenLastCalledWith(0, false);
    expect(screen.getByText('Sidebar')).not.toHaveAttribute('data-collapsed');
    expect(screen.getByText('Sidebar')).not.toHaveAttribute('inert');
  });

  it('collapses and expands panes with splitterRef', () => {
    const ref = createRef<UseSplitterReturnValue>();
    const onCollapseChange = jest.fn();
    render(
      <Splitter splitterRef={ref} onCollapseChange={onCollapseChange}>
        <Splitter.Pane defaultSize={50}>Left</Splitter.Pane>
        <Splitter.Pane defaultSize={50} collapsible>
          Right
        </Splitter.Pane>
      </Splitter>
    );

    act(() => ref.current!.collapse(1));
    expect(ref.current!.collapsed).toEqual([false, true]);
    expect(onCollapseChange).toHaveBeenLastCalledWith(1, true);
    expect(screen.getByText('Right')).toHaveAttribute('inert');

    act(() => ref.current!.expand(1));
    expect(ref.current!.collapsed).toEqual([false, false]);
    expect(onCollapseChange).toHaveBeenLastCalledWith(1, false);
    expect(screen.getByText('Right')).not.toHaveAttribute('inert');
  });

  it('makes a non-collapsible pane at size 0 inert without marking it collapsed', () => {
    const ref = createRef<UseSplitterReturnValue>();
    render(
      <Splitter splitterRef={ref}>
        <Splitter.Pane defaultSize={50}>Left</Splitter.Pane>
        <Splitter.Pane defaultSize={50}>Right</Splitter.Pane>
      </Splitter>
    );

    act(() => ref.current!.setSizes([100, 0]));
    expect(ref.current!.collapsed).toEqual([false, false]);
    expect(screen.getByText('Right')).toHaveAttribute('inert');
    expect(screen.getByText('Right')).not.toHaveAttribute('data-collapsed');
  });

  it('renders a pane added at runtime with its default size', () => {
    function Harness({ withThird }: { withThird: boolean }) {
      return (
        <Splitter>
          <Splitter.Pane defaultSize={30}>First</Splitter.Pane>
          <Splitter.Pane defaultSize={30}>Second</Splitter.Pane>
          {withThird && <Splitter.Pane defaultSize={40}>Third</Splitter.Pane>}
        </Splitter>
      );
    }

    const { rerender } = render(<Harness withThird={false} />);
    rerender(<Harness withThird />);
    expect(screen.getByText('Third')).toHaveStyle({ flexBasis: '40%' });
    expect(screen.getAllByRole('separator')).toHaveLength(2);
    rerender(<Harness withThird={false} />);
    expect(screen.getByText('First')).toHaveStyle({ flexBasis: '30%' });
    expect(screen.getByText('Second')).toHaveStyle({ flexBasis: '30%' });
  });
});
