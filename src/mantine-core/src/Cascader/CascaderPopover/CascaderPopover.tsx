import React from 'react';
import { ClassNames, MantineShadow, Styles } from '@mantine/styles';
import { Box } from '../../Box';
import { Popover } from '../../Popover';
import { MantineTransition } from '../../Transition';

export type CascaderPopoverStylesNames = 'dropdown';

interface CascaderPopoverDropdownProps {
  children: React.ReactNode;
  id: string;
  component?: any;
  maxHeight?: number | string;
  direction?: React.CSSProperties['flexDirection'];
  innerRef?: React.MutableRefObject<HTMLDivElement>;
  hovered: number[];
}

function CascaderPopoverDropdown({
  children,
  component = 'div',
  maxHeight = 220,
  direction = 'column',
  id,
  innerRef,
  hovered,
  ...others
}: CascaderPopoverDropdownProps) {
  return (
    <Popover.Dropdown p={4} onMouseDown={(event) => event.preventDefault()} {...others}>
      <div style={{ maxHeight, display: 'flex' }}>
        <Box<'div'>
          component={component}
          id={`${id}-menus`}
          aria-labelledby={`${id}-label`}
          role="tree"
          aria-owns={hovered.map((i) => `${id}-menu-0-item-${i}`).join(' ')}
          onMouseDown={(event) => event.preventDefault()}
          style={{ flex: 1 }}
          data-combobox-popover
          ref={innerRef}
        >
          <div style={{ display: 'flex', flexDirection: direction, width: '100%' }}>{children}</div>
        </Box>
      </div>
    </Popover.Dropdown>
  );
}

interface CascaderPopoverProps {
  opened: boolean;
  transition?: MantineTransition;
  transitionDuration?: number;
  shadow?: MantineShadow;
  withinPortal?: boolean;
  children: React.ReactNode;
  __staticSelector?: string;
  onDirectionChange?(direction: React.CSSProperties['flexDirection']): void;
  switchDirectionOnFlip?: boolean;
  zIndex?: React.CSSProperties['zIndex'];
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  positionDependencies?: any[];
  classNames?: ClassNames<CascaderPopoverStylesNames>;
  styles?: Styles<CascaderPopoverStylesNames>;
  unstyled?: boolean;
}

export function CascaderPopover({
  opened,
  transition = 'fade',
  transitionDuration = 0,
  shadow,
  withinPortal,
  children,
  __staticSelector,
  onDirectionChange,
  switchDirectionOnFlip,
  zIndex,
  dropdownPosition,
  positionDependencies = [],
  classNames,
  styles,
  unstyled,
}: CascaderPopoverProps) {
  return (
    <Popover
      unstyled={unstyled}
      classNames={classNames}
      styles={styles}
      width="target"
      withRoles={false}
      opened={opened}
      middlewares={{ flip: dropdownPosition === 'flip', shift: false }}
      position={dropdownPosition === 'flip' ? 'bottom' : dropdownPosition}
      positionDependencies={positionDependencies}
      zIndex={zIndex}
      __staticSelector={__staticSelector}
      withinPortal={withinPortal}
      transition={transition}
      transitionDuration={transitionDuration}
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

CascaderPopover.Target = Popover.Target;
CascaderPopover.Dropdown = CascaderPopoverDropdown;
