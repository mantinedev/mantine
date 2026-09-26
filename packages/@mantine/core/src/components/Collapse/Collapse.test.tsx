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
      <>
        <Activity mode="hidden">
          <Collapse expanded>
            <div>content</div>
          </Collapse>
        </Activity>
      </>
    );

    rerender(
      <>
        <Activity mode="visible">
          <Collapse expanded>
            <div>content</div>
          </Collapse>
        </Activity>
      </>
    );

    await waitFor(() =>
      expect(screen.getByText('content').parentElement).not.toHaveStyle({ height: '0px' })
    );

    expect(screen.getByText('content').parentElement).not.toHaveStyle({ overflow: 'hidden' });
  });
});
