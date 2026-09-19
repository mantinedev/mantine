import { useCallback, useState } from 'react';
import { factory, Factory, Popover, PopoverProps, useProps } from '@mantine/core';
import type { EmojiPickerEmoji } from '../../types';
import { EmojiPicker, EmojiPickerProps } from '../EmojiPicker';
import classes from './EmojiPickerPopover.module.css';

export interface EmojiPickerPopoverProps extends EmojiPickerProps {
  /** Props passed to the `Popover` component */
  popoverProps?: Omit<PopoverProps, 'children'>;

  /** Controlled popover opened state @category state */
  opened?: boolean;

  /** Default popover opened state for uncontrolled mode @category state */
  defaultOpened?: boolean;

  /** Called when popover opened state changes @category state */
  onOpenedChange?: (opened: boolean) => void;

  /** Determines whether the popover closes after emoji is selected @default true @category behavior */
  closeOnSelect?: boolean;

  /** Popover target element @category appearance */
  children: React.ReactNode;
}

export type EmojiPickerPopoverFactory = Factory<{
  props: EmojiPickerPopoverProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {
  closeOnSelect: true,
} satisfies Partial<EmojiPickerPopoverProps>;

export const EmojiPickerPopover = factory<EmojiPickerPopoverFactory>((_props) => {
  const props = useProps('EmojiPickerPopover', defaultProps, _props);
  const {
    popoverProps,
    opened: openedProp,
    defaultOpened,
    onOpenedChange,
    closeOnSelect,
    children,
    onEmojiSelect,
    ...pickerProps
  } = props;

  const [_opened, _setOpened] = useState(defaultOpened ?? false);

  const opened = openedProp ?? _opened;
  const setOpened = useCallback(
    (val: boolean) => {
      _setOpened(val);
      onOpenedChange?.(val);
    },
    [onOpenedChange]
  );

  const handleEmojiSelect = useCallback(
    (emoji: EmojiPickerEmoji) => {
      onEmojiSelect?.(emoji);
      if (closeOnSelect) {
        setOpened(false);
      }
    },
    [onEmojiSelect, closeOnSelect, setOpened]
  );

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom-start"
      offset={5}
      trapFocus
      returnFocus
      {...popoverProps}
    >
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown className={classes.dropdown}>
        <EmojiPicker {...pickerProps} onEmojiSelect={handleEmojiSelect} autoFocus />
      </Popover.Dropdown>
    </Popover>
  );
});

EmojiPickerPopover.displayName = '@mantine/emoji/EmojiPickerPopover';
