import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  alpha,
  getThemeColor,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  applyContextCollapsing,
  ProcessedRow,
} from './apply-context-collapsing/apply-context-collapsing';
import { DiffResult, diffLines } from './diff-algorithm';
import { pairHunks } from './pair-hunks/pair-hunks';
import { splitIntoLines } from './split-into-lines/split-into-lines';
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
  | 'splitDivider';

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

  /** Function to generate expand button label, default is `(hiddenCount) => \`Show ${hiddenCount} hidden lines\`` */
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
  expandLabel: (hiddenCount: number) => `Show ${hiddenCount} hidden lines`,
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

function getLineStyleName(type: 'add' | 'remove' | 'equal') {
  if (type === 'add') {
    return 'addedLine';
  }
  if (type === 'remove') {
    return 'removedLine';
  }
  return 'unchangedLine';
}

function formatLineValue(value: string) {
  return value.replace(/\r?\n$/, '');
}

interface InlineContentProps {
  inlineDiff: DiffResult[];
  side: 'add' | 'remove';
  getStyles: ReturnType<typeof useStyles<DiffFactory>>;
}

function InlineContent({ inlineDiff, side, getStyles }: InlineContentProps) {
  return (
    <>
      {inlineDiff.map((part, i) => {
        if (part.type === 'equal') {
          return <span key={i}>{part.value}</span>;
        }
        if (
          (side === 'remove' && part.type === 'remove') ||
          (side === 'add' && part.type === 'add')
        ) {
          const highlightStyle = side === 'add' ? 'addedHighlight' : 'removedHighlight';
          return (
            <mark key={i} {...getStyles(highlightStyle)}>
              {part.value}
            </mark>
          );
        }
        return null;
      })}
    </>
  );
}

interface DiffViewProps {
  processedRows: ProcessedRow[];
  withLineNumbers: boolean;
  getStyles: ReturnType<typeof useStyles<DiffFactory>>;
  onExpand: (sectionIndex: number) => void;
  expandLabel: (hiddenCount: number) => string;
}

