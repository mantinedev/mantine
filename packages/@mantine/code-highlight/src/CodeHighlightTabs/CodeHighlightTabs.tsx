import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  ScrollArea,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import {
  CodeHighlight,
  CodeHighlightSettings,
  CodeHighlightStylesNames,
} from '../CodeHighlight/CodeHighlight';
import { FileIcon } from './FileIcon';
import classes from '../CodeHighlight.module.css';

/** Available shiki languages for default Mantine shiki instance.
 *  Should be used only with *.mantine.dev projects */
export type CodeHighlightDefaultLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

export interface CodeHighlightTabsCode {
  language?: CodeHighlightDefaultLanguage | (string & {});
  code: string;
  fileName?: string;
  icon?: React.ReactNode;
}

export type CodeHighlightTabsStylesNames =
  | 'root'
  | 'files'
  | 'file'
  | 'fileIcon'
  | 'filesScrollarea'
  | CodeHighlightStylesNames;
export type CodeHighlightTabsCssVariables = {
  root: '--test';
};

export interface CodeHighlightTabsProps
  extends CodeHighlightSettings,
    BoxProps,
    StylesApiProps<CodeHighlightTabsFactory>,
    ElementProps<'div'> {
  /** Code to highlight with meta data (file name and icon) */
  code: CodeHighlightTabsCode[];

  /** Function that returns icon based on file name */
  getFileIcon?: (fileName: string) => React.ReactNode;

  /** Default active tab index */
  defaultActiveTab?: number;

  /** Index of controlled active tab state */
  activeTab?: number;

  /** Called when tab changes */
  onTabChange?: (tab: number) => void;
}

export type CodeHighlightTabsFactory = Factory<{
  props: CodeHighlightTabsProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightTabsStylesNames;
  vars: CodeHighlightTabsCssVariables;
}>;

const defaultProps: Partial<CodeHighlightTabsProps> = {};

const varsResolver = createVarsResolver<CodeHighlightTabsFactory>(() => ({
  root: {
    '--test': 'test',
  },
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
    defaultActiveTab,
    activeTab,
    onTabChange,
    defaultExpanded,
    expanded,
    onExpandedChange,
    code,
    getFileIcon,
    withCopyButton,
    withExpandButton,
    withBorder,
    radius,
    ...others
  } = props;

  const getStyles = useStyles<CodeHighlightTabsFactory>({
    name: 'CodeHighlightTabs',
    classes,
    props,
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CodeHighlightTabsFactory>({
    classNames,
    styles,
    props,
  });

  const currentCode = code[value];

  const files = code.map((node, index) => (
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
        key="file-icon"
        {...getStyles('fileIcon')}
      />
      <span key="file-name">{node.fileName}</span>
    </UnstyledButton>
  ));

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <ScrollArea type="never" dir="ltr" offsetScrollbars={false} {...getStyles('filesScrollarea')}>
        <div {...getStyles('files')}>{files}</div>
      </ScrollArea>

      <CodeHighlight
        code={currentCode.code}
        language={currentCode.language}
        expanded={_expanded}
        onExpandedChange={setExpanded}
        withCopyButton={withCopyButton}
        withExpandButton={withExpandButton}
        withBorder={withBorder}
        radius={radius}
        __withOffset
        __staticSelector="CodeHighlightTabs"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
      />
    </Box>
  );
});

CodeHighlightTabs.displayName = '@mantine/code-highlight/CodeHighlightTabs';
CodeHighlightTabs.classes = classes;
