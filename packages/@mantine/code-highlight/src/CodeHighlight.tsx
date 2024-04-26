import cx from 'clsx';
import {
  ActionIcon,
  Box,
  BoxProps,
  CopyButton,
  ElementProps,
  factory,
  Factory,
  ScrollArea,
  StylesApiProps,
  Tooltip,
  useProps,
  useStyles,
} from '@mantine/core';
import { CopyIcon } from './CopyIcon';
import { useHighlight } from './use-highlight';
import _classes from './CodeHighlight.module.css';
import themeClasses from './CodeHighlight.theme.module.css';

const classes = { ..._classes, root: cx(_classes.root, themeClasses.theme) };

export type CodeHighlightStylesNames = 'root' | 'code' | 'pre' | 'copy';

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightFactory>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Code language, `'tsx'` by default */
  language?: string;

  /** Determines whether copy button should be displayed, `true` by default */
  withCopyButton?: boolean;

  /** Copy tooltip label, `'Copy code'` by default */
  copyLabel?: string;

  /** Copied tooltip label, `'Copied'` by default */
  copiedLabel?: string;

  /** Determines whether code should be highlighted only after component is mounted to the dom (disables code highlight on server), `false` by default */
  highlightOnClient?: boolean;
}

export type CodeHighlightFactory = Factory<{
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
}>;

const defaultProps: Partial<CodeHighlightProps> = {
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
  language: 'tsx',
  withCopyButton: true,
};

export const CodeHighlight = factory<CodeHighlightFactory>((_props, ref) => {
  const props = useProps('CodeHighlight', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    code,
    copiedLabel,
    copyLabel,
    language,
    withCopyButton,
    highlightOnClient,
    ...others
  } = props;

  const getStyles = useStyles<CodeHighlightFactory>({
    name: 'CodeHighlight',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const getCodeProps = useHighlight({
    code,
    language: language!,
    highlightOnClient,
  });

  return (
    <Box {...getStyles('root')} ref={ref} {...others} dir="ltr">
      {withCopyButton && (
        <CopyButton value={code.trim()}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? copiedLabel : copyLabel} fz="sm" position="left">
              <ActionIcon onClick={copy} variant="none" {...getStyles('copy')}>
                <CopyIcon copied={copied} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      )}

      <ScrollArea type="hover" dir="ltr" offsetScrollbars={false}>
        <pre {...getStyles('pre')}>
          <code {...getStyles('code')} {...getCodeProps()} />
        </pre>
      </ScrollArea>
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
CodeHighlight.classes = classes;
