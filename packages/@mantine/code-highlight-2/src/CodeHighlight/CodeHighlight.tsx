import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  rem,
  ScrollArea,
  StylesApiProps,
  UnstyledButton,
  useComputedColorScheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useHighlight } from '../CodeHighlightProvider/CodeHighlightProvider';
import { CodeHighlightContextProvider } from './CodeHighlight.context';
import { CodeHighlightControl } from './CodeHighlightControl/CodeHighlightControl';
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
  | 'scrollarea'
  | 'showCodeButton';

export type CodeHighlightCssVariables = {
  root: '--ch-max-height' | '--ch-background' | '--ch-radius';
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

  /** Controls background color of the code. By default, the value depends on color scheme. */
  background?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
  radius?: MantineRadius;

  /** Determines whether the code block should have a border, `false` by default */
  withBorder?: boolean;

  /** Extra controls to display in the controls list */
  controls?: React.ReactNode[];

  /** Language of the code, used for syntax highlighting */
  language?: string;
}

export type CodeHighlightFactory = Factory<{
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
  staticComponents: {
    Control: typeof CodeHighlightControl;
  };
}>;

const defaultProps: Partial<CodeHighlightProps> = {
  withCopyButton: true,
  expandLabel: 'Expand code',
};

const varsResolver = createVarsResolver<CodeHighlightFactory>(
  (theme, { maxCollapsedHeight, background, radius }) => ({
    root: {
      '--ch-max-height': rem(maxCollapsedHeight),
      '--ch-background': getThemeColor(background, theme),
      '--ch-radius': getRadius(radius),
    },
  })
);

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
    radius,
    background,
    withBorder,
    controls,
    language,
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

  const shouldDisplayControls =
    (controls && controls.length > 0) || withExpandButton || withCopyButton;

  const colorScheme = useComputedColorScheme();
  const highlight = useHighlight();
  const highlightedCode = highlight({ code: code.trim(), language, colorScheme });

  return (
    <CodeHighlightContextProvider value={{ getStyles }}>
      <Box
        ref={ref}
        {...getStyles('root')}
        {...others}
        dir="ltr"
        data-with-border={withBorder || undefined}
      >
        {shouldDisplayControls && (
          <div {...getStyles('controls')}>
            {controls}

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
        )}

        <ScrollArea
          type="hover"
          scrollbarSize={4}
          dir="ltr"
          offsetScrollbars={false}
          data-collapsed={!_expanded || undefined}
          {...getStyles('scrollarea')}
        >
          {highlightedCode.highlighted ? (
            <div dangerouslySetInnerHTML={{ __html: highlightedCode.code }} />
          ) : (
            <pre {...getStyles('pre')}>
              <code
                {...getStyles('code')}
                dangerouslySetInnerHTML={{ __html: highlightedCode.code }}
              />
            </pre>
          )}
        </ScrollArea>

        <UnstyledButton
          {...getStyles('showCodeButton')}
          mod={{ hidden: _expanded }}
          onClick={() => setExpanded(true)}
        >
          {expandLabel}
        </UnstyledButton>
      </Box>
    </CodeHighlightContextProvider>
  );
});

CodeHighlight.displayName = '@mantine/code-highlight/CodeHighlight';
CodeHighlight.classes = classes;
CodeHighlight.Control = CodeHighlightControl;
