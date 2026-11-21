import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  alpha,
  getThemeColor,
  type GetStylesApi,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  applyContextCollapsing,
  type ExpandMarker,
  type ProcessedRow,
  type RevealedLineRow,
} from './apply-context-collapsing/apply-context-collapsing';
import { type DiffResult, diffLines } from './diff-algorithm';
import {
  type DiffRow,
  type LineRow,
  groupChangeBlocks,
} from './group-change-blocks/group-change-blocks';
import { type LineEntry, splitIntoLines } from './split-into-lines/split-into-lines';
import classes from './Diff.module.css';

export type DiffStylesNames =
  | 'root'
  | 'table'
  | 'row'
  | 'lineNumber'
  | 'content'
  | 'addedLine'
  | 'removedLine'
  | 'unchangedLine'
  | 'addedHighlight'
  | 'removedHighlight'
  | 'expandControl'
  | 'splitDivider'
  | 'changeMarker';

export type DiffCssVariables = {
  root:
    | '--diff-add-color'
    | '--diff-remove-color'
    | '--diff-add-highlight-color'
    | '--diff-remove-highlight-color';
};

export interface DiffProps extends BoxProps, StylesApiProps<DiffFactory>, ElementProps<'div'> {
  /** The original text */
  previousValue: string;

  /** The modified text */
  currentValue: string;

  /** Display mode, default is `'unified'` */
  mode?: 'unified' | 'split';

  /** Diff granularity for inline highlights, default is `'words'` */
  diffMethod?: 'chars' | 'words' | 'lines';

  /** Number of unchanged lines shown around changes, default is `Infinity` */
  contextLines?: number;

  /** Determines whether to show line number gutters, default is `true` */
  withLineNumbers?: boolean;

  /** Key of `theme.colors` or any valid CSS color for added content, default is `'teal'` */
  addColor?: MantineColor;

  /** Key of `theme.colors` or any valid CSS color for removed content, default is `'red'` */
  removeColor?: MantineColor;

  /** Function to generate expand button label, default is `(hiddenCount) => \`Show ${hiddenCount} hidden lines\`` (`line` when `hiddenCount` is 1) */
  expandLabel?: (hiddenCount: number) => string;
}

export type DiffFactory = Factory<{
  props: DiffProps;
  ref: HTMLDivElement;
  stylesNames: DiffStylesNames;
  vars: DiffCssVariables;
}>;

const defaultProps = {
  mode: 'unified',
  diffMethod: 'words',
  contextLines: Infinity,
  withLineNumbers: true,
  addColor: 'teal',
  removeColor: 'red',
  expandLabel: (hiddenCount: number) =>
    `Show ${hiddenCount} hidden ${hiddenCount === 1 ? 'line' : 'lines'}`,
} satisfies Partial<DiffProps>;

const varsResolver = createVarsResolver<DiffFactory>((theme, { addColor, removeColor }) => ({
  root: {
    '--diff-add-color':
      addColor !== 'teal' ? alpha(getThemeColor(addColor!, theme), 0.1) : undefined,
    '--diff-add-highlight-color':
      addColor !== 'teal' ? alpha(getThemeColor(addColor!, theme), 0.25) : undefined,
    '--diff-remove-color':
      removeColor !== 'red' ? alpha(getThemeColor(removeColor!, theme), 0.1) : undefined,
    '--diff-remove-highlight-color':
      removeColor !== 'red' ? alpha(getThemeColor(removeColor!, theme), 0.25) : undefined,
  },
}));

type DiffGetStyles = GetStylesApi<DiffFactory>;

interface ExpandState {
  rows: DiffRow[];
  contextLines: number;
  expanded: Set<number>;
}

const NO_EXPANDED_SECTIONS = new Set<number>();

function getExpandedSections(state: ExpandState, rows: DiffRow[], contextLines: number) {
  return state.rows === rows && state.contextLines === contextLines
    ? state.expanded
    : NO_EXPANDED_SECTIONS;
}

const LINE_STYLES_NAMES = {
  add: 'addedLine',
  remove: 'removedLine',
  equal: 'unchangedLine',
} as const;

const CHANGE_MARKERS = {
  add: '+ ',
  remove: '- ',
};

function getLineCellStyles(
  getStyles: DiffGetStyles,
  selector: 'lineNumber' | 'content',
  type: DiffResult['type'] | undefined
) {
  if (!type) {
    return getStyles(selector);
  }

  const { className, style, ...attributes } = getStyles(LINE_STYLES_NAMES[type]);
  return { ...getStyles(selector, { className, style }), ...attributes };
}

interface InlineContentProps {
  inlineDiff: DiffResult[];
  side: 'add' | 'remove';
  getStyles: DiffGetStyles;
}

