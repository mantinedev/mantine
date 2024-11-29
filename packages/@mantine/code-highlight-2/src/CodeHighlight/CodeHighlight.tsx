import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  ScrollArea,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { CodeHighlightProvider } from './CodeHighlight.context';
import { CopyCodeButton } from './CopyCodeButton/CopyCodeButton';
import { ExpandCodeButton } from './ExpandCodeButton/ExpandCodeButton';
import classes from '../CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'root'
  | 'pre'
  | 'code'
  | 'control'
  | 'controlIcon'
  | 'controls'
  | 'scrollarea';

export type CodeHighlightCssVariables = {
  root: '--ch-max-height';
};

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightFactory>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Label for copy button in default state, `'Copy'` by default */
  copyLabel?: string;

  /** Label for copy button in copied state, `'Copied'` by default */
  copiedLabel?: string;

  /** Uncontrolled expanded default state */
  defaultExpanded?: boolean;

  /** Controlled expanded state */
  expanded?: boolean;

  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;

  /** Max height of collapsed state, `250px` by default */
  maxCollapsedHeight?: number | string;

  /** Determines whether the copy button should be displayed, `true` by default  */
  withCopyButton?: boolean;

  /** Determines whether the expand/collapse button should be displayed, `false` by default */
  withExpandButton?: boolean;

  /** Label for expand button, `'Expand code'` by default */
  expandLabel?: string;

  /** Label for collapse button, `'Collapse code'` by default */
  collapseLabel?: string;
}

export type CodeHighlightFactory = Factory<{
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
}>;

const defaultProps: Partial<CodeHighlightProps> = {
  withCopyButton: true,
};

const varsResolver = createVarsResolver<CodeHighlightFactory>((_theme, { maxCollapsedHeight }) => ({
  root: {
    '--ch-max-height': rem(maxCollapsedHeight),
  },
}));

export const CodeHighlight = factory<CodeHighlightFactory>((_props, ref) => {
  const props = useProps('CodeHighlight', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    code,
    copiedLabel,
    copyLabel,
    defaultExpanded,
    expanded,
    onExpandedChange,
    maxCollapsedHeight,
    withCopyButton,
    withExpandButton,
    expandLabel,
    collapseLabel,
    ...others
  } = props;

  const getStyles = useStyles<CodeHighlightFactory>({
    name: 'CodeHighlight',
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

  const [_expanded, setExpanded] = useUncontrolled({
    value: expanded,
    defaultValue: defaultExpanded,
    finalValue: true,
    onChange: onExpandedChange,
  });

  return (
    <CodeHighlightProvider value={{ getStyles }}>
      <Box ref={ref} {...getStyles('root')} {...others} dir="ltr">
        <div {...getStyles('controls')}>
          {withExpandButton && (
            <ExpandCodeButton
              expanded={_expanded}
              onExpand={setExpanded}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          )}
          {withCopyButton && (
            <CopyCodeButton code={code} copiedLabel={copiedLabel} copyLabel={copyLabel} />
          )}
        </div>

        <ScrollArea
          type="hover"
          scrollbarSize={4}
          dir="ltr"
          offsetScrollbars={false}
          data-collapsed={!_expanded || undefined}
          {...getStyles('scrollarea')}
        >
          <pre {...getStyles('pre')}>
            <code {...getStyles('code')}>{code.trim()}</code>
          </pre>
        </ScrollArea>
      </Box>
    </CodeHighlightProvider>
  );
});

CodeHighlight.displayName = '@mantine/code-highlight/CodeHighlight';
CodeHighlight.classes = classes;
