import { useState } from 'react';
import {
  BoxProps,
  Button,
  CompoundStylesApiProps,
  factory,
  Factory,
  Popover,
  PopoverProps,
  rem,
  TextInput,
  Tooltip,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDisclosure, useInputState, useWindowEvent } from '@mantine/hooks';
import { IconExternalLink, IconLink } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControlBase, RichTextEditorControlBaseProps } from './RichTextEditorControl';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorLinkControlStylesNames =
  | 'control'
  | 'linkEditor'
  | 'linkEditorDropdown'
  | 'linkEditorSave'
  | 'linkEditorInput'
  | 'linkEditorExternalControl';

export interface RichTextEditorLinkControlProps
  extends BoxProps,
    Omit<RichTextEditorControlBaseProps, 'classNames' | 'styles' | 'vars'>,
    CompoundStylesApiProps<RichTextEditorLinkControlFactory> {
  /** Props passed down to Popover component */
  popoverProps?: Partial<PopoverProps>;

  /** Determines whether external link control tooltip should be disabled, `false` by default */
  disableTooltips?: boolean;

  /** Initial state for determining whether the link should be an external, `false` by default */
  initialExternal?: boolean;
}

export type RichTextEditorLinkControlFactory = Factory<{
  props: RichTextEditorLinkControlProps;
  ref: HTMLButtonElement;
  stylesNames: RichTextEditorLinkControlStylesNames;
  compound: true;
}>;

const LinkIcon: RichTextEditorControlBaseProps['icon'] = (props) => <IconLink {...props} />;

const defaultProps: Partial<RichTextEditorLinkControlProps> = {};

export const RichTextEditorLinkControl = factory<RichTextEditorLinkControlFactory>(
  (_props, ref) => {
    const props = useProps('RichTextEditorLinkControl', defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      icon,
      popoverProps,
      disableTooltips,
      initialExternal,
      ...others
    } = props;

    const ctx = useRichTextEditorContext();

    const stylesApiProps = { classNames, styles };

    const [url, setUrl] = useInputState('');
    const [external, setExternal] = useState(initialExternal);
    const [opened, { open, close }] = useDisclosure(false);

    const handleOpen = () => {
      open();
      const linkData = ctx.editor?.getAttributes('link');
      setUrl(linkData?.href || '');
      setExternal(linkData?.href ? linkData?.target === '_blank' : initialExternal);
    };

    const handleClose = () => {
      close();
      setUrl('');
      setExternal(initialExternal);
    };

    const setLink = () => {
      handleClose();
      url === ''
        ? ctx.editor?.chain().focus().extendMarkRange('link').unsetLink().run()
        : ctx.editor
            ?.chain()
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

    const { resolvedClassNames, resolvedStyles } =
      useResolvedStylesApi<RichTextEditorLinkControlFactory>({ classNames, styles, props });

    return (
      <Popover
        trapFocus
        shadow="md"
        withinPortal
        opened={opened}
        onChange={(_opened) => !_opened && handleClose()}
        offset={-44}
        zIndex={10000}
        {...popoverProps}
      >
        <Popover.Target>
          <RichTextEditorControlBase
            icon={icon || LinkIcon}
            {...others}
            aria-label={ctx.labels.linkControlLabel}
            title={ctx.labels.linkControlLabel}
            onClick={handleOpen}
            active={ctx.editor?.isActive('link')}
            ref={ref}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            className={className}
            style={style}
            variant={ctx.variant}
          />
        </Popover.Target>

        <Popover.Dropdown {...ctx.getStyles('linkEditorDropdown', stylesApiProps)}>
          <div {...ctx.getStyles('linkEditor', stylesApiProps)}>
            <TextInput
              placeholder={ctx.labels.linkEditorInputPlaceholder}
              aria-label={ctx.labels.linkEditorInputLabel}
              type="url"
              value={url}
              onChange={setUrl}
              classNames={{ input: ctx.getStyles('linkEditorInput', stylesApiProps).className }}
              onKeyDown={handleInputKeydown}
              rightSection={
                <Tooltip
                  label={
                    external ? ctx.labels.linkEditorExternalLink : ctx.labels.linkEditorInternalLink
                  }
                  events={{ hover: true, focus: true, touch: true }}
                  withinPortal
                  withArrow
                  disabled={disableTooltips}
                  zIndex={10000}
                >
                  <UnstyledButton
                    onClick={() => setExternal((e) => !e)}
                    data-active={external || undefined}
                    {...ctx.getStyles('linkEditorExternalControl', stylesApiProps)}
                  >
                    <IconExternalLink style={{ width: rem(14), height: rem(14) }} />
                  </UnstyledButton>
                </Tooltip>
              }
            />

            <Button
              variant="default"
              onClick={setLink}
              {...ctx.getStyles('linkEditorSave', stylesApiProps)}
            >
              {ctx.labels.linkEditorSave}
            </Button>
          </div>
        </Popover.Dropdown>
      </Popover>
    );
  }
);

RichTextEditorLinkControl.classes = classes;
RichTextEditorLinkControl.displayName = '@mantine/tiptap/RichTextEditorLinkControl';
