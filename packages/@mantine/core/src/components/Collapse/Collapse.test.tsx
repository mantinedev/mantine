import { Activity, createRef } from 'react';
import { waitFor } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  expanded: true,
  children: <div style={{ height: '20vh' }} />,
};

describe('@mantine/core/Collapse', () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    classes: false,
    displayName: '@mantine/core/Collapse',
  });

  it('applies style when transitionDuration is 0', () => {
    render(
      <Collapse expanded transitionDuration={0} style={{ background: 'red' }}>
        <div>content</div>
      </Collapse>
    );

    expect(screen.getByText('content').parentElement).toHaveStyle({
      background: 'red',
    });
  });

  it('forwards ref when transitionDuration is 0', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Collapse expanded transitionDuration={0} ref={ref}>
        <div>content</div>
      </Collapse>
    );

    expect(ref.current).not.toBeNull();
  });

  it('applies display: none style when keepMountedMode is display-none and expanded is false (transitionDuration is 0)', () => {
    render(
      <Collapse expanded={false} transitionDuration={0} keepMounted keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );

    expect(screen.getByText('content').parentElement).toHaveStyle({
      display: 'none',
    });
  });

  it('expands content that was expanded while hidden by Activity', async () => {
    const { rerender } = render(
      <Activity mode="visible">
        <Collapse expanded={false}>
          <div>content</div>
        </Collapse>
      </Activity>
    );

    rerender(
      <Activity mode="hidden">
        <Collapse expanded>
          <div>content</div>
        </Collapse>
      </Activity>
    );

    rerender(
      <Activity mode="visible">
        <Collapse expanded>
          <div>content</div>
        </Collapse>
      </Activity>
    );

    await waitFor(() =>
      expect(screen.getByText('content').parentElement).not.toHaveStyle({ height: '0px' })
    );

    expect(screen.getByText('content').parentElement).not.toHaveStyle({ overflow: 'hidden' });
  });

  it('sets aria-hidden and inert on the collapsed panel', () => {
    const { rerender } = render(
      <Collapse expanded>
        <div>content</div>
      </Collapse>
    );

    const panel = screen.getByText('content').parentElement!;
    expect(panel).toHaveAttribute('aria-hidden', 'false');
    expect(panel).not.toHaveAttribute('inert');

    rerender(
      <Collapse expanded={false}>
        <div>content</div>
      </Collapse>
    );
    expect(panel).toHaveAttribute('aria-hidden', 'true');
    expect(panel).toHaveAttribute('inert');
  });

  it('removes collapsed content when keepMounted is false', async () => {
    const { rerender } = render(
      <Collapse expanded keepMounted={false}>
        <div>content</div>
      </Collapse>
    );
    expect(screen.getByText('content')).toBeInTheDocument();

    rerender(
      <Collapse expanded={false} keepMounted={false}>
        <div>content</div>
      </Collapse>
    );
    await waitFor(() => expect(screen.queryByText('content')).not.toBeInTheDocument());
  });

  it('keeps collapsed state when orientation changes at runtime', async () => {
    const { rerender } = render(
      <Collapse expanded orientation="vertical" keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );

    rerender(
      <Collapse expanded={false} orientation="vertical" keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );
    await waitFor(() =>
      expect(screen.getByText('content').parentElement).toHaveStyle({ display: 'none' })
    );

    rerender(
      <Collapse expanded={false} orientation="horizontal" keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );
    expect(screen.getByText('content').parentElement).toHaveStyle({ display: 'none' });

    rerender(
      <Collapse expanded orientation="horizontal" keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );
    await waitFor(() =>
      expect(screen.getByText('content').parentElement).not.toHaveStyle({ display: 'none' })
    );
    expect(screen.getByText('content').parentElement).toHaveAttribute('aria-hidden', 'false');
  });

  it('keeps opacity at 0 until the expand transition starts', async () => {
    const { rerender } = render(
      <Collapse expanded={false}>
        <div>content</div>
      </Collapse>
    );

    rerender(
      <Collapse expanded>
        <div>content</div>
      </Collapse>
    );

    const panel = screen.getByText('content').parentElement!;
    expect(panel).toHaveStyle({ opacity: '0' });
    await waitFor(() => expect(panel).toHaveStyle({ opacity: '1' }));
  });

  it('keeps opacity at 1 when animateOpacity is false', () => {
    render(
      <Collapse expanded={false} animateOpacity={false} keepMountedMode="display-none">
        <div>content</div>
      </Collapse>
    );

    expect(screen.getByText('content').parentElement).toHaveStyle({ opacity: '1' });
  });
});
