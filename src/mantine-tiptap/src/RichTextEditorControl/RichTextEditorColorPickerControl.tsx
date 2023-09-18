import React, { forwardRef, useState } from 'react';
import {
  BoxProps,
  Popover,
  PopoverProps,
  ColorSwatch,
  SimpleGrid,
  ColorPicker,
  Group,
  ActionIcon,
  Tooltip,
  ColorPickerProps,
  useProps,
  ElementProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCircleOff, IconColorPicker, IconX, IconPalette, IconCheck } from '@tabler/icons-react';
import { RichTextEditorControl } from './RichTextEditorControl';
import { useRichTextEditorContext } from '../RichTextEditor.context';

export interface RichTextEditorColorPickerControlProps extends BoxProps, ElementProps<'button'> {
  /** Props added to Popover component */
  popoverProps?: Partial<PopoverProps>;

  /** Props added to ColorPicker component */
  colorPickerProps?: Partial<ColorPickerProps>;

  /** List of colors that the user can choose from */
  colors: string[];
}

const defaultProps: Partial<RichTextEditorColorPickerControlProps> = {};

export const RichTextEditorColorPickerControl = forwardRef<
  HTMLButtonElement,
  RichTextEditorColorPickerControlProps
>((props, ref) => {
  const { popoverProps, colors, colorPickerProps, ...others } = useProps(
    'RichTextEditorColorPickerControl',
    defaultProps,
    props
  );

  const { editor, labels, getStyles } = useRichTextEditorContext();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [state, setState] = useState<'palette' | 'colorPicker'>('palette');
  const currentColor = editor?.getAttributes('textStyle').color || 'var(--mantine-color-text)';

  const handleChange = (value: string, shouldClose = true) => {
    (editor?.chain() as any).focus().setColor(value).run();
    shouldClose && close();
  };

  const handleClear = () => {
    (editor?.chain() as any).focus().unsetColor().run();
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
      style={{ cursor: 'pointer' }}
      title={labels.colorPickerColorLabel(color)}
      aria-label={labels.colorPickerColorLabel(color)}
    />
  ));

  return (
    <Popover opened={opened} withinPortal trapFocus onClose={close} {...popoverProps}>
      <Popover.Target>
        <RichTextEditorControl
          {...others}
          aria-label={labels.colorPickerControlLabel}
          title={labels.colorPickerControlLabel}
          ref={ref}
          onClick={toggle}
        >
          <ColorSwatch color={currentColor} size={14} />
        </RichTextEditorControl>
      </Popover.Target>

      <Popover.Dropdown {...getStyles('linkEditorDropdown')}>
        {state === 'palette' && (
          <SimpleGrid cols={7} spacing={2}>
            {controls}
          </SimpleGrid>
        )}

        {state === 'colorPicker' && (
          <ColorPicker
            defaultValue={currentColor}
            onChange={(value) => handleChange(value, false)}
            {...colorPickerProps}
          />
        )}

        <Tooltip.Group closeDelay={200}>
          <Group justify="flex-end" gap="xs" mt="sm">
            {state === 'palette' && (
              <ActionIcon
                variant="default"
                onClick={close}
                title={labels.colorPickerCancel}
                aria-label={labels.colorPickerCancel}
              >
                <IconX stroke={1.5} size="1rem" />
              </ActionIcon>
            )}

            <ActionIcon
              variant="default"
              onClick={handleClear}
              title={labels.colorPickerClear}
              aria-label={labels.colorPickerClear}
            >
              <IconCircleOff stroke={1.5} size="1rem" />
            </ActionIcon>

            {state === 'palette' ? (
              <ActionIcon
                variant="default"
                onClick={() => setState('colorPicker')}
                title={labels.colorPickerColorPicker}
                aria-label={labels.colorPickerColorPicker}
              >
                <IconColorPicker stroke={1.5} size="1rem" />
              </ActionIcon>
            ) : (
              <ActionIcon
                variant="default"
                onClick={() => setState('palette')}
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
});

RichTextEditorColorPickerControl.displayName = '@mantine/tiptap/ColorPickerControl';