function InlineContent({ inlineDiff, side, getStyles }: InlineContentProps) {
  return (
    <>
      {inlineDiff.map((part, i) => {
        if (part.type === 'equal') {
          return <span key={i}>{part.value}</span>;
        }
        if (part.type === side) {
          return (
            <mark key={i} {...getStyles(side === 'add' ? 'addedHighlight' : 'removedHighlight')}>
              {part.value}
            </mark>
          );
        }
        return null;
      })}
    </>
  );
}

interface DiffLineCellsProps {
  entry: LineEntry | undefined;
  gutters: 'both' | 'old' | 'new';
  inlineDiff?: DiffResult[];
  withLineNumbers: boolean;
  getStyles: DiffGetStyles;
}

function DiffLineCells({
  entry,
  gutters,
  inlineDiff,
  withLineNumbers,
  getStyles,
}: DiffLineCellsProps) {
  const lineType = entry?.type;
  const changeType = entry && entry.type !== 'equal' ? entry.type : undefined;
  const numbers =
    gutters === 'both'
      ? [entry?.oldLineNumber, entry?.newLineNumber]
      : [gutters === 'old' ? entry?.oldLineNumber : entry?.newLineNumber];

  return (
    <>
      {withLineNumbers &&
        numbers.map((lineNumber, index) => (
          <td key={index} {...getLineCellStyles(getStyles, 'lineNumber', lineType)}>
            {lineNumber}
          </td>
        ))}
      <td {...getLineCellStyles(getStyles, 'content', lineType)}>
        {changeType && <span {...getStyles('changeMarker')}>{CHANGE_MARKERS[changeType]}</span>}
        {changeType && inlineDiff ? (
          <InlineContent inlineDiff={inlineDiff} side={changeType} getStyles={getStyles} />
        ) : (
          entry && (entry.value || '\n')
        )}
      </td>
    </>
  );
}

interface DiffExpandRowProps {
  row: ExpandMarker;
  colSpan: number;
  getStyles: DiffGetStyles;
  onExpand: (sectionIndex: number) => void;
  expandLabel: (hiddenCount: number) => string;
}

function DiffExpandRow({ row, colSpan, getStyles, onExpand, expandLabel }: DiffExpandRowProps) {
  return (
    <tr {...getStyles('row')}>
      <td colSpan={colSpan}>
        <button
          type="button"
          {...getStyles('expandControl', { focusable: true })}
          onClick={() => onExpand(row.sectionIndex)}
        >
          {expandLabel(row.hiddenCount)}
        </button>
      </td>
    </tr>
  );
}

interface DiffViewProps {
  processedRows: ProcessedRow[];
  withLineNumbers: boolean;
  getStyles: DiffGetStyles;
  onExpand: (sectionIndex: number) => void;
  expandLabel: (hiddenCount: number) => string;
  revealedRowRef: (node: HTMLTableRowElement | null) => void;
}

function getLineRowProps(
  row: LineRow | RevealedLineRow,
  getStyles: DiffGetStyles,
  revealedRowRef: DiffViewProps['revealedRowRef']
) {
  if ('revealedSectionIndex' in row) {
    return {
      ...getStyles('row', { focusable: true }),
      tabIndex: -1,
      'data-section': row.revealedSectionIndex,
      ref: revealedRowRef,
    };
  }

  return getStyles('row');
}

