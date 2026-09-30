import { cloneElement, isValidElement, useCallback } from 'react';
import { factory, Factory, Popover, PopoverProps, useProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { EmojiPickerEmoji } from '../../types';
import { EmojiPicker, EmojiPickerProps } from '../EmojiPicker';
import classes from './EmojiPickerPopover.module.css';

export interface EmojiPickerPopoverProps extends EmojiPickerProps {
  /** Props passed to the `Popover` component, use `opened`, `defaultOpened` and `onOpenedChange` props to control opened state */
  popoverProps?: Omit<PopoverProps, 'children' | 'opened' | 'defaultOpened' | 'onChange'>;

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
    skinTone: skinToneProp,
    defaultSkinTone,
    onSkinToneChange,
    ...pickerProps
  } = props;

  const [opened, setOpened] = useUncontrolled({
    value: openedProp,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange,
  });

  const [skinTone, setSkinTone] = useUncontrolled({
    value: skinToneProp,
    defaultValue: defaultSkinTone,
    finalValue: 0,
    onChange: onSkinToneChange,
  });

  const isUncontrolled = openedProp === undefined;
  const target =
    isUncontrolled && isValidElement<{ onClick?: (event: React.MouseEvent) => void }>(children)
      ? cloneElement(children, {
          onClick: (event: React.MouseEvent) => {
            setOpened(!opened);
            children.props.onClick?.(event);
          },
        })
      : children;

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
      position="bottom-start"
      offset={5}
      trapFocus
      returnFocus
      {...popoverProps}
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>{target}</Popover.Target>
      <Popover.Dropdown className={classes.dropdown}>
        <EmojiPicker
          {...pickerProps}
          skinTone={skinTone}
          onSkinToneChange={setSkinTone}
          onEmojiSelect={handleEmojiSelect}
          autoFocus
        />
      </Popover.Dropdown>
    </Popover>
  );
});

EmojiPickerPopover.displayName = '@mantine/emoji/EmojiPickerPopover';
