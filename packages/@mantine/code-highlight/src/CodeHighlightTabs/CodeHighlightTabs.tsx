import { useEffect, useRef } from 'react';
import {
  Box,
  BoxProps,
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
import { useId, useUncontrolled } from '@mantine/hooks';
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

export interface CodeHighlightTabsProps
  extends
    CodeHighlightSettings,
    BoxProps,
    StylesApiProps<CodeHighlightTabsFactory>,
    ElementProps<'div'> {
  /** Code to highlight with meta data (file name and icon) @category appearance */
  code: CodeHighlightTabsCode[];

  /** Function that returns icon based on file name @category appearance */
  getFileIcon?: (fileName: string) => React.ReactNode;

  /** Default active tab index @default 0 @category state */
  defaultActiveTab?: number;

  /** Index of controlled active tab state @category state */
  activeTab?: number;

  /** Called when tab changes @category state */
  onTabChange?: (tab: number) => void;
}

export type CodeHighlightTabsFactory = Factory<{
  props: CodeHighlightTabsProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightTabsStylesNames;
}>;

export const CodeHighlightTabs = factory<CodeHighlightTabsFactory>((_props) => {
  const props = useProps('CodeHighlightTabs', null, _props);
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
    maxCollapsedHeight,
    copyLabel,
    copiedLabel,
    expandCodeLabel,
    collapseCodeLabel,
    background,
    controls,
    codeColorScheme,
    withLineNumbers,
    withFirstLineIndentation,
    attributes,
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
    attributes,
    vars,
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

  const uid = useId();
  const filesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (code.length > 0 && value >= code.length) {
      setValue(code.length - 1);
    }
  }, [value, code]);

  if (code.length <= 0) {
    return null;
  }

  const currentCode = code[value] || { code: '', language: 'tsx', fileName: '' };
  const getTabId = (index: number) => `${uid}-tab-${index}`;
  const panelId = `${uid}-panel`;

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = code.length - 1;
    const indexByKey: Partial<Record<string, number>> = {
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = indexByKey[event.key];

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    setValue(nextIndex);
    filesRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  };

  const files = code.map((node, index) => (
    <UnstyledButton
      {...getStyles('file')}
      key={index}
      id={getTabId(index)}
      role="tab"
      aria-selected={index === value}
      aria-controls={panelId}
      tabIndex={index === value ? 0 : -1}
      mod={{ active: index === value }}
      onClick={() => setValue(index)}
      onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => handleTabKeyDown(event, index)}
      data-color-scheme={codeColorScheme}
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
    <Box {...getStyles('root')} {...others}>
      <ScrollArea type="never" dir="ltr" offsetScrollbars={false} {...getStyles('filesScrollarea')}>
        <div {...getStyles('files')} ref={filesRef} role="tablist" aria-orientation="horizontal">
          {files}
        </div>
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
        maxCollapsedHeight={maxCollapsedHeight}
        copiedLabel={copiedLabel}
        copyLabel={copyLabel}
        expandCodeLabel={expandCodeLabel}
        collapseCodeLabel={collapseCodeLabel}
        background={background}
        controls={controls}
        codeColorScheme={codeColorScheme}
        withLineNumbers={withLineNumbers}
        withFirstLineIndentation={withFirstLineIndentation}
        id={panelId}
        role="tabpanel"
        aria-labelledby={getTabId(value)}
        __withOffset
        __staticSelector="CodeHighlightTabs"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        attributes={attributes}
      />
    </Box>
  );
});

CodeHighlightTabs.displayName = '@mantine/code-highlight/CodeHighlightTabs';
CodeHighlightTabs.classes = classes;
