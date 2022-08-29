import React from 'react';
import { ClassNames, MantineShadow, Styles, Selectors, DefaultProps } from '@mantine/styles';
import { SelectScrollArea } from '../SelectScrollArea/SelectScrollArea';
import { Popover } from '../../Popover';
import { Box } from '../../Box';
import { MantineTransition } from '../../Transition';
import useStyles from './SelectPopover.styles';

export type SelectPopoverStylesNames = Selectors<typeof useStyles>;

interface SelectPopoverDropdownProps extends DefaultProps<SelectPopoverStylesNames> {
  children: React.ReactNode;
  id: string;
  component?: any;
  maxHeight?: number | string;
  direction?: React.CSSProperties['flexDirection'];
  innerRef?: React.MutableRefObject<HTMLDivElement>;
  __staticSelector?: string;
}

function SelectPopoverDropdown({
  children,
  component = 'div',
  maxHeight = 220,
  direction = 'column',
  id,
  innerRef,
  __staticSelector,
  styles,
  classNames,
  unstyled,
  ...others
}: SelectPopoverDropdownProps) {
  const { classes } = useStyles(null, { name: __staticSelector, styles, classNames, unstyled });

  return (
    <Popover.Dropdown p={0} onMouseDown={(event) => event.preventDefault()} {...others}>
      <div style={{ maxHeight, display: 'flex' }}>
        <Box<'div'>
          component={(component || 'div') as any}
          id={`${id}-items`}
          aria-labelledby={`${id}-label`}
          role="listbox"
          onMouseDown={(event) => event.preventDefault()}
          style={{ flex: 1, overflowY: component !== SelectScrollArea ? 'auto' : undefined }}
          data-combobox-popover
          ref={innerRef}
        >
          <div className={classes.itemsWrapper} style={{ flexDirection: direction }}>
            {children}
          </div>
        </Box>
      </div>
    </Popover.Dropdown>
  );
}

interface SelectPopoverProps {
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
  classNames?: ClassNames<SelectPopoverStylesNames>;
  styles?: Styles<SelectPopoverStylesNames>;
  unstyled?: boolean;
}

export function SelectPopover({
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
}: SelectPopoverProps) {
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

SelectPopover.Target = Popover.Target;
SelectPopover.Dropdown = SelectPopoverDropdown;
