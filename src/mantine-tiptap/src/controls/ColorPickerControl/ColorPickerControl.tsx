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
  useComponentDefaultProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCircleOff, IconColorPicker, IconX, IconPalette, IconCheck } from '@tabler/icons-react';
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
}

const defaultProps: Partial<ColorPickerControlProps> = {};

export const ColorPickerControl = forwardRef<HTMLButtonElement, ColorPickerControlProps>(
  (props, ref) => {
    const { popoverProps, colors, colorPickerProps, ...others } = useComponentDefaultProps(
      'RichTextEditorColorPickerControl',
      defaultProps,
      props
    );

    const { editor, labels, unstyled } = useRichTextEditorContext();
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
                <ActionIcon
                  variant="default"
                  onClick={close}
                  unstyled={unstyled}
                  title={labels.colorPickerCancel}
                  aria-label={labels.colorPickerCancel}
                >
                  <IconX stroke={1.5} size="1rem" />
                </ActionIcon>
              )}

              <ActionIcon
                variant="default"
                onClick={handleClear}
                unstyled={unstyled}
                title={labels.colorPickerClear}
                aria-label={labels.colorPickerClear}
              >
                <IconCircleOff stroke={1.5} size="1rem" />
              </ActionIcon>

              {state === 'palette' ? (
                <ActionIcon
                  variant="default"
                  onClick={() => setState('colorPicker')}
                  unstyled={unstyled}
                  title={labels.colorPickerColorPicker}
                  aria-label={labels.colorPickerColorPicker}
                >
                  <IconColorPicker stroke={1.5} size="1rem" />
                </ActionIcon>
              ) : (
                <ActionIcon
                  variant="default"
                  onClick={() => setState('palette')}
                  unstyled={unstyled}
                  aria-label={labels.colorPickerPalette}
                  title={labels.colorPickerPalette}
                >
                  <IconPalette stroke={1.5} size="1rem" />
                </ActionIcon>
              )}

              {state === 'colorPicker' && (
                <ActionIcon
                  variant="default"
                  onClick={close}
                  unstyled={unstyled}
                  title={labels.colorPickerSave}
                  aria-label={labels.colorPickerSave}
                >
                  <IconCheck stroke={1.5} size="1rem" />
                </ActionIcon>
              )}
            </Group>
          </Tooltip.Group>
        </Popover.Dropdown>
      </Popover>
    );
  }
);

ColorPickerControl.displayName = '@mantine/tiptap/ColorPickerControl';
