import React, { forwardRef, useState } from 'react';
import {
  DefaultProps,
  Popover,
  PopoverProps,
  ColorSwatch,
  SimpleGrid,
  ColorPicker,
  Group,
  ActionIcon,
  Tooltip,
  ColorPickerProps,
  useContextStylesApi,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCircleOff, IconColorPicker, IconX, IconPalette, IconCheck } from '@tabler/icons';
import { Control } from '../Control/Control';
import { useRichTextEditorContext } from '../../RichTextEditor.context';

export interface ColorPickerControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Props added to Popover component */
  popoverProps?: Partial<PopoverProps>;

  /** Props added to ColorPicker component */
  colorPickerProps?: Partial<ColorPickerProps>;

  /** List of colors that the user can choose from */
  colors: string[];

  /** Determines whether tooltips over controls should be visible */
  disableTooltips?: boolean;
}

export const ColorPickerControl = forwardRef<HTMLButtonElement, ColorPickerControlProps>(
  ({ popoverProps, colors, disableTooltips, colorPickerProps, ...others }, ref) => {
    const { unstyled } = useContextStylesApi();
    const { editor, labels } = useRichTextEditorContext();
    const [opened, { toggle, close }] = useDisclosure(false);
    const [state, setState] = useState<'palette' | 'colorPicker'>('palette');
    const currentColor = editor?.getAttributes('textStyle').color || '#000';

    const handleChange = (value: string, shouldClose = true) => {
      (editor.chain() as any).focus().setColor(value).run();
      shouldClose && close();
    };

    const handleClear = () => {
      (editor.chain() as any).focus().unsetColor().run();
      close();
    };

    const controls = colors.map((color, index) => (
      <ColorSwatch
        key={index}
        component="button"
        color={color}
        onClick={() => handleChange(color)}
        size={26}
        radius="xs"
        sx={{ cursor: 'pointer' }}
        title={labels.colorPickerColorLabel(color)}
        aria-label={labels.colorPickerColorLabel(color)}
        unstyled={unstyled}
      />
    ));

    return (
      <Popover
        opened={opened}
        withinPortal
        trapFocus
        onClose={close}
        unstyled={unstyled}
        {...popoverProps}
      >
        <Popover.Target>
          <Control
            aria-label={labels.colorPickerControlLabel}
            title={labels.colorPickerControlLabel}
            {...others}
            ref={ref}
            onClick={toggle}
          >
            <ColorSwatch color={currentColor} size={14} unstyled={unstyled} />
          </Control>
        </Popover.Target>

        <Popover.Dropdown
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
        >
          {state === 'palette' && (
            <SimpleGrid cols={7} spacing={2}>
              {controls}
            </SimpleGrid>
          )}

          {state === 'colorPicker' && (
            <ColorPicker
              defaultValue={currentColor}
              onChange={(value) => handleChange(value, false)}
              unstyled={unstyled}
              {...colorPickerProps}
            />
          )}

          <Tooltip.Group closeDelay={200}>
            <Group position="right" spacing="xs" mt="sm">
              {state === 'palette' && (
                <Tooltip
                  label={labels.colorPickerCancel}
                  withArrow
                  withinPortal
                  unstyled={unstyled}
                  disabled={disableTooltips}
                >
                  <ActionIcon variant="default" onClick={close} unstyled={unstyled}>
                    <IconX stroke={1.5} size={16} />
                  </ActionIcon>
                </Tooltip>
              )}

              <Tooltip
                label={labels.colorPickerClear}
                withArrow
                withinPortal
                unstyled={unstyled}
                disabled={disableTooltips}
              >
                <ActionIcon variant="default" onClick={handleClear} unstyled={unstyled}>
                  <IconCircleOff stroke={1.5} size={16} />
                </ActionIcon>
              </Tooltip>

              {state === 'palette' ? (
                <Tooltip
                  label={labels.colorPickerColorPicker}
                  withArrow
                  withinPortal
                  unstyled={unstyled}
                  disabled={disableTooltips}
                >
                  <ActionIcon
                    variant="default"
                    onClick={() => setState('colorPicker')}
                    unstyled={unstyled}
                  >
                    <IconColorPicker stroke={1.5} size={16} />
                  </ActionIcon>
                </Tooltip>
              ) : (
                <Tooltip
                  label={labels.colorPickerPalette}
                  withArrow
                  withinPortal
                  disabled={disableTooltips}
                  unstyled={unstyled}
                >
                  <ActionIcon
                    variant="default"
                    onClick={() => setState('palette')}
                    unstyled={unstyled}
                  >
                    <IconPalette stroke={1.5} size={16} />
                  </ActionIcon>
                </Tooltip>
              )}

              {state === 'colorPicker' && (
                <Tooltip
                  label={labels.colorPickerSave}
                  withArrow
                  withinPortal
                  disabled={disableTooltips}
                  unstyled={unstyled}
                >
                  <ActionIcon variant="default" onClick={close} unstyled={unstyled}>
                    <IconCheck stroke={1.5} size={16} />
                  </ActionIcon>
                </Tooltip>
              )}
            </Group>
          </Tooltip.Group>
        </Popover.Dropdown>
      </Popover>
    );
  }
);

ColorPickerControl.displayName = '@mantine/tiptap/ColorPickerControl';