function DiffUnifiedView({
  processedRows,
  withLineNumbers,
  getStyles,
  onExpand,
  expandLabel,
  revealedRowRef,
}: DiffViewProps) {
  const colSpan = withLineNumbers ? 3 : 1;

  return (
    <table {...getStyles('table')}>
      <tbody>
        {processedRows.map((row, index) => {
          if (row.kind === 'expand') {
            return (
              <DiffExpandRow
                key={`expand-${row.sectionIndex}`}
                row={row}
                colSpan={colSpan}
                getStyles={getStyles}
                onExpand={onExpand}
                expandLabel={expandLabel}
              />
            );
          }

          if (row.kind === 'block') {
            return [
              ...row.removed.map((entry, lineIndex) => (
                <tr key={`${index}-remove-${lineIndex}`} {...getStyles('row')}>
                  <DiffLineCells
                    entry={entry}
                    gutters="both"
                    inlineDiff={row.inlineDiffs[lineIndex]}
                    withLineNumbers={withLineNumbers}
                    getStyles={getStyles}
                  />
                </tr>
              )),
              ...row.added.map((entry, lineIndex) => (
                <tr key={`${index}-add-${lineIndex}`} {...getStyles('row')}>
                  <DiffLineCells
                    entry={entry}
                    gutters="both"
                    inlineDiff={row.inlineDiffs[lineIndex]}
                    withLineNumbers={withLineNumbers}
                    getStyles={getStyles}
                  />
                </tr>
              )),
            ];
          }

          return (
            <tr key={index} {...getLineRowProps(row, getStyles, revealedRowRef)}>
              <DiffLineCells
                entry={row}
                gutters="both"
                withLineNumbers={withLineNumbers}
                getStyles={getStyles}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function DiffSplitView({
  processedRows,
  withLineNumbers,
  getStyles,
  onExpand,
  expandLabel,
  revealedRowRef,
}: DiffViewProps) {
  const colSpan = withLineNumbers ? 5 : 3;

  return (
    <table {...getStyles('table')}>
      <tbody>
        {processedRows.map((row, index) => {
          if (row.kind === 'expand') {
            return (
              <DiffExpandRow
                key={`expand-${row.sectionIndex}`}
                row={row}
                colSpan={colSpan}
                getStyles={getStyles}
                onExpand={onExpand}
                expandLabel={expandLabel}
              />
            );
          }

          if (row.kind === 'block') {
            return Array.from(
              { length: Math.max(row.removed.length, row.added.length) },
              (_, lineIndex) => (
                <tr key={`${index}-${lineIndex}`} {...getStyles('row')}>
                  <DiffLineCells
                    entry={row.removed[lineIndex]}
                    gutters="old"
                    inlineDiff={row.inlineDiffs[lineIndex]}
                    withLineNumbers={withLineNumbers}
                    getStyles={getStyles}
                  />
                  <td {...getStyles('splitDivider')} />
                  <DiffLineCells
                    entry={row.added[lineIndex]}
                    gutters="new"
                    inlineDiff={row.inlineDiffs[lineIndex]}
                    withLineNumbers={withLineNumbers}
                    getStyles={getStyles}
                  />
                </tr>
              )
            );
          }

          return (
            <tr key={index} {...getLineRowProps(row, getStyles, revealedRowRef)}>
              <DiffLineCells
                entry={row}
                gutters="old"
                withLineNumbers={withLineNumbers}
                getStyles={getStyles}
              />
              <td {...getStyles('splitDivider')} />
              <DiffLineCells
                entry={row}
                gutters="new"
                withLineNumbers={withLineNumbers}
                getStyles={getStyles}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export const Diff = factory<DiffFactory>((_props) => {
  const props = useProps('Diff', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    previousValue,
    currentValue,
    mode,
    diffMethod,
    contextLines,
    withLineNumbers,
    addColor,
    removeColor,
    expandLabel,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<DiffFactory>({
    name: 'Diff',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const diffRows = useMemo(() => {
    const lineDiffs = diffLines(previousValue, currentValue);
    const lines = splitIntoLines(lineDiffs);
    return groupChangeBlocks(lines, diffMethod);
  }, [previousValue, currentValue, diffMethod]);

  const [expandState, setExpandState] = useState<ExpandState>(() => ({
    rows: diffRows,
    contextLines: contextLines!,
    expanded: NO_EXPANDED_SECTIONS,
  }));

  const expandedSections = getExpandedSections(expandState, diffRows, contextLines!);
  const pendingFocusSection = useRef<number | null>(null);

  const processedRows = useMemo(
    () => applyContextCollapsing(diffRows, contextLines!, expandedSections),
    [diffRows, contextLines, expandedSections]
  );

  const handleExpand = (sectionIndex: number) => {
    pendingFocusSection.current = sectionIndex;
    setExpandState((prev) => ({
      rows: diffRows,
      contextLines: contextLines!,
      expanded: new Set(getExpandedSections(prev, diffRows, contextLines!)).add(sectionIndex),
    }));
  };

  const revealedRowRef = useCallback((node: HTMLTableRowElement | null) => {
    if (node && Number(node.dataset.section) === pendingFocusSection.current) {
      pendingFocusSection.current = null;
      node.focus();
    }
  }, []);

  const viewProps: DiffViewProps = {
    processedRows,
    withLineNumbers: withLineNumbers!,
    getStyles,
    onExpand: handleExpand,
    expandLabel: expandLabel!,
    revealedRowRef,
  };

  return (
    <Box {...getStyles('root')} mod={[{ split: mode === 'split' }, mod]} {...others}>
      {mode === 'split' ? <DiffSplitView {...viewProps} /> : <DiffUnifiedView {...viewProps} />}
    </Box>
  );
});

Diff.classes = classes;
Diff.varsResolver = varsResolver;
Diff.displayName = '@mantine/code-highlight/Diff';

export namespace Diff {
  export type Props = DiffProps;
  export type CssVariables = DiffCssVariables;
  export type Factory = DiffFactory;
  export type StylesNames = DiffStylesNames;
}
