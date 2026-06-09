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

  it('sets aria-orientation on handles', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
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
