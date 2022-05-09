import React from 'react';
import { MantineShadow } from '@mantine/styles';
import { ScrollArea } from '../../ScrollArea';
import { Popover } from '../../Popover';
import { Box } from '../../Box';
import { MantineTransition } from '../../Transition';

interface ComboboxPopoverProps {
  opened: boolean;
  transition?: MantineTransition;
  transitionDuration?: number;
  id: string;
  shadow?: MantineShadow;
  withinPortal?: boolean;
  children: React.ReactNode;
  __staticSelector?: string;
  onDirectionChange?(direction: React.CSSProperties['flexDirection']): void;
  switchDirectionOnFlip?: boolean;
  zIndex?: number;
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  positionDependencies?: any[];
}

interface ComboboxPopoverDropdownProps {
  children: React.ReactNode;
  id: string;
  component?: any;
  maxHeight?: number;
  direction?: React.CSSProperties['flexDirection'];
}

function ComboboxPopoverDropdown({
  children,
  component = 'div',
  maxHeight = 220,
  direction = 'column',
  id,
  ...others
}: ComboboxPopoverDropdownProps) {
  return (
    <Popover.Dropdown p={0} onMouseDown={(event) => event.preventDefault()} {...others}>
      <div style={{ maxHeight, display: 'flex' }}>
        <Box<'div'>
          component={(component || 'div') as any}
          id={`${id}-items`}
          aria-labelledby={`${id}-label`}
          role="listbox"
          onMouseDown={(event) => event.preventDefault()}
          style={{ flex: 1, overflowY: component !== ScrollArea ? 'auto' : undefined }}
          data-combobox-popover
        >
          <div style={{ display: 'flex', flexDirection: direction, width: '100%', padding: 4 }}>
            {children}
          </div>
        </Box>
      </div>
    </Popover.Dropdown>
  );
}

export function ComboboxPopover({
  opened,
  transition = 'fade',
  transitionDuration = 0,
  id,
  shadow,
  withinPortal,
  children,
  __staticSelector,
  onDirectionChange,
  switchDirectionOnFlip,
  zIndex,
  dropdownPosition,
  positionDependencies,
}: ComboboxPopoverProps) {
  return (
    <Popover
      width="target"
      opened={opened}
      middlewares={{ flip: dropdownPosition === 'flip', shift: false }}
      position={dropdownPosition === 'flip' ? 'bottom' : dropdownPosition}
      positionDependencies={positionDependencies}
      zIndex={zIndex}
      __staticSelector={__staticSelector}
      withinPortal={withinPortal}
      transition={transition}
      transitionDuration={transitionDuration}
      id={id}
      shadow={shadow}
      onPositionChange={(nextPosition) =>
        switchDirectionOnFlip &&
        onDirectionChange?.(nextPosition === 'top' ? 'column-reverse' : 'column')
      }
    >
      {children}
    </Popover>
  );
}

ComboboxPopover.Target = Popover.Target;
ComboboxPopover.Dropdown = ComboboxPopoverDropdown;