function DiffUnifiedView({
  processedRows,
  withLineNumbers,
  getStyles,
  onExpand,
  expandLabel,
}: DiffViewProps) {
  const colSpan = withLineNumbers ? 3 : 1;

  return (
    <table {...getStyles('table')}>
      <tbody>
        {processedRows.map((row, index) => {
          if (row.kind === 'expand') {
            return (
              <tr key={`expand-${row.sectionIndex}`} {...getStyles('row')}>
                <td colSpan={colSpan}>
                  <button
                    type="button"
                    {...getStyles('expandControl')}
                    onClick={() => onExpand(row.sectionIndex)}
                  >
                    {expandLabel(row.hiddenCount)}
                  </button>
                </td>
              </tr>
            );
          }

          if (row.kind === 'hunkPair') {
            return [
              <tr key={`${index}-remove`} {...getStyles('row')}>
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('remove')],
                    })}
                  >
                    {row.removedLine.oldLineNumber}
                  </td>
                )}
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('remove')],
                    })}
                  />
                )}
                <td
                  {...getStyles('content', {
                    className: classes[getLineStyleName('remove')],
                  })}
                >
                  <InlineContent inlineDiff={row.inlineDiff} side="remove" getStyles={getStyles} />
                </td>
              </tr>,
              <tr key={`${index}-add`} {...getStyles('row')}>
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('add')],
                    })}
                  />
                )}
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('add')],
                    })}
                  >
                    {row.addedLine.newLineNumber}
                  </td>
                )}
                <td
                  {...getStyles('content', {
                    className: classes[getLineStyleName('add')],
                  })}
                >
                  <InlineContent inlineDiff={row.inlineDiff} side="add" getStyles={getStyles} />
                </td>
              </tr>,
            ];
          }

          const lineStyleName = getLineStyleName(row.type);

          return (
            <tr key={index} {...getStyles('row')}>
              {withLineNumbers && (
                <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                  {row.oldLineNumber}
                </td>
              )}
              {withLineNumbers && (
                <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                  {row.newLineNumber}
                </td>
              )}
              <td {...getStyles('content', { className: classes[lineStyleName] })}>
                {formatLineValue(row.value)}
              </td>
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
}: DiffViewProps) {
  const colSpan = withLineNumbers ? 5 : 3;

  return (
    <table {...getStyles('table')}>
      <tbody>
        {processedRows.map((row, index) => {
          if (row.kind === 'expand') {
            return (
              <tr key={`expand-${row.sectionIndex}`} {...getStyles('row')}>
                <td colSpan={colSpan}>
                  <button
                    type="button"
                    {...getStyles('expandControl')}
                    onClick={() => onExpand(row.sectionIndex)}
                  >
                    {expandLabel(row.hiddenCount)}
                  </button>
                </td>
              </tr>
            );
          }

          if (row.kind === 'hunkPair') {
            return (
              <tr key={index} {...getStyles('row')}>
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('remove')],
                    })}
                  >
                    {row.removedLine.oldLineNumber}
                  </td>
                )}
                <td
                  {...getStyles('content', {
                    className: classes[getLineStyleName('remove')],
                  })}
                >
                  <InlineContent inlineDiff={row.inlineDiff} side="remove" getStyles={getStyles} />
                </td>
                <td {...getStyles('splitDivider')} />
                {withLineNumbers && (
                  <td
                    {...getStyles('lineNumber', {
                      className: classes[getLineStyleName('add')],
                    })}
                  >
                    {row.addedLine.newLineNumber}
                  </td>
                )}
                <td
                  {...getStyles('content', {
                    className: classes[getLineStyleName('add')],
                  })}
                >
                  <InlineContent inlineDiff={row.inlineDiff} side="add" getStyles={getStyles} />
                </td>
              </tr>
            );
          }

          const lineStyleName = getLineStyleName(row.type);

          if (row.type === 'equal') {
            return (
              <tr key={index} {...getStyles('row')}>
                {withLineNumbers && (
                  <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                    {row.oldLineNumber}
                  </td>
                )}
                <td {...getStyles('content', { className: classes[lineStyleName] })}>
                  {formatLineValue(row.value)}
                </td>
                <td {...getStyles('splitDivider')} />
                {withLineNumbers && (
                  <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                    {row.newLineNumber}
                  </td>
                )}
                <td {...getStyles('content', { className: classes[lineStyleName] })}>
                  {formatLineValue(row.value)}
                </td>
              </tr>
            );
          }

          if (row.type === 'remove') {
            return (
              <tr key={index} {...getStyles('row')}>
                {withLineNumbers && (
                  <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                    {row.oldLineNumber}
                  </td>
                )}
                <td {...getStyles('content', { className: classes[lineStyleName] })}>
                  {formatLineValue(row.value)}
                </td>
                <td {...getStyles('splitDivider')} />
                {withLineNumbers && <td {...getStyles('lineNumber')} />}
                <td {...getStyles('content')} />
              </tr>
            );
          }

          return (
            <tr key={index} {...getStyles('row')}>
              {withLineNumbers && <td {...getStyles('lineNumber')} />}
              <td {...getStyles('content')} />
              <td {...getStyles('splitDivider')} />
              {withLineNumbers && (
                <td {...getStyles('lineNumber', { className: classes[lineStyleName] })}>
                  {row.newLineNumber}
                </td>
              )}
              <td {...getStyles('content', { className: classes[lineStyleName] })}>
                {formatLineValue(row.value)}
              </td>
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

  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    setExpandedSections(new Set());
  }, [previousValue, currentValue, diffMethod, contextLines]);

  const pairedRows = useMemo(() => {
    const lineDiffs = diffLines(previousValue, currentValue);
    const lines = splitIntoLines(lineDiffs);
    return pairHunks(lines, diffMethod!);
  }, [previousValue, currentValue, diffMethod]);

  const processedRows = useMemo(
    () => applyContextCollapsing(pairedRows, contextLines!, expandedSections),
    [pairedRows, contextLines, expandedSections]
  );

  const handleExpand = (sectionIndex: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.add(sectionIndex);
      return next;
    });
  };

  return (
    <Box {...getStyles('root')} mod={[{ split: mode === 'split' }, mod]} {...others}>
      {mode === 'split' ? (
        <DiffSplitView
          processedRows={processedRows}
          withLineNumbers={withLineNumbers!}
          getStyles={getStyles}
          onExpand={handleExpand}
          expandLabel={expandLabel!}
        />
      ) : (
        <DiffUnifiedView
          processedRows={processedRows}
          withLineNumbers={withLineNumbers!}
          getStyles={getStyles}
          onExpand={handleExpand}
          expandLabel={expandLabel!}
        />
      )}
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
