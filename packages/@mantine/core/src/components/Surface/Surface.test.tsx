import { render, screen, tests } from '@mantine-tests/core';
import { Surface, SurfaceProps, SurfaceStylesNames } from './Surface';

const defaultProps: SurfaceProps = {};

describe('@mantine/core/Surface', () => {
  tests.itSupportsSystemProps<SurfaceProps, SurfaceStylesNames>({
    component: Surface,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/Surface',
    stylesApiSelectors: ['root'],
  });

  it('sets data-with-border attribute when withBorder prop is set', () => {
    const { rerender, container } = render(<Surface {...defaultProps} withBorder />);
    expect(container.querySelector('div')).toHaveAttribute('data-with-border');
    rerender(<Surface {...defaultProps} withBorder={false} />);
    expect(container.querySelector('div')).not.toHaveAttribute('data-with-border');
  });

  it('starts at surface level 0 when rendered without a parent Surface', () => {
    const { container } = render(<Surface {...defaultProps} />);
    expect(container.querySelector('div')).toHaveAttribute('data-mantine-surface-level', '0');
  });

  it('sets --surface-bg to the named surface token for its level', () => {
    const { container } = render(<Surface level={0} />);
    expect(container.querySelector('div')).toHaveStyle({
      '--surface-bg': 'var(--mantine-color-surface-page)',
    });
  });

  it('sets --surface-bg to the panel token for level 1', () => {
    const { container } = render(<Surface level={1} />);
    expect(container.querySelector('div')).toHaveStyle({
      '--surface-bg': 'var(--mantine-color-surface-panel)',
    });
  });

  it('sets --surface-bg to the panel-2 token for level 2', () => {
    const { container } = render(<Surface level={2} />);
    expect(container.querySelector('div')).toHaveStyle({
      '--surface-bg': 'var(--mantine-color-surface-panel-2)',
    });
  });

  it('increments data-mantine-surface-level for nested surfaces, clamping at 2', () => {
    render(
      <Surface data-testid="level-0">
        <Surface data-testid="level-1">
          <Surface data-testid="level-2">
            <Surface data-testid="level-3" />
          </Surface>
        </Surface>
      </Surface>
    );

    expect(screen.getByTestId('level-0')).toHaveAttribute('data-mantine-surface-level', '0');
    expect(screen.getByTestId('level-1')).toHaveAttribute('data-mantine-surface-level', '1');
    expect(screen.getByTestId('level-2')).toHaveAttribute('data-mantine-surface-level', '2');
    expect(screen.getByTestId('level-3')).toHaveAttribute('data-mantine-surface-level', '2');
  });

  it('clamps the surface level at 2 when nested deeper than 2 times', () => {
    render(
      <Surface data-testid="l1">
        <Surface data-testid="l2">
          <Surface data-testid="l3">
            <Surface data-testid="l4">
              <Surface data-testid="l5">
                <Surface data-testid="l6" />
              </Surface>
            </Surface>
          </Surface>
        </Surface>
      </Surface>
    );

    expect(screen.getByTestId('l1')).toHaveAttribute('data-mantine-surface-level', '0');
    expect(screen.getByTestId('l2')).toHaveAttribute('data-mantine-surface-level', '1');
    expect(screen.getByTestId('l3')).toHaveAttribute('data-mantine-surface-level', '2');
    expect(screen.getByTestId('l6')).toHaveAttribute('data-mantine-surface-level', '2');
  });

  it('freezes the level at the parent value when autoDepth is false', () => {
    render(
      <Surface data-testid="parent">
        <Surface data-testid="child" autoDepth={false}>
          <Surface data-testid="grandchild" />
        </Surface>
      </Surface>
    );

    expect(screen.getByTestId('parent')).toHaveAttribute('data-mantine-surface-level', '0');
    expect(screen.getByTestId('child')).toHaveAttribute('data-mantine-surface-level', '0');
    expect(screen.getByTestId('grandchild')).toHaveAttribute('data-mantine-surface-level', '1');
  });

  it('keeps the root surface at level 0 when autoDepth is false', () => {
    const { container } = render(<Surface autoDepth={false} />);
    expect(container.querySelector('div')).toHaveAttribute('data-mantine-surface-level', '0');
  });

  it('uses an explicit numeric level and provides it to descendants', () => {
    render(
      <Surface level={1} data-testid="explicit">
        <Surface data-testid="child" />
      </Surface>
    );

    expect(screen.getByTestId('explicit')).toHaveAttribute('data-mantine-surface-level', '1');
    expect(screen.getByTestId('child')).toHaveAttribute('data-mantine-surface-level', '2');
  });

  it('supports relative levels against the parent', () => {
    render(
      <Surface level={1} data-testid="base">
        <Surface level="+1" data-testid="up" />
        <Surface level="-1" data-testid="down" />
      </Surface>
    );

    expect(screen.getByTestId('base')).toHaveAttribute('data-mantine-surface-level', '1');
    expect(screen.getByTestId('up')).toHaveAttribute('data-mantine-surface-level', '2');
    expect(screen.getByTestId('down')).toHaveAttribute('data-mantine-surface-level', '0');
  });

  it('clamps explicit levels into the 0-2 range', () => {
    render(
      <>
        <Surface level={9} data-testid="too-high" />
        <Surface level={-3} data-testid="too-low" />
      </>
    );

    expect(screen.getByTestId('too-high')).toHaveAttribute('data-mantine-surface-level', '2');
    expect(screen.getByTestId('too-low')).toHaveAttribute('data-mantine-surface-level', '0');
  });

  it('clamps relative levels into the 0-2 range against the parent', () => {
    render(
      <Surface level={0} data-testid="parent">
        <Surface level="-1" data-testid="child" />
      </Surface>
    );

    expect(screen.getByTestId('child')).toHaveAttribute('data-mantine-surface-level', '0');
  });
});
