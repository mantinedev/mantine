import React, { forwardRef, useState } from 'react';
import { IconLink, IconExternalLink } from '@tabler/icons-react';
import {
  Popover,
  TextInput,
  Button,
  UnstyledButton,
  Tooltip,
  PopoverProps,
  Selectors,
  useComponentDefaultProps,
  rem,
} from '@mantine/core';
import { useDisclosure, useInputState, useWindowEvent } from '@mantine/hooks';
import { ControlBase, RichTextEditorControlBaseProps } from '../ControlBase/ControlBase';
import { useRichTextEditorContext } from '../../RichTextEditor.context';
import useStyles from './LinkControl.styles';

export type LinkControlStylesNames = Selectors<typeof useStyles>;

export interface RichTextEditorLinkControlProps extends Partial<RichTextEditorControlBaseProps> {
  /** Props added to Popover component */
  popoverProps?: Partial<PopoverProps>;

  /** Determines whether external link control tooltip should be disabled */
  disableTooltips?: boolean;

  /** Initial state for determining if the link should be an external link */
  initialExternal?: boolean;
}

const LinkIcon: RichTextEditorControlBaseProps['icon'] = ({ size, ...others }) => (
  <IconLink size={size} stroke={1.5} {...others} />
);

const defaultProps: Partial<RichTextEditorLinkControlProps> = {
  initialExternal: false,
};

export const LinkControl = forwardRef<HTMLButtonElement, RichTextEditorLinkControlProps>(
  (props, ref) => {
    const { icon, popoverProps, disableTooltips, initialExternal, ...others } =
      useComponentDefaultProps('RichTextEditorLinkControl', defaultProps, props);

    const { editor, labels, classNames, styles, unstyled, variant } = useRichTextEditorContext();
    const { classes } = useStyles(null, {
      name: 'RichTextEditor',
      classNames,
      styles,
      unstyled,
      variant,
    });

    const [url, setUrl] = useInputState('');
    const [external, setExternal] = useState(initialExternal);
    const [opened, { open, close }] = useDisclosure(false);

    const handleOpen = () => {
      open();
      const linkData = editor?.getAttributes('link');
      setUrl(linkData?.href || '');
      setExternal(linkData?.target === '_blank');
    };

    const handleClose = () => {
      close();
      setUrl('');
      setExternal(initialExternal);
    };

    const setLink = () => {
      handleClose();
      url === ''
        ? editor.chain().focus().extendMarkRange('link').unsetLink().run()
        : editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: url, target: external ? '_blank' : null })
            .run();
    };

    const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setLink();
      }
    };

    useWindowEvent('edit-link', handleOpen, false);

    return (
      <Popover
        trapFocus
        shadow="md"
        withinPortal
        opened={opened}
        onClose={handleClose}
        offset={-44}
        zIndex={10000}
        unstyled={unstyled}
        {...popoverProps}
      >
        <Popover.Target>
          <ControlBase
            icon={icon || LinkIcon}
            aria-label={labels.linkControlLabel}
            title={labels.linkControlLabel}
            onClick={handleOpen}
            active={editor?.isActive('link')}
            unstyled={unstyled}
            {...others}
            ref={ref}
          />
        </Popover.Target>

        <Popover.Dropdown
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
        >
          <div className={classes.linkEditor}>
            <TextInput
              placeholder={labels.linkEditorInputPlaceholder}
              aria-label={labels.linkEditorInputLabel}
              type="url"
              value={url}
              onChange={setUrl}
              classNames={{ input: classes.linkEditorInput }}
              onKeyDown={handleInputKeydown}
              unstyled={unstyled}
              rightSection={
                <Tooltip
                  label={external ? labels.linkEditorExternalLink : labels.linkEditorInternalLink}
                  events={{ hover: true, focus: true, touch: true }}
                  withinPortal
                  withArrow
                  disabled={disableTooltips}
                  unstyled={unstyled}
                  zIndex={10000}
                >
                  <UnstyledButton
                    onClick={() => setExternal((e) => !e)}
                    data-active={external || undefined}
                    className={classes.linkEditorExternalControl}
                    unstyled={unstyled}
                  >
                    <IconExternalLink size={rem(14)} stroke={1.5} />
                  </UnstyledButton>
                </Tooltip>
              }
            />

            <Button
              variant="default"
              onClick={setLink}
              className={classes.linkEditorSave}
              unstyled={unstyled}
            >
              {labels.linkEditorSave}
            </Button>
          </div>
        </Popover.Dropdown>
      </Popover>
    );
  }
);
