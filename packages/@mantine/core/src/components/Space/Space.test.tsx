import { render, tests } from '@mantine-tests/core';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

function getRoot(container: HTMLElement) {
  return container.querySelector('div') as HTMLElement;
}

describe('@mantine/core/Space', () => {
  tests.itSupportsSystemProps<SpaceProps>({
    component: Space,
    props: defaultProps,
    children: true,
    classes: false,
    displayName: '@mantine/core/Space',
  });

  it('uses h as min-height', () => {
    const { container } = render(<Space h={20} />);
    expect(getRoot(container).style.height).toBe('calc(1.25rem * var(--mantine-scale))');
    expect(getRoot(container).style.minHeight).toBe('calc(1.25rem * var(--mantine-scale))');
  });

  it('uses w as min-width', () => {
    const { container } = render(<Space w={30} />);
    expect(getRoot(container).style.width).toBe('calc(1.875rem * var(--mantine-scale))');
    expect(getRoot(container).style.minWidth).toBe('calc(1.875rem * var(--mantine-scale))');
  });

  it('allows overriding min-height and min-width with mih and miw', () => {
    const { container } = render(<Space h={20} w={20} mih={10} miw={40} />);
    expect(getRoot(container).style.minHeight).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getRoot(container).style.minWidth).toBe('calc(2.5rem * var(--mantine-scale))');
  });

  it('does not set min-width and min-height without w and h', () => {
    const { container } = render(<Space />);
    expect(getRoot(container).style.minHeight).toBe('');
    expect(getRoot(container).style.minWidth).toBe('');
  });
});
