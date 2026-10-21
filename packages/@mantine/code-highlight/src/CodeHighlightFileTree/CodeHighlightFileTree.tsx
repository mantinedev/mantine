import { useEffect, useMemo } from 'react';
import cx from 'clsx';
import {
  Box,
  BoxProps,
  ComboboxItem,
  ComboboxItemGroup,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  rem,
  RenderTreeNodePayload,
  ScrollArea,
  Select,
  StylesApiProps,
  Tree,
  getTreeExpandedState,
  useProps,
  useResolvedStylesApi,
  useStyles,
  useTree,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import {
  CodeHighlight,
  CodeHighlightSettings,
  CodeHighlightStylesNames,
} from '../CodeHighlight/CodeHighlight';
import type { CodeHighlightDefaultLanguage } from '../CodeHighlightTabs/CodeHighlightTabs';
import { FileIcon } from '../CodeHighlightTabs/FileIcon';
import { buildFileTree, getFileTreeFileName, getFileTreeParents } from './build-file-tree';
import { CodeHighlightFileTreeBreakpoint, useBelowBreakpoint } from './use-below-breakpoint';
import codeHighlightClasses from '../CodeHighlight.module.css';
import fileTreeClasses from './CodeHighlightFileTree.module.css';

const classes = { ...codeHighlightClasses, ...fileTreeClasses };

export interface CodeHighlightFileTreeCode {
  language?: CodeHighlightDefaultLanguage | (string & {});
  code: string;
  fileName: string;
  icon?: React.ReactNode;

  /** If set, the file is displayed in a separate section above the file tree */
  pinned?: boolean;
}

export type CodeHighlightFileTreeStylesNames =
  | 'root'
  | 'files'
  | 'tree'
  | 'node'
  | 'file'
  | 'folder'
  | 'fileIcon'
  | 'folderIcon'
  | 'chevron'
  | 'pinned'
  | 'select'
  | CodeHighlightStylesNames;

export type CodeHighlightFileTreeCssVariables = {
  root: '--ch-background' | '--ch-radius' | '--ch-tree-width' | '--ch-tree-sticky-top';
};

export interface CodeHighlightFileTreeProps
  extends
    CodeHighlightSettings,
    BoxProps,
    StylesApiProps<CodeHighlightFileTreeFactory>,
    ElementProps<'div'> {
  /** Code to highlight with file names, `/` in `fileName` creates folders @category appearance */
  code: CodeHighlightFileTreeCode[];

  /** Function that returns icon based on file name @category appearance */
  getFileIcon?: (fileName: string) => React.ReactNode;

  /** Function that returns folder icon based on folder path and expanded state, replaces the chevron @category appearance */
  getFolderIcon?: (folderPath: string, expanded: boolean) => React.ReactNode;

  /** File name of the uncontrolled active file, first file by default @category state */
  defaultActiveFile?: string;

  /** File name of the controlled active file @category state */
  activeFile?: string;

  /** Called when active file changes @category state */
  onActiveFileChange?: (fileName: string) => void;

  /** Folders that are expanded when the component mounts, `'*'` expands all folders @default '*' @category state */
  defaultExpandedFolders?: string[] | '*';

  /** Width of the file tree pane @default 220 @category appearance */
  treeWidth?: number | string;

  /** Offset from the top of the viewport at which the file tree sticks while the page scrolls, for example the height of a fixed header @default 0 @category appearance */
  treeStickyTop?: number | string;

  /** Breakpoint below which the file tree is replaced with a select, key of `theme.breakpoints`, number in px or any valid CSS value @default 'sm' @category appearance */
  hideTreeBelow?: CodeHighlightFileTreeBreakpoint;

  /** Accessible label of the file tree @default 'Files' @category accessibility */
  treeLabel?: string;

  /** Accessible label of the pinned files section @default 'Pinned files' @category accessibility */
  pinnedLabel?: string;

  /** Accessible label of the file select displayed below `hideTreeBelow` breakpoint @default 'Select file' @category accessibility */
  selectLabel?: string;
}

export type CodeHighlightFileTreeFactory = Factory<{
  props: CodeHighlightFileTreeProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightFileTreeStylesNames;
  vars: CodeHighlightFileTreeCssVariables;
}>;

const defaultProps = {
  defaultExpandedFolders: '*',
  hideTreeBelow: 'sm',
  treeLabel: 'Files',
  pinnedLabel: 'Pinned files',
  selectLabel: 'Select file',
} satisfies Partial<CodeHighlightFileTreeProps>;

const varsResolver = createVarsResolver<CodeHighlightFileTreeFactory>(
  (theme, { background, radius, treeWidth, treeStickyTop }) => ({
    root: {
      '--ch-background': background ? getThemeColor(background, theme) : undefined,
      '--ch-radius': typeof radius !== 'undefined' ? getRadius(radius) : undefined,
      '--ch-tree-width': typeof treeWidth !== 'undefined' ? rem(treeWidth) : undefined,
      '--ch-tree-sticky-top': typeof treeStickyTop !== 'undefined' ? rem(treeStickyTop) : undefined,
    },
  })
);

interface ChevronIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  expanded: boolean;
}

