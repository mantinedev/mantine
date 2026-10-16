import { render, screen } from '@mantine-tests/core';
import { Combobox } from '../../Combobox';
import { Menu } from '../../Menu';
import { Popover } from '../Popover';
import { PopoverScrollArea } from './PopoverScrollArea';

function TestContainer({
  padding,
  direction,
  ...props
}: { padding: string; direction?: 'ltr' | 'rtl' } & Popover.ScrollArea.Props) {
  return (
    <div style={{ padding, direction }}>
      <PopoverScrollArea data-testid="scroll-area" mah={100} {...props}>
        content
      </PopoverScrollArea>
    </div>
  );
}

const getGutter = () =>
  screen.getByTestId('scroll-area').style.getPropertyValue('--popover-scroll-area-gutter');

describe('@mantine/core/PopoverScrollArea', () => {
  it('uses inline-end padding of the parent element as gutter', () => {
    render(<TestContainer padding="4px 12px 4px 8px" />);
    expect(getGutter()).toBe('12px');
  });

  it('uses padding of the closest ancestor that has inline-end padding', () => {
    render(
      <div style={{ padding: '4px 10px' }}>
        <div>
          <PopoverScrollArea data-testid="scroll-area" mah={100}>
            content
          </PopoverScrollArea>
        </div>
      </div>
    );
    expect(getGutter()).toBe('10px');
  });

  it('stops at the absolutely positioned dropdown when it has no padding', () => {
    render(
      <div style={{ padding: '4px 10px' }}>
        <div style={{ position: 'absolute', padding: 0 }}>
          <div>
            <PopoverScrollArea data-testid="scroll-area" mah={100}>
              content
            </PopoverScrollArea>
          </div>
        </div>
      </div>
    );
    expect(getGutter()).toBe('0px');
  });

  it('uses left padding of the parent element in rtl direction', () => {
    render(<TestContainer padding="4px 12px 4px 8px" direction="rtl" />);
    expect(getGutter()).toBe('8px');
  });

  it('offsets content by default and allows disabling it', () => {
    const { rerender } = render(<TestContainer padding="0" />);
    expect(screen.getByTestId('scroll-area')).toHaveAttribute('data-offset-content');
    rerender(<TestContainer padding="0" offsetScrollbars={false} />);
    expect(screen.getByTestId('scroll-area')).not.toHaveAttribute('data-offset-content');
  });

  it('sets 4px scrollbar size by default', () => {
    render(<TestContainer padding="0" />);
    const root = screen.getByTestId('scroll-area').querySelector('.mantine-ScrollArea-root');
    expect((root as HTMLElement).style.getPropertyValue('--scrollarea-scrollbar-size')).toContain(
      '0.25rem'
    );
  });

  it('merges user classNames with viewport class', () => {
    render(<TestContainer padding="0" classNames={{ viewport: 'test-viewport' }} />);
    const viewport = screen
      .getByTestId('scroll-area')
      .querySelector('.mantine-ScrollArea-viewport');
    expect(viewport).toHaveClass('test-viewport');
    expect(viewport!.className).toContain('scrollAreaViewport');
  });

  it('is exposed as Popover.ScrollArea, Menu.ScrollArea and Combobox.ScrollArea', () => {
    expect(Popover.ScrollArea).toBe(PopoverScrollArea);
    expect(Menu.ScrollArea).toBe(PopoverScrollArea);
    expect(Combobox.ScrollArea).toBe(PopoverScrollArea);
  });

  it('has correct displayName', () => {
    expect(PopoverScrollArea.displayName).toBe('@mantine/core/PopoverScrollArea');
  });
});
