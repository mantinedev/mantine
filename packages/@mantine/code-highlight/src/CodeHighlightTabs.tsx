import cx from 'clsx';
import hljs from 'highlight.js';
import {
  ActionIcon,
  Box,
  BoxProps,
  CopyButton,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  ScrollArea,
  StylesApiProps,
  Tooltip,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { CopyIcon } from './CopyIcon';
import { ExpandIcon } from './ExpandIcon';
import { FileIcon } from './FileIcon';
import _classes from './CodeHighlight.module.css';
import themeClasses from './CodeHighlight.theme.module.css';

const classes = { ..._classes, root: cx(_classes.root, themeClasses.theme) };

export type CodeHighlightTabsStylesNames =
  | 'root'
  | 'code'
  | 'codeWrapper'
  | 'showCodeButton'
  | 'pre'
  | 'controls'
  | 'control'
  | 'header'
  | 'file'
  | 'files'
  | 'fileIcon';

export type CodeHighlightTabsCssVariables = {
  root: '--ch-max-collapsed-height';
};

export interface CodeHighlightTabsCode {
  language?: string;
  code: string;
  fileName?: string;
  icon?: React.ReactNode;
}

export interface CodeHighlightTabsProps
  extends BoxProps,
    StylesApiProps<CodeHighlightTabsFactory>,
    ElementProps<'div'> {
  /** Code to highlight with meta data (file name and icon) */
  code: CodeHighlightTabsCode | CodeHighlightTabsCode[];

  /** Default active tab index */
  defaultActiveTab?: number;

  /** Index of controlled active tab state */
  activeTab?: number;

  /** Called when tab changes */
  onTabChange?: (tab: number) => void;

  /** Determines whether header with file names and copy button should be rendered, `true` by default */
  withHeader?: boolean;

  /** Copy tooltip label, `'Copy code'` by default */
  copyLabel?: string;

  /** Copied tooltip label, `'Copied'` by default */
  copiedLabel?: string;

  /** Function that returns icon based on file name */
  getFileIcon?: (fileName: string) => React.ReactNode;

  /** `max-height` of code in collapsed state */
  maxCollapsedHeight?: React.CSSProperties['maxHeight'];

  /** Controlled expanded state */
  expanded?: boolean;

  /** Uncontrolled expanded state initial value */
  defaultExpanded?: boolean;

  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;

  /** Expand button label and tooltip, `'Expand code'` by default */
  expandCodeLabel?: string;

  /** Collapse button label and tooltip, `'Collapse code'` by default */
  collapseCodeLabel?: string;

  /** Determines whether to show the expand button, `false` by default */
  withExpandButton?: boolean;

  /** Determines whether copy button should be displayed, `true` by default */
  withCopyButton?: boolean;
}

export type CodeHighlightTabsFactory = Factory<{
  props: CodeHighlightTabsProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightTabsStylesNames;
}>;

const defaultProps: Partial<CodeHighlightTabsProps> = {
  withHeader: true,
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
  maxCollapsedHeight: rem('8rem'),
  expandCodeLabel: 'Expand code',
  collapseCodeLabel: 'Collapse code',
  withCopyButton: true,
};

const varsResolver = createVarsResolver<CodeHighlightTabsFactory>((_, { maxCollapsedHeight }) => ({
  root: { '--ch-max-collapsed-height': rem(maxCollapsedHeight) },
}));

export const CodeHighlightTabs = factory<CodeHighlightTabsFactory>((_props, ref) => {
  const props = useProps('CodeHighlightTabs', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    code,
    defaultActiveTab,
    activeTab,
    onTabChange,
    withHeader,
    copiedLabel,
    copyLabel,
    getFileIcon,
    maxCollapsedHeight,
    expanded,
    defaultExpanded,
    onExpandedChange,
    expandCodeLabel,
    collapseCodeLabel,
    withExpandButton,
    withCopyButton,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<CodeHighlightTabsFactory>({
    name: 'CodeHighlightTabs',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [value, setValue] = useUncontrolled({
    defaultValue: defaultActiveTab,
    value: activeTab,
    finalValue: 0,
    onChange: onTabChange,
  });

  const [_expanded, setExpanded] = useUncontrolled({
    defaultValue: defaultExpanded,
    value: expanded,
    finalValue: true,
    onChange: onExpandedChange,
  });

  const nodes = Array.isArray(code) ? code : [code];
  const currentCode = nodes[value];

  const highlighted = hljs.highlight(currentCode.code.trim(), {
    language: currentCode.language || 'plaintext',
  }).value;

  const files = nodes.map((node, index) => (
    <UnstyledButton
      {...getStyles('file')}
      key={node.fileName}
      mod={{ active: index === value }}
      onClick={() => setValue(index)}
    >
      <FileIcon
        fileIcon={node.icon}
        getFileIcon={getFileIcon}
        fileName={node.fileName}
        {...getStyles('fileIcon')}
      />
      <span>{node.fileName}</span>
    </UnstyledButton>
  ));

  return (
    <Box
      {...getStyles('root')}
      mod={[{ collapsed: !_expanded }, mod]}
      ref={ref}
      {...others}
      dir="ltr"
    >
      {withHeader && (
        <div {...getStyles('header')}>
          <ScrollArea type="never" dir="ltr" offsetScrollbars={false}>
            <div {...getStyles('files')}>{files}</div>
          </ScrollArea>
          <div {...getStyles('controls')}>
            {withExpandButton && (
              <Tooltip
                label={_expanded ? collapseCodeLabel : expandCodeLabel}
                fz="sm"
                position="left"
              >
                <ActionIcon
                  onClick={() => setExpanded(!_expanded)}
                  variant="none"
                  aria-label={_expanded ? collapseCodeLabel : expandCodeLabel}
                  {...getStyles('control')}
                >
                  <ExpandIcon expanded={_expanded} />
                </ActionIcon>
              </Tooltip>
            )}

            {withCopyButton && (
              <CopyButton value={currentCode.code.trim()}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? copiedLabel : copyLabel} fz="sm" position="left">
                    <ActionIcon
                      onClick={copy}
                      variant="none"
                      {...getStyles('control')}
                      aria-label={copied ? copiedLabel : copyLabel}
                    >
                      <CopyIcon copied={copied} />
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            )}
          </div>
        </div>
      )}

      <ScrollArea type="auto" dir="ltr" offsetScrollbars={false}>
        <Box {...getStyles('codeWrapper')} mod={{ expanded: _expanded }}>
          <pre {...getStyles('pre')}>
            <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
          </pre>
        </Box>
      </ScrollArea>
      <UnstyledButton
        {...getStyles('showCodeButton')}
        mod={{ hidden: _expanded }}
        onClick={() => setExpanded(true)}
      >
        {expandCodeLabel}
      </UnstyledButton>
    </Box>
  );
});

CodeHighlightTabs.displayName = '@mantine/core/CodeHighlightTabs';
CodeHighlightTabs.classes = classes;