function ChevronIcon({ expanded, ...others }: ChevronIconProps) {
  return (
    <svg
      {...others}
      data-expanded={expanded || undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export const CodeHighlightFileTree = factory<CodeHighlightFileTreeFactory>((_props) => {
  const props = useProps('CodeHighlightFileTree', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    code,
    getFileIcon,
    getFolderIcon,
    defaultActiveFile,
    activeFile,
    onActiveFileChange,
    defaultExpandedFolders,
    treeWidth,
    treeStickyTop,
    hideTreeBelow,
    treeLabel,
    pinnedLabel,
    selectLabel,
    defaultExpanded,
    expanded,
    onExpandedChange,
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

  const getStyles = useStyles<CodeHighlightFileTreeFactory>({
    name: 'CodeHighlightFileTree',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CodeHighlightFileTreeFactory>(
    { classNames, styles, props }
  );

  const [value, setValue] = useUncontrolled({
    defaultValue: defaultActiveFile,
    value: activeFile,
    finalValue: code[0]?.fileName ?? '',
    onChange: onActiveFileChange,
  });

  const [_expanded, setExpanded] = useUncontrolled({
    defaultValue: defaultExpanded,
    value: expanded,
    finalValue: true,
    onChange: onExpandedChange,
  });

  const pinnedData = useMemo(() => buildFileTree(code.filter((file) => file.pinned)), [code]);
  const treeData = useMemo(() => buildFileTree(code.filter((file) => !file.pinned)), [code]);
  const fileNames = useMemo(() => code.map((file) => file.fileName), [code]);
  const belowBreakpoint = useBelowBreakpoint(hideTreeBelow);

  const handleSelectedStateChange = (selected: string[]) => {
    const next = selected[0];
    if (next !== undefined && fileNames.includes(next)) {
      setValue(next);
    }
  };

  const store = useTree({
    selectedState: value ? [value] : [],
    onSelectedStateChange: handleSelectedStateChange,
    initialExpandedState: getInitialExpandedState(treeData, defaultExpandedFolders, value),
  });

  const pinnedStore = useTree({
    selectedState: value ? [value] : [],
    onSelectedStateChange: handleSelectedStateChange,
    initialExpandedState: getInitialExpandedState(pinnedData, defaultExpandedFolders, value),
  });

  useEffect(() => {
    if (code.length > 0 && !fileNames.includes(value)) {
      setValue(code[0].fileName);
    }
  }, [value, code, fileNames]);

  useEffect(() => {
    store.initialize(treeData);
  }, [treeData]);

  useEffect(() => {
    pinnedStore.initialize(pinnedData);
  }, [pinnedData]);

  useEffect(() => {
    store.expandParents(value);
    pinnedStore.expandParents(value);
  }, [value]);

  if (code.length === 0) {
    return null;
  }

  const currentCode = code.find((file) => file.fileName === value) || code[0];

  const renderNode = ({
    node,
    hasChildren,
    expanded: nodeExpanded,
    elementProps,
  }: RenderTreeNodePayload) => {
    const { className: _labelClassName, style: _labelStyle, ...nodeProps } = elementProps;

    if (hasChildren) {
      return (
        <div {...nodeProps} {...getStyles('folder')} data-code-color-scheme={codeColorScheme}>
          {getFolderIcon ? (
            <span {...getStyles('folderIcon')}>{getFolderIcon(node.value, nodeExpanded)}</span>
          ) : (
            <ChevronIcon {...getStyles('chevron')} expanded={nodeExpanded} />
          )}
          <span>{node.label}</span>
        </div>
      );
    }

    return (
      <div {...nodeProps} {...getStyles('file')} data-code-color-scheme={codeColorScheme}>
        <FileIcon
          fileIcon={code.find((file) => file.fileName === node.value)?.icon}
          getFileIcon={getFileIcon}
          fileName={node.value}
          {...getStyles('fileIcon')}
        />
        <span>{node.label}</span>
      </div>
    );
  };

  const codeClassNames = unstyled
    ? resolvedClassNames
    : {
        ...resolvedClassNames,
        codeHighlight: cx(fileTreeClasses.codeHighlight, resolvedClassNames?.codeHighlight),
        scrollarea: cx(fileTreeClasses.codeScrollarea, resolvedClassNames?.scrollarea),
      };

  const { className: treeClassName, style: treeStyle, ...treeAttributes } = getStyles('tree');
  const { className: nodeClassName, style: nodeStyle, ...nodeAttributes } = getStyles('node');

  return (
    <Box
      {...getStyles('root')}
      {...others}
      data-with-border={withBorder || undefined}
      data-collapsed={(!_expanded && !belowBreakpoint) || undefined}
      data-code-color-scheme={codeColorScheme}
    >
      {!belowBreakpoint && (
        <ScrollArea.Autosize
          type="hover"
          scrollbarSize={4}
          mah="calc(100vh - var(--ch-tree-sticky-top, 0px))"
          {...getStyles('files')}
          data-code-color-scheme={codeColorScheme}
        >
          {pinnedData.length > 0 && (
            <div {...getStyles('pinned')} data-code-color-scheme={codeColorScheme}>
              <Tree
                data={pinnedData}
                store={pinnedStore}
                selectOnClick
                levelOffset={20}
                renderNode={renderNode}
                aria-label={pinnedLabel}
                classNames={{ root: treeClassName, node: nodeClassName }}
                styles={{ root: treeStyle, node: nodeStyle }}
                attributes={{ root: treeAttributes, node: nodeAttributes }}
                unstyled={unstyled}
              />
            </div>
          )}
          <Tree
            data={treeData}
            store={store}
            selectOnClick
            levelOffset={20}
            renderNode={renderNode}
            aria-label={treeLabel}
            classNames={{ root: treeClassName, node: nodeClassName }}
            styles={{ root: treeStyle, node: nodeStyle }}
            attributes={{ root: treeAttributes, node: nodeAttributes }}
            unstyled={unstyled}
          />
        </ScrollArea.Autosize>
      )}

      {belowBreakpoint && (
        <Select
          {...getStyles('select')}
          size="xs"
          value={currentCode.fileName}
          onChange={(next) => next !== null && setValue(next)}
          data={[...getSelectData(pinnedData), ...getSelectData(treeData)]}
          allowDeselect={false}
          aria-label={selectLabel}
          unstyled={unstyled}
        />
      )}

      <CodeHighlight
        code={currentCode.code}
        language={currentCode.language}
        expanded={_expanded}
        onExpandedChange={setExpanded}
        withCopyButton={withCopyButton}
        withExpandButton={withExpandButton}
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
        radius={0}
        unstyled={unstyled}
        __withOffset={belowBreakpoint}
        __staticSelector="CodeHighlightFileTree"
        classNames={codeClassNames}
        styles={resolvedStyles}
        attributes={attributes}
      />
    </Box>
  );
});

function getInitialExpandedState(
  treeData: ReturnType<typeof buildFileTree>,
  defaultExpandedFolders: string[] | '*',
  activeFile: string
) {
  const state = getTreeExpandedState(treeData, defaultExpandedFolders);
  getFileTreeParents(activeFile).forEach((parent) => {
    state[parent] = true;
  });
  return state;
}

function getSelectData(treeData: ReturnType<typeof buildFileTree>) {
  const result: (ComboboxItem | ComboboxItemGroup<ComboboxItem>)[] = [];

  const visit = (nodes: ReturnType<typeof buildFileTree>) => {
    for (const node of nodes) {
      if (node.children) {
        const files = node.children.filter((child) => !child.children);
        if (files.length > 0) {
          result.push({
            group: node.value,
            items: files.map((file) => ({
              value: file.value,
              label: getFileTreeFileName(file.value),
            })),
          });
        }
        visit(node.children.filter((child) => child.children));
      } else {
        result.push({ value: node.value, label: node.value });
      }
    }
  };

  visit(treeData);
  return result;
}

CodeHighlightFileTree.displayName = '@mantine/code-highlight/CodeHighlightFileTree';
CodeHighlightFileTree.classes = classes;
CodeHighlightFileTree.varsResolver = varsResolver;
